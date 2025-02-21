document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Change header background on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#005bb5";
        } else {
            header.style.backgroundColor = "#0073e6";
        }
    });

    // Animated background effect
    const body = document.body;
    let particles = document.createElement("div");
    particles.classList.add("particles");
    body.appendChild(particles);

    for (let i = 0; i < 50; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.animationDuration = Math.random() * 5 + 3 + "s";
        particles.appendChild(particle);
    }
});

