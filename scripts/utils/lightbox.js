function displayLightbox(id) {
    const lightbox = document.getElementById("lightbox_modal");
    lightbox.style.display = "block";
    affichageMedia(id)
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox_modal");
    lightbox.style.display = "none";
    desaffichageMedia()
}

function affichageMedia(id) {
    const lightboxContent = document.querySelector('.lightbox_content')
    const media = medias.find(media => media.id === id)
    const titre = media.title

    if (media.image) {
        const mediaAfficher = media.image
        const img = document.createElement('img')
        img.src = `assets/images/${mediaAfficher}`
        img.alt = titre
        img.classList.add('lightbox-media')
        lightboxContent.appendChild(img)
    } else {
        const mediaAfficher = media.video
        const video = document.createElement('video')
        video.src = `assets/images/${mediaAfficher}`
        video.classList.add('lightbox-media')
        video.alt = titre
        video.controls = true
        video.setAttribute('aria-label', `${titre}`)
        lightboxContent.appendChild(video)
    }
    const titreMedia = document.createElement('h3')
    titreMedia.innerText = titre
    titreMedia.classList.add('lightbox-media')
    lightboxContent.appendChild(titreMedia)

}

function desaffichageMedia() {
    const divMedia = document.querySelectorAll('.lightbox-media')
    divMedia.forEach(div => div.remove())
}

function defilement(sens) {
    let elementMedia = document.querySelector('.lightbox-media')
    let title = elementMedia.alt
    let indexActuel = medias.findIndex(media => media.title === title)
    let nextIndex = indexActuel + sens

    if (nextIndex < 0) {
        nextIndex = medias.length
    } else if (nextIndex >= medias.length) {
        nextIndex = 0
    }
    let nextMedia = medias[nextIndex]
    let nextMediaId = nextMedia.id

    desaffichageMedia()
    affichageMedia(nextMediaId)
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        defilement(+1)
    } else if (event.key === 'ArrowLeft') {
        defilement(-1)
    }
})