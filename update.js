window.onload = function() {
    // Check if we're already on the update page to avoid infinite redirect
    if (window.location.href.includes("update")) {
        return; // Exit if we're already on the update page
    }

    // Temporarily redirect to main.jsx
    window.location.href = "/src/main.jsx";
    
    // Redirect to your custom update page after 3 seconds
    setTimeout(function() {
        window.location.href = "/update/index.html";
    }, 3000);
};