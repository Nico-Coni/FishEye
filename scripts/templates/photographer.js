function photographerTemplate(data) {
    const { name, id, portrait, tagline, price, city, country } = data

    const picture = `assets/photographers/${portrait}`

    function getUserCardDOM() {
        //Creation d'un <a> qui aura une photo
        const img = document.createElement('img')
        img.src = picture
        img.alt = `Photo de profil de : ${name}`

        const a = document.createElement('a')
        a.href = `photographer.html?id=${id}`
        a.appendChild(img)

        //Ajout d'une <div> enfant avec une phrase d'accroche, lieu et prix de la prestation
        const h2 = document.createElement('h2')
        h2.textContent = name
        h2.classList.add('name')

        const p1 = document.createElement('p')
        p1.textContent = city + ', ' + country
        p1.classList.add('localisation')

        const p2 = document.createElement('p')
        p2.textContent = tagline
        p2.classList.add('tagline')

        const p3 = document.createElement('p')
        p3.textContent = price + '€/jour'
        p3.classList.add('price')

        const div = document.createElement('div')
        div.classList.add('informations')
        div.append(h2, p1, p2, p3)

        //Creation de la balise <article> qui contient l'ensemble
        const article = document.createElement('article')
        article.appendChild(a)
        article.appendChild(div)

        return (article)
    }
    return { getUserCardDOM }
}

function mediaPhotographerTemplate(media) {
    const { id, photographerId, title, image, likes, date, price, video } = media;

    const a = document.createElement('a')

    if (image !== undefined) {
        const img = document.createElement('img')
        img.src = `assets/images/${image}`
        img.alt = title
        img.classList.add('photo')
        img.onclick = () => displayLightbox(id)
        a.appendChild(img)
    } else {
        const baliseVideo = document.createElement('video')
        baliseVideo.src = `assets/images/${video}`
        baliseVideo.classList.add('video')
        baliseVideo.onclick = () => displayLightbox(id)
        a.appendChild(baliseVideo)
    }

    const p = document.createElement('p')
    p.innerText = title
    const like = document.createElement('button')
    like.classList.add('like')

    like.onclick = () => gererLike(like)
    like.innerHTML = likes + ' <i class="fa-solid fa-heart"></i>'
    like.setAttribute('aria-label', 'like')

    const divCardInfo = document.createElement('div')
    divCardInfo.append(p, like)
    divCardInfo.classList.add('div__Card--Info')

    const divCard = document.createElement('div')
    divCard.classList.add('div__Card')
    divCard.append(a, divCardInfo)

    const mediaSection = document.querySelector('.media_section')
    mediaSection.appendChild(divCard)

    return likes
}

function bandeauLikePrice(photographPrice, compteur) {

    const footer = document.querySelector('footer')

    const pLikes = document.createElement('p')
    pLikes.innerHTML = compteur + ' <i class="fa-solid fa-heart"></i>'
    pLikes.classList.add('totalLikes')
    const pPrice = document.createElement('p')
    pPrice.innerText = photographPrice + '€ / jour'
    const divLikesPrice = document.createElement('div')
    divLikesPrice.append(pLikes, pPrice)
    divLikesPrice.classList.add('divLikesPrice')

    footer.appendChild(divLikesPrice)

}
