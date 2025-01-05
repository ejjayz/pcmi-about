window.onload = function() {
    const minimumRequiredVersionCode = 0.1; // Set this to your minimum required version
    
    // Check if we're already on the update page to avoid infinite redirect
    if (window.location.href.includes("pcmi-update")) {
        return; // Exit if we're already on the update page
    }

    // Check localStorage for the Appilix app version code
    const versionCode = localStorage.getItem("appilix_app_version_code");
    
    // Only redirect if version is outdated
    if (versionCode !== null && parseFloat(versionCode) < minimumRequiredVersionCode) {
        // Redirect to your custom update page (index.html)
        window.location.href = "update/index.html";
    }
    // If version is current or higher, do nothing and continue with normal app flow
};