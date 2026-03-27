document.addEventListener("DOMContentLoaded", () => {
    /* ==============================================
       THEME TOGGLE
       ============================================== */
    const themeBtn = document.getElementById("theme-toggle");
    
    // Check saved theme or system preference
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            if (theme === "dark") {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }

    /* ==============================================
       MOBILE MENU (Rule 14 & 15)
       ============================================== */
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileOverlay = document.getElementById("mobile-overlay");

    function toggleMenu() {
        if (!mobileNav) return;
        const isActive = mobileNav.classList.contains("active");
        if (isActive) {
            mobileNav.classList.remove("active");
            mobileOverlay.classList.remove("active");
            document.body.style.overflow = "auto";
        } else {
            mobileNav.classList.add("active");
            mobileOverlay.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }
    }

    if (hamburger) hamburger.addEventListener("click", toggleMenu);
    if (mobileOverlay) mobileOverlay.addEventListener("click", toggleMenu);

    /* ==============================================
       ACTIVE LINK HIGHLIGHTING (Rule 12 & 33)
       ============================================== */
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        // Basic match by href text
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });
});
