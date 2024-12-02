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
        @keyframes gradientBackground {
            0% { background-color: #ff9a9e; }
            50% { background-color: #fad0c4; }
            100% { background-color: #ff9a9e; }
        }
    `;
    document.head.appendChild(styleSheet);

    // Create the logo container
    const logoContainer = document.createElement("div");
    logoContainer.style.width = "100%";
    logoContainer.style.display = "flex";
    logoContainer.style.justifyContent = "center";
    logoContainer.style.alignItems = "center";
    logoContainer.style.marginBottom = "20px";

    // Create the logo
    const logo = document.createElement("img");
    logo.src = "pic/pcmi-logo.png"; // Replace with your logo path
    logo.alt = "App Logo";
    logo.style.maxWidth = "100px";

    // Append the logo to the logo container
    logoContainer.appendChild(logo);

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
            color: #333;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            background-size: 400% 400%;
            animation: gradientBackground 5s ease infinite;
        ">Update Now</a>
    `;

    // Append the logo container and message div to the warning div
    warningDiv.appendChild(logoContainer);
    warningDiv.appendChild(messageDiv);

    // Append the warning div to the body
    document.body.appendChild(warningDiv);

    // Check localStorage for the app version code
    const versionCode = localStorage.getItem("appilix_app_version_code");

    if (versionCode !== null && parseInt(versionCode) < minimumRequiredVersionCode) {
        warningDiv.style.visibility = "visible"; // Show the warning if version is less than the minimum required
    }
};