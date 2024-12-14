window.onload = function() {
    const minimumRequiredVersionCode = 0.1; // Replace with your minimum version code
    const updateAppLink = "https://appilix.com"; // Replace with your app update URL
    const warningDiv = document.createElement("div");

    // Apply styles
    Object.assign(warningDiv.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: "1000",
        textAlign: "center",
        visibility: "hidden", // Initially hidden
        opacity: "0", // Start hidden
        transition: "opacity 0.3s ease-in-out", // Add transition
        padding: "20px", // Add padding for responsiveness
        boxSizing: "border-box" // Ensure padding does not affect size
    });

    // Create keyframes for gradient background animation
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes popOut {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.8); opacity: 0; }
        }
        .gradient-background {
            background: linear-gradient(45deg, #3B5998, #8E44AD, #F39C12, #27AE60);
            background-size: 400% 400%;
            animation: glowing 3s ease-in-out infinite;
        }
        .pop-in {
            animation: popIn 0.3s ease-in-out forwards;
        }
        .pop-out {
            animation: popOut 0.3s ease-in-out forwards;
        }
    `;
    document.head.appendChild(styleSheet);

    // Create the content for the warning div
    const messageDiv = document.createElement("div");
    Object.assign(messageDiv.style, {
        backgroundColor: "#333",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        width: "100%",
        textAlign: "center" // Center text inside the message div
    });
    messageDiv.innerHTML = `
        <p style="font-size: 18px; margin: 0 0 15px;">Hello everyone 👋, We have a new update. Pls update to continue. Thank you! ❤️</p>
        <a href="` + updateAppLink + `" class="gradient-background" style="
            display: inline-block;
            padding: 10px 20px;
            color: white; /* Change text color to white */
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        ">Update Now</a>
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
        messageDiv.classList.remove("pop-in");
        messageDiv.classList.add("pop-out");
        setTimeout(() => {
            warningDiv.style.visibility = "hidden"; // Hide the warning div after animation
            warningDiv.style.opacity = "0"; // Ensure it hides after animation
        }, 300); // Delay to match animation duration
    });

    // Check localStorage for the app version code
    const versionCode = localStorage.getItem("appilix_app_version_code");

    if (versionCode !== null && parseInt(versionCode) < minimumRequiredVersionCode) {
        warningDiv.style.visibility = "visible"; // Show the warning if version is less than the minimum required
        warningDiv.style.opacity = "1"; // Show the warning div
        messageDiv.classList.add("pop-in");
    }
};