// SCORM 1.2 API Wrapper for Full Page Content
var SCORM_API = null;
var SCORM_initialized = false;
var SCORM_finished = false;
var pageStartTime = new Date();
var totalScore = 0;
var totalPossible = 0;

// Find the SCORM API
function findAPI(win) {
    var findAPITries = 0;
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        if (findAPITries > 7) return null;
        win = win.parent;
    }
    return win.API;
}

function getAPI() {
    var theAPI = findAPI(window);
    if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined")) {
        theAPI = findAPI(window.opener);
    }
    return theAPI;
}

// Initialize SCORM connection
function SCORM_Initialize() {
    SCORM_API = getAPI();

    if (SCORM_API != null) {
        SCORM_initialized = SCORM_API.LMSInitialize("");
        if (SCORM_initialized) {
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "incomplete");
            SCORM_API.LMSCommit("");

            // Track page views
            trackPageView();
            return true;
        }
    }
    return false;
}

// Track time spent
function SCORM_SetSessionTime() {
    if (SCORM_API != null && SCORM_initialized) {
        var now = new Date();
        var seconds = Math.round((now - pageStartTime) / 1000);
        var timeStr = convertSecondsToSCORMTime(seconds);
        SCORM_API.LMSSetValue("cmi.core.session_time", timeStr);
        SCORM_API.LMSCommit("");
    }
}

// Convert seconds to SCORM time format (HH:MM:SS)
function convertSecondsToSCORMTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var mins = Math.floor((seconds % 3600) / 60);
    var secs = seconds % 60;

    return pad(hours) + ":" + pad(mins) + ":" + pad(secs);
}

function pad(num) {
    return (num < 10 ? "0" : "") + num;
}

// Track page sections viewed
function trackPageView() {
    if (SCORM_API != null && SCORM_initialized) {
        var currentPage = window.location.hash || "main";
        SCORM_API.LMSSetValue("cmi.core.lesson_location", currentPage);
        SCORM_API.LMSCommit("");
    }
}

// Track widget interactions
function trackWidgetInteraction(widgetName, value) {
    if (SCORM_API != null && SCORM_initialized) {
        var interactionCount = SCORM_API.LMSGetValue("cmi.interactions._count");
        if (interactionCount == "") interactionCount = 0;

        SCORM_API.LMSSetValue("cmi.interactions." + interactionCount + ".id", widgetName);
        SCORM_API.LMSSetValue("cmi.interactions." + interactionCount + ".type", "other");
        SCORM_API.LMSSetValue("cmi.interactions." + interactionCount + ".student_response", value);
        SCORM_API.LMSSetValue("cmi.interactions." + interactionCount + ".result", "neutral");
        SCORM_API.LMSSetValue("cmi.interactions." + interactionCount + ".time", getCurrentTime());

        SCORM_API.LMSCommit("");
    }
}

// Set quiz score
function SCORM_SetQuizScore(score, possible) {
    totalScore += score;
    totalPossible += possible;

    if (SCORM_API != null && SCORM_initialized) {
        var percentage = Math.round((totalScore / totalPossible) * 100);

        SCORM_API.LMSSetValue("cmi.core.score.raw", percentage.toString());
        SCORM_API.LMSSetValue("cmi.core.score.min", "0");
        SCORM_API.LMSSetValue("cmi.core.score.max", "100");

        // Set completion based on viewing + quiz
        if (percentage >= 70) {
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "passed");
        } else if (percentage < 70 && totalPossible > 0) {
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "failed");
        }

        SCORM_API.LMSCommit("");
    }
}

// Mark page as complete
function SCORM_SetComplete() {
    if (SCORM_API != null && SCORM_initialized) {
        var status = SCORM_API.LMSGetValue("cmi.core.lesson_status");
        if (status != "passed" && status != "failed") {
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "completed");
        }
        SCORM_SetSessionTime();
        SCORM_API.LMSCommit("");
    }
}

// Finish SCORM session
function SCORM_Finish() {
    if (SCORM_API != null && SCORM_initialized && !SCORM_finished) {
        SCORM_SetSessionTime();
        SCORM_API.LMSCommit("");
        SCORM_API.LMSFinish("");
        SCORM_finished = true;
    }
}

// Helper function
function getCurrentTime() {
    var d = new Date();
    return pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
}

// Track scroll progress
var maxScroll = 0;
function trackScrollProgress() {
    var scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll > 90) {
            SCORM_SetComplete();
        }
    }
}

// Initialize when page loads
window.addEventListener('load', function() {
    SCORM_Initialize();
    window.addEventListener('scroll', trackScrollProgress);
});

// Save progress periodically
setInterval(function() {
    if (SCORM_initialized) {
        SCORM_SetSessionTime();
    }
}, 60000); // Every minute

// Finish when page unloads
window.addEventListener('beforeunload', function() {
    SCORM_Finish();
});

// Make functions globally available
window.SCORM_SetQuizScore = SCORM_SetQuizScore;
window.trackWidgetInteraction = trackWidgetInteraction;
window.SCORM_SetComplete = SCORM_SetComplete;