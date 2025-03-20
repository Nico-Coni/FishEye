// // je recupere l'id du photographe inscrit dans l'url
const url = new URLSearchParams(document.location.search);
const urlId = parseInt(url.get('id'), 10);

let medias = [];
let compteur = 0;

async function initPhotographers() {
    const data = await getPhotographers();
    const photographPrice = getPhotographer(urlId, data);
    medias = getMedia(urlId, data);
    refreshMedias(medias)
    bandeauLikePrice(photographPrice, compteur)
}

// Raffraichie l'affichages des photos
function refreshMedias(medias) {
    const mediaSection = document.querySelector('.media_section');
    mediaSection.innerHTML = '';
    medias.forEach(media => compteur += mediaPhotographerTemplate(media));
}

// Recupere le photographe par l'id et affiche sa banniere
function getPhotographer(urlId, data) {
    const section = document.querySelector('.photograph-header')

    const photograph = data.photographers.find(item => item.id === urlId);
    const photographModel = photographerTemplate(photograph);
    const userCardDOM = photographModel.getUserCardDOM()

    section.appendChild(userCardDOM)
    return photograph.price
}

// Recupere les medias du photographe
function getMedia(urlId, data) {
    return data.media.filter(item => item.photographerId === urlId);
}

//Ecoute le changement de filtre de tri et actualise les medias au click
document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenu = document.querySelector('.dropdown__menu');
    dropdownMenu.addEventListener("click", function () {
        const cleTri = dropdownMenu.value;

        // Tri des médias
        medias.sort(function (a, b) {
            if (cleTri === 'date') {
                return new Date(a.date) - new Date(b.date);
            } else if (cleTri === 'likes') {
                return b.likes - a.likes;
            } else if (cleTri === 'title') {
                return a.title.localeCompare(b.title);
            }
        });

        const mediaSection = document.querySelector('.media_section');
        mediaSection.innerHTML = '';

        // Affiche les médias triés
        medias.forEach(media => mediaPhotographerTemplate(media));
    });
});

initPhotographers();