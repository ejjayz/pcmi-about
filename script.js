document.addEventListener("DOMContentLoaded", function () {
    const text = "New Update";
    const exclamation = "!";
    const typingText = document.getElementById("typing-text");
    let charIndex = text.length; // Start from end for backwards typing
    let isDeleting = true; // Start with deleting animation
    let exclamationCount = 0;
    let isTypingForward = false;

    // Add this style to prevent layout shifts
    typingText.style.minWidth = typingText.offsetWidth + "px";

    function animate() {
        // Handle exclamation point blinking at the end of forward typing
        if (charIndex === text.length && !isDeleting && isTypingForward) {
            if (exclamationCount < 4) {
                typingText.textContent = text + (exclamationCount % 2 === 0 ? exclamation : '');
                exclamationCount++;
                setTimeout(animate, 500);
                return;
            } else {
                isDeleting = true;
                exclamationCount = 0;
            }
        }

        // Deleting animation (backwards)
        if (isDeleting) {
            typingText.textContent = text.substring(0, charIndex);
            charIndex--;
            
            if (charIndex < 0) {
                isDeleting = false;
                isTypingForward = true;
                charIndex = 0;
            }
            setTimeout(animate, 100);
            return;
        }

        // Typing animation (forwards)
        if (!isDeleting && isTypingForward) {
            if (charIndex === text.length) {
                typingText.textContent = text + exclamation;
            } else {
                typingText.textContent = text.substring(0, charIndex + 1);
            }
            charIndex++;
        }

        setTimeout(animate, 150);
    }

    // Wait for initial slide/fade animation (1.5s) + all other animations (2.2s) + 2s extra delay
    setTimeout(() => {
        typingText.textContent = text + exclamation; // Start with full text
        animate();
    }, 5700); // 1.5s + 2.2s + 2s = 5.7s total delay
});