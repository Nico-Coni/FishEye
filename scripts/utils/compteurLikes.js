function gererLike(bouton) {
    const conteneur = bouton.parentElement
    const affichageMediaLike = conteneur.querySelector('.like');
    const affichageTotalLike = document.querySelector('.totalLikes')

    let totalLikes = parseInt(affichageTotalLike.textContent) ?? 0
    let estPasLike = bouton.classList.toggle('liked')
    let nombreDeLikes = parseInt(affichageMediaLike.textContent) ?? 0

    if (estPasLike) {
        nombreDeLikes += 1
        totalLikes += 1
    } else {
        nombreDeLikes -= 1
        totalLikes -= 1
    }

    affichageMediaLike.innerHTML = nombreDeLikes + ' <i class="fa-solid fa-heart"></i>'
    affichageTotalLike.innerHTML = totalLikes + ' <i class="fa-solid fa-heart"></i>'
}