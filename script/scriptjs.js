/*
<p>&copy; 2024 Mon Portfolio - Jérôme Hertzog. Tous droits réservés.</p>
        <nav>
            <a href="https://www.linkedin.com/in/jer0me-hertzog01/" alt="Mon profil LinkedIn">
                <img src="images/linkedin-logo.png" alt="Mon profil LinkedIn"/>
            </a>
            <a href="cv/CV_HERTZOG_Jerome.pdf" alt="Mon CV">
                <img src="images/cv-document-image.png" alt="Mon CV"/>
            </a>
        </nav>
*/

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});