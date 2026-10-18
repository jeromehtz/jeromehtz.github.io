document.querySelectorAll(".header").forEach((header) => {
    const toggle = header.querySelector(".menu-toggle");
    const navigation = header.querySelector("#site-navigation");

    if (!toggle || !navigation) {
        return;
    }

    const label = toggle.querySelector(".menu-toggle-label");
    header.classList.add("mobile-menu-enabled");

    const closeMenu = () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
        label.textContent = "Menu";
        header.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isExpanded));
        toggle.setAttribute("aria-label", isExpanded ? "Ouvrir le menu" : "Fermer le menu");
        label.textContent = isExpanded ? "Menu" : "Fermer";
        header.classList.toggle("is-open", !isExpanded);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
