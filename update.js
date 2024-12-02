window.onload = function() {
    const minimumRequiredVersionCode = 2; // Replace with your minimum version code
    const updateAppLink = "https://appilix.com"; // Replace with your app update URL
    const warningDiv = document.createElement("div");

    // Apply styles
    warningDiv.style.position = "fixed";
    warningDiv.style.top = "0";
    warningDiv.style.left = "0";
    warningDiv.style.width = "100%";
    warningDiv.style.height = "100%";
    warningDiv.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    warningDiv.style.color = "white";
    warningDiv.style.display = "flex";
    warningDiv.style.justifyContent = "center";
    warningDiv.style.alignItems = "center";
    warningDiv.style.flexDirection = "column";
    warningDiv.style.zIndex = "1000";
    warningDiv.style.textAlign = "center";
    warningDiv.style.visibility = "hidden"; // Initially hidden
    warningDiv.style.padding = "20px"; // Add padding for responsiveness
    warningDiv.style.boxSizing = "border-box"; // Ensure padding does not affect size

    // Create keyframes for gradient background animation
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes glowing {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .gradient-background {
            background: linear-gradient(45deg, #3B5998, #8E44AD, #F39C12, #27AE60);
            background-size: 400% 400%;
            animation: glowing 3s ease-in-out infinite;
        }
    `;
    document.head.appendChild(styleSheet);

    // Create the content for the warning div
    const messageDiv = document.createElement("div");
    messageDiv.style.backgroundColor = "#333";
    messageDiv.style.padding = "20px";
    messageDiv.style.borderRadius = "10px";
    messageDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    messageDiv.style.maxWidth = "500px";
    messageDiv.style.width = "100%";
    messageDiv.style.textAlign = "center"; // Center text inside the message div
    messageDiv.innerHTML = `
        <p style="font-size: 18px; margin: 0 0 15px;">Hello everyone 👋, We have a new update. Pls update to continue. Thank you! ❤️</p>
        <a href="` + updateAppLink + `" style="
            display: inline-block;
            padding: 10px 20px;
            color: white; /* Change text color to white */
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            background-size: 400% 400%;
            animation: glowing 3s ease-in-out infinite;
        " class="gradient-background">Update Now</a>
        <br/><br/>
        <button id="updateLaterBtn" style="
            color: white;
            text-decoration: underline;
            background: none;
            border: none;
            cursor: pointer;
        ">Update Later</button>
    `;

    // Append the message div to the warning div
    warningDiv.appendChild(messageDiv);

    // Append the warning div to the body
    document.body.appendChild(warningDiv);

    // Add event listener to the "Update Later" button
    document.getElementById("updateLaterBtn").addEventListener("click", function() {
        warningDiv.style.visibility = "hidden"; // Hide the warning div when "Update Later" is clicked
    });

    // Check localStorage for the app version code
    const versionCode = localStorage.getItem("appilix_app_version_code");

    if (versionCode !== null && parseInt(versionCode) < minimumRequiredVersionCode) {
        warningDiv.style.visibility = "visible"; // Show the warning if version is less than the minimum required
    }
};