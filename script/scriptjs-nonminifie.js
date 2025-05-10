const menu = document.getElementById("menu");
console.log(menu);
const menu_nav = document.querySelector(".nav");
console.log(menu_nav)

const navigation = document.querySelector(".navigation");
const navigation_nav = document.querySelector(".navigation_nav");

if (menu && menu_nav) { 
    console.log("Menu and nav exist");
    menu.addEventListener("click", () => {
        menu_nav.classList.toggle("hidden");
    });

    menu_nav.addEventListener("click", () => {
        menu_nav.classList.toggle("hidden");
    });


}

if (navigation && navigation_nav) {
    console.log("Menu and nav exist");
    navigation.addEventListener("click", () => {
        navigation_nav.classList.toggle("hidden");
    });

    navigation_nav.addEventListener("click", () => {
        navigation_nav.classList.toggle("hidden");
    });


}

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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    var emailPattern = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if (!emailPattern.test(email.value)) {
        document.getElementById('responseMessage').innerText = 'Veuillez entrer une adresse email valide.';
        return;
    }

    fetch('https://formspree.io/f/xqapzdyj', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').innerText = 'Votre message a été envoyé avec succès!';
            this.reset();
        } else {
            document.getElementById('responseMessage').innerText = 'Une erreur est survenue. Veuillez réessayer.';
        }
    }).catch(error => {
        document.getElementById('responseMessage').innerText = 'Une erreur est survenue. Veuillez réessayer.';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
});
