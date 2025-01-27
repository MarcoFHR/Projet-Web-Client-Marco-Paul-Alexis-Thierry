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
