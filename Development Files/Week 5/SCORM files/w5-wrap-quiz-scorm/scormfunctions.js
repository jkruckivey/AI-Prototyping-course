// Basic SCORM 1.2 API implementation
function doStart() {
    if (typeof parent !== 'undefined' && parent.API) {
        parent.API.LMSInitialize("");
        parent.API.LMSSetValue("cmi.core.lesson_status", "incomplete");
    }
}

function doFinish() {
    if (typeof parent !== 'undefined' && parent.API) {
        parent.API.LMSSetValue("cmi.core.lesson_status", "completed");
        parent.API.LMSFinish("");
    }
}

// Auto-initialize when page loads
window.addEventListener('load', function() {
    doStart();
});

// Auto-complete when page unloads
window.addEventListener('beforeunload', function() {
    doFinish();
});