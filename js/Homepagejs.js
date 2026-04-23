document.addEventListener("DOMContentLoaded", function () {
    const topbar = document.querySelector(".topbar");

    // sicurezza: se non trova la topbar esce
    if (!topbar) return;

    function handleTopbarScroll() {
        // sotto 768px NON fare nulla
        if (window.innerWidth < 768) {
            topbar.classList.remove("topbar-scrolled");
            return;
        }

        // quando scrolli oltre 600px
        if (window.scrollY > 600) {
            topbar.classList.add("topbar-scrolled");
        } else {
            topbar.classList.remove("topbar-scrolled");
        }
    }
    // eventi
    window.addEventListener("scroll", handleTopbarScroll);
    window.addEventListener("resize", handleTopbarScroll);

    // esegue subito al caricamento
    handleTopbarScroll();
});