document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").prepend(menuToggle);

    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Scroll-to-Top Button
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑";
    scrollBtn.classList.add("scroll-top");
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Form Validation (for contact page, if applicable)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const inputs = form.querySelectorAll("input, textarea");
            let valid = true;
            inputs.forEach(input => {
                if (input.hasAttribute("required") && input.value.trim() === "") {
                    valid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "";
                }
            });
            if (!valid) {
                e.preventDefault();
                alert("Please fill out all required fields.");
            }
        });
    }
});
