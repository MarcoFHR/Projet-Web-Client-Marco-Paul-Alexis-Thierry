let scrollContainer = document.querySelector('.bannière');  // Récupère le conteneur de la bannière
let suivant = document.getElementById('next');              // Récupère le bouton suivant
let precedent = document.getElementById('previous');        // Récupère le bouton précédent

scrollContainer.addEventListener("wheel", (evt) => {        // Ajoute un écouteur d'événement pour la molette de la souris
    evt.preventDefault();                                   // Empêche le comportement par défaut de la molette de la souris
    scrollContainer.scrollLeft += evt.deltaY;               // Fait défiler le conteneur de la bannière horizontalement
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    let scrollDistance = 585;                               // Définit la distance de défilement
    scrollContainer.scrollLeft += evt.deltaY > 0 ? scrollDistance : -scrollDistance;    // Fait défiler le conteneur de la bannière horizontalement
});

suivant.addEventListener("click", () => {                   // Ajoute un écouteur d'événement pour le clic sur le bouton suivant
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    scrollContainer.scrollLeft += 585;                      // Fait défiler le conteneur de la bannière horizontalement
});

precedent.addEventListener("click", () => {                 // Ajoute un écouteur d'événement pour le clic sur le bouton précédent
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    scrollContainer.scrollLeft -= 585;                      // Fait défiler le conteneur de la bannière horizontalement
});
