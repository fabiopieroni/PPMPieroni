/*LOGO*/
document.addEventListener("DOMContentLoaded", function () {
    const topbar = document.querySelector(".topbar");

    if (!topbar) return;

    function handleTopbarScroll() {
        if (window.innerWidth < 768) {
            topbar.classList.remove("topbar-scrolled");
            return;
        }
        if (window.scrollY > 600) {
            topbar.classList.add("topbar-scrolled");
        } else {
            topbar.classList.remove("topbar-scrolled");
        }
    }
    window.addEventListener("scroll", handleTopbarScroll);
    window.addEventListener("resize", handleTopbarScroll);
    handleTopbarScroll();
});
/*MENU TENDINA*/
const openMenuButtons = document.querySelectorAll('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const menuOverlay = document.querySelector('.js-menu-overlay');
const siteMenu = document.getElementById('site-menu');

function openMenu() {
    document.body.classList.add('menu-open');
    siteMenu.setAttribute('aria-hidden', 'false');

    openMenuButtons.forEach(btn => {
        btn.setAttribute('aria-expanded', 'true');
    });
}
function closeMenu() {
    document.body.classList.remove('menu-open');
    siteMenu.setAttribute('aria-hidden', 'true');

    openMenuButtons.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
    });
}
openMenuButtons.forEach(btn => {
    btn.addEventListener('click', openMenu);
});
if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeMenu);
}
if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});
/* BARRA RICERCA */
const openSearchBtn = document.querySelector(".js-open-search");
const closeSearchBtn = document.querySelector(".js-close-search");
if (openSearchBtn) {
    openSearchBtn.addEventListener("click", function () {
        document.body.classList.toggle("search-open");
    });
}
if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", function () {
        document.body.classList.remove("search-open");
    });
}