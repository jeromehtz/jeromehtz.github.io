const themeStorageKey = "portfolio-theme";
const themeToggle = document.querySelector(".theme-toggle");
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

let savedTheme;

try {
    savedTheme = window.localStorage.getItem(themeStorageKey);
} catch (error) {
    console.warn("Impossible de lire la préférence de thème enregistrée.", error);
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Activer le mode normal" : "Activer le mode nocturne"
        );
        themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
        themeToggle.querySelector(".theme-toggle-label").textContent = isDark
            ? "Mode normal"
            : "Mode nocturne";
    }
}

applyTheme(savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : prefersDarkTheme.matches ? "dark" : "light");

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
        window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
        console.warn("Impossible d’enregistrer la préférence de thème.", error);
    }
});
