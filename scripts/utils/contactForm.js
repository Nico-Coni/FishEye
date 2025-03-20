function displayModal() {
    const modal = document.getElementById("contact_modal");
    const name = document.querySelector('.name')
    document.getElementById("user_name").textContent = name.textContent
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupérer les valeurs des champs de formulaire
        const prenom = form.prenom.value;
        const nom = form.nom.value;
        const email = form.email.value;
        const message = form.message.value

        console.log('Prenom:', prenom);
        console.log('Nom:', nom);
        console.log('Email:', email);
        console.log('Message', message)

    });
});