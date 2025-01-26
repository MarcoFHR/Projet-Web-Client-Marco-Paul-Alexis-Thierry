/************* DEBUT Actus & Bons Plans (Slider 1) *************/

const carousel = document.querySelector('.carousel'); // Sélectionne l'élément de la carousel

let isDragging = false; // Pour savoir si la souris est maintenue enfoncée
let startX;             // Position initiale de la souris
let scrollLeft;         // Position initiale du défilement

carousel.addEventListener('mousedown', (e) => {
  isDragging = true; // Active le mode "dragging"
  carousel.classList.add('dragging'); // Ajoute une classe visuelle (optionnel)
  startX = e.pageX - carousel.offsetLeft; // Position initiale de la souris
  scrollLeft = carousel.scrollLeft; // Position initiale du scroll
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false; // Désactive le mode "dragging" si la souris quitte l'élément
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mouseup', () => {
  isDragging = false; // Désactive le mode "dragging" lorsque le clic est relâché
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // Ne fait rien si le mode "dragging" n'est pas actif
  e.preventDefault(); // Empêche le comportement par défaut (sélection de texte)
  const x = e.pageX - carousel.offsetLeft; // Position actuelle de la souris
  const walk = (x - startX); // Distance parcourue (le *2 accélère le défilement)
  carousel.scrollLeft = scrollLeft - walk; // Modifie la position de défilement
});

/************* FIN Actus & Bons Plans (Slider 1) *************/





/************* DEBUT Barre de mail *************/

let souscrire = document.getElementById('souscrire');   // Récupère le bouton souscrire
const confirmationMessage = document.getElementById("confirmationMessage");

function estUneAdresseMail(mail) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expression pour vérifier si c'est un email
    if (regex.test(mail.value)) {                // Si l'expression est un vrai email 
        console.log("Adresse email valide");     // Affiche dans la console un message de confirmation d'inscription à la newsletter
        return true;                             // retourne vraie
    } else {                                     // Sinon
        console.log("Adresse email invalide");   // Affiche dans la console un message d'erreur d'inscription à la newsletter
        return false;                            // Retourne faux
        }
    }

    souscrire.addEventListener("click", () => {             // Ajoute un écouteur d'événement pour le clic sur le bouton souscrire
        const mail = document.getElementById('emailInput'); // Récupère l'élément mail

        if (estUneAdresseMail(mail)) {                      // Vérifie si l'adresse mail est valide
        confirmationMessage.classList.add("show");      // Affiche le message de confirmation
        errorMessage.classList.remove("show");          // Cache le message d'erreur 
        mail.value = "";                                // Réinitialise le champ email
        } else {                                        // Sinon
        errorMessage.classList.add("show");             // Affiche le message d'erreur
        confirmationMessage.classList.remove("show");   // Cache le message de confirmation
        }
    });


/************* FIN Barre de mail *************/



/************* DEBUT Gestion de la bannière *************/

let scrollContainer = document.querySelector('.bannière');  // Récupère le conteneur de la bannière
let suivant = document.getElementById('next');              // Récupère le bouton suivant
let precedent = document.getElementById('previous');        // Récupère le bouton précédent

function getScrollDistance() {
    return window.innerWidth * 0.5; // Définit la distance de défilement à 50% de la largeur de la fenêtre
}

scrollContainer.addEventListener("wheel", (evt) => {        // Ajoute un écouteur d'événement pour la molette de la souris
    evt.preventDefault();                                   // Empêche le comportement par défaut de la molette de la souris
    scrollContainer.scrollLeft += evt.deltaY;               // Fait défiler le conteneur de la bannière horizontalement
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    let scrollDistance = 585;                               // Définit la distance de défilement
    scrollContainer.scrollLeft += evt.deltaY > 0 ? scrollDistance : -scrollDistance;    // Fait défiler le conteneur de la bannière horizontalement
});

suivant.addEventListener("click", () => {                   // Ajoute un écouteur d'événement pour le clic sur le bouton suivant
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    scrollContainer.scrollLeft += getScrollDistance();      // Fait défiler le conteneur de la bannière horizontalement
});

precedent.addEventListener("click", () => {                 // Ajoute un écouteur d'événement pour le clic sur le bouton précédent
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    scrollContainer.scrollLeft -= getScrollDistance();      // Fait défiler le conteneur de la bannière horizontalement
});


/************* FIN Gestion de la bannière *************/