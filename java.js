document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const navToggle = document.createElement("div");
    navToggle.className = "nav-toggle";
    navToggle.innerHTML = "&#9776;";
    document.querySelector("header").prepend(navToggle);

    const navMenu = document.querySelector("nav ul");
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Smooth Scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Button Click Animation
    document.querySelector("button").addEventListener("click", () => {
        alert("Discover more about our Algae Bioreactor!");
    });

    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    });

    // Fade-In Animation on Scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
