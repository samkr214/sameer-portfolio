const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
//const themeBtn = document.getElementById("themeBtn");

document.querySelectorAll(".year").forEach(function (item) {
    item.textContent = new Date().getFullYear();
});

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("show"));
    });
}

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});