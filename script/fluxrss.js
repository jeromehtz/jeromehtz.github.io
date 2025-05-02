function getRssFeed(link, containerId) {
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(link)}`;

    fetch(apiUrl)
        .then(response => response.json())  // On récupère le JSON
        .then(data => {
            const container = document.getElementById(containerId);
            // On affiche les 5 derniers éléments du flux RSS
            data.items.slice(0, 5).forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
                container.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching the RSS feed:', error));  // Gestion des erreurs
}

// Appels des flux RSS
getRssFeed('https://www.lemonde.fr/rss/une.xml', 'le-monde-feed');

getRssFeed('https://www.dalloz-actualite.fr/rss.xml', 'dalloz-feed');

getRssFeed('https://www.village-justice.com/?page=backend', 'villagejustice-feed');

getRssFeed('https://blogdroiteuropeen.com/feed/', 'blogdroiteuropeen-feed');

getRssFeed('https://www.droit-technologie.org/feed/', 'droit-technologie-feed');

getRssFeed('https://www.numerama.com/feed/', 'numerama-feed');

getRssFeed('https://www.journaldugeek.com/feed/', 'journaldugeek-feed');

getRssFeed('https://techcrunch.com/feed/', 'techcrunch-feed');

getRssFeed('https://www.theverge.com/rss/index.xml', 'theverge-feed');

getRssFeed('https://www.lemonde.fr/economie/rss_full.xml', 'ecolemonde-feed');

getRssFeed('https://www.bfmtv.com/rss/economie/', 'ecobfm-feed');

getRssFeed('https://www.francetvinfo.fr/environnement.rss', 'franceinfo-feed');

getRssFeed('https://www.sciencesetavenir.fr/nature-environnement/rss.xml', 'nature-environnement-feed');