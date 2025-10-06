// SCORM 1.2 API Wrapper
// This file handles all SCORM communication with the LMS

var SCORM_API = null;
var SCORM_initialized = false;
var SCORM_finished = false;

// Find the SCORM API
function findAPI(win) {
    var findAPITries = 0;
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        if (findAPITries > 7) {
            alert("Error finding API -- too deeply nested.");
            return null;
        }
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
            // Set initial values
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "incomplete");
            SCORM_API.LMSSetValue("cmi.core.score.min", "0");
            SCORM_API.LMSSetValue("cmi.core.score.max", "100");
            SCORM_API.LMSCommit("");
            return true;
        }
    }
    return false;
}

// Set score in SCORM
function SCORM_SetScore(score) {
    if (SCORM_API != null && SCORM_initialized) {
        // Score should be 0-100
        SCORM_API.LMSSetValue("cmi.core.score.raw", score.toString());

        // Set pass/fail based on 70% threshold
        if (score >= 70) {
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "passed");
        } else {
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "failed");
        }

        SCORM_API.LMSCommit("");
        return true;
    }
    return false;
}

// Mark as complete
function SCORM_SetComplete() {
    if (SCORM_API != null && SCORM_initialized) {
        var status = SCORM_API.LMSGetValue("cmi.core.lesson_status");
        // Only set to completed if not already passed or failed
        if (status != "passed" && status != "failed") {
            SCORM_API.LMSSetValue("cmi.core.lesson_status", "completed");
        }
        SCORM_API.LMSCommit("");
        return true;
    }
    return false;
}

// Finish SCORM session
function SCORM_Finish() {
    if (SCORM_API != null && SCORM_initialized && !SCORM_finished) {
        SCORM_API.LMSCommit("");
        SCORM_API.LMSFinish("");
        SCORM_finished = true;
        return true;
    }
    return false;
}

// Set interaction data (optional - for detailed tracking)
function SCORM_SetInteraction(id, type, correct, student_response, result) {
    if (SCORM_API != null && SCORM_initialized) {
        var interactionIndex = SCORM_API.LMSGetValue("cmi.interactions._count");
        if (interactionIndex == "") interactionIndex = 0;

        SCORM_API.LMSSetValue("cmi.interactions." + interactionIndex + ".id", id);
        SCORM_API.LMSSetValue("cmi.interactions." + interactionIndex + ".type", type);
        SCORM_API.LMSSetValue("cmi.interactions." + interactionIndex + ".student_response", student_response);
        SCORM_API.LMSSetValue("cmi.interactions." + interactionIndex + ".result", result);
        SCORM_API.LMSSetValue("cmi.interactions." + interactionIndex + ".time", getCurrentTime());

        SCORM_API.LMSCommit("");
        return true;
    }
    return false;
}

// Helper function to get current time in SCORM format (HH:MM:SS)
function getCurrentTime() {
    var d = new Date();
    var hours = d.getHours().toString().padStart(2, '0');
    var minutes = d.getMinutes().toString().padStart(2, '0');
    var seconds = d.getSeconds().toString().padStart(2, '0');
    return hours + ":" + minutes + ":" + seconds;
}

// Initialize when page loads
window.addEventListener('load', function() {
    SCORM_Initialize();
});

// Finish when page unloads
window.addEventListener('beforeunload', function() {
    SCORM_Finish();
});

// Make functions available globally
window.SCORM_SetScore = SCORM_SetScore;
window.SCORM_SetComplete = SCORM_SetComplete;
window.SCORM_SetInteraction = SCORM_SetInteraction;