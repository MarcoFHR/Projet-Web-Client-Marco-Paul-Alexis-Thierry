/************* DEBUT Gestion de la bannière *************/

let scrollContainer = document.querySelector('.bannière');  // Récupère le conteneur de la bannière
let suivant = document.getElementById('next');              // Récupère le bouton suivant
let precedent = document.getElementById('previous');        // Récupère le bouton précédent

scrollContainer.addEventListener("wheel", (evt) => {        // Ajoute un écouteur d'événement pour la molette de la souris
    evt.preventDefault();                                   // Empêche le comportement par défaut de la molette de la souris
    scrollContainer.scrollLeft += evt.deltaY;               // Fait défiler le conteneur de la bannière horizontalement
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    let scrollDistance = 975;                               // Définit la distance de défilement
    scrollContainer.scrollLeft += evt.deltaY > 0 ? scrollDistance : -scrollDistance;    // Fait défiler le conteneur de la bannière horizontalement
});

suivant.addEventListener("click", () => {                   // Ajoute un écouteur d'événement pour le clic sur le bouton suivant
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    scrollContainer.scrollLeft += 975;                      // Fait défiler le conteneur de la bannière horizontalement selon la largeur de l'image 150+25 = 175
});

precedent.addEventListener("click", () => {                 // Ajoute un écouteur d'événement pour le clic sur le bouton précédent
    scrollContainer.style.scrollBehavior = "smooth";        // Ajoute un effet de défilement fluide
    scrollContainer.scrollLeft -= 975;                      // Fait défiler le conteneur de la bannière horizontalement selon la largeur de l'image 150+25 = 175
});


/************* FIN Gestion de la bannière *************/



/************* DEBUT Barre de mail *************/

let souscrire = document.getElementById('souscrire');   // Récupère le bouton souscrire
const confirmationMessage = document.getElementById("confirmationMessage");

function estUneAdresseMail(mail) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expression pour vérifier si c'est un email
    if (regex.test(mail.value)) {               // Si l'expression est un vrai email 
        console.log("Adresse email valide");    // Affiche dans la console un message de confirmation d'inscription à la newsletter
        return true;                            // retourne vraie
    } else {                                    // Sinon
        console.log("Adresse email invalide");  // Affiche dans la console un message d'erreur d'inscription à la newsletter
        return false;                          // Retourne faux
        }
    }

    souscrire.addEventListener("click", () => {             // Ajoute un écouteur d'événement pour le clic sur le bouton souscrire
        const mail = document.getElementById('emailInput'); // Récupère l'élément mail

        if (estUneAdresseMail(mail)) {                      // Vérifie si l'adresse mail est valide
        confirmationMessage.classList.add("show");      // Affiche le message de confirmation
        errorMessage.classList.remove("show");          // Cache le message d'erreur
        mail.value = "";                                // Réinitialise le champ email
        } else {                                            // Sinon
        errorMessage.classList.add("show");             // Affiche le message d'erreur
        confirmationMessage.classList.remove("show");   // Cache le message de confirmation
        }
    });
