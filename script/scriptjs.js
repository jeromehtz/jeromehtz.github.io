function adjustFooter() {
    let footer = document.querySelector(".footer");
    let contentHeight = document.body.scrollHeight; // Hauteur totale du document
    let windowHeight = window.innerHeight; // Hauteur de la fenêtre visible
    let scrollPosition = window.scrollY + windowHeight; // Position actuelle du scroll

    // Affiche le footer seulement quand on atteint le bas
    if (scrollPosition >= contentHeight - 10) {
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }

    // Empêche le scroll inutile si le contenu est plus petit que l'écran
    if (contentHeight < windowHeight) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }
}

window.addEventListener("scroll", adjustFooter);
window.addEventListener("resize", adjustFooter);
document.addEventListener("DOMContentLoaded", adjustFooter);
