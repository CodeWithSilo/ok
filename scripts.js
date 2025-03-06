document.addEventListener("DOMContentLoaded", function () {
    const fadeInSection = document.querySelector(".fade-in");
    const typingText = document.querySelector(".typing-text");

    function fadeInEffect() {
        fadeInSection.style.opacity = "1";

        // Apply random animation direction
        const randomDirection = Math.floor(Math.random() * 4);
        switch (randomDirection) {
            case 0:
                fadeInSection.style.transform = "translateX(-50px)";
                break;
            case 1:
                fadeInSection.style.transform = "translateX(50px)";
                break;
            case 2:
                fadeInSection.style.transform = "translateY(-50px)";
                break;
            case 3:
                fadeInSection.style.transform = "translateY(50px)";
                break;
        }

        // Apply smooth transition
        fadeInSection.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        fadeInSection.style.transform = "translateX(0) translateY(0)";
    }

    // Typing Effect
    function typeTextEffect(textElement, text, speed) {
        let index = 0;
        let isDeleting = false;
        
        function type() {
            if (!isDeleting && index <= text.length) {
                textElement.innerHTML = text.slice(0, index++);
            } else if (isDeleting && index >= 0) {
                textElement.innerHTML = text.slice(0, index--);
            }

            if (index === text.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Pause before deleting
            } else if (index === 0) {
                isDeleting = false;
                setTimeout(type, 500); // Pause before retyping
            } else {
                setTimeout(type, isDeleting ? speed / 2 : speed);
            }
        }

        type();
    }

    // Trigger fade-in effect
    setTimeout(fadeInEffect, 500);

    // Start typing effect
    typeTextEffect(typingText, "I am a Frontend Developer", 100);
});


function toggleMenu(){
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function(){
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        let progress = circle.getAttribute("data-progress");
        let degree = (progress / 100) * 360;
        circle.style.background = `conic-gradient(cyan ${degree}deg, #222 ${degree}deg)`;
    });
});


