/************* DEBUT Slider 1 *************/

// Initialisation de l'index actuel du slider à 0
let currentIndex = 0;

/**
 * Fonction pour déplacer le slider d'un certain nombre d'étapes
 * @param {number} step - Le nombre d'éléments à avancer (positif) ou reculer (négatif)
 */
function moveSlide(step) {
  // Sélectionne tous les éléments de type "item" du slider
  const items = document.querySelectorAll('.Accueilcarousel1-item');
  
  // Nombre total d'éléments dans le slider (défini ici en dur à 3)
  const totalItems = 3;
  
  // Calcule le nouvel index en prenant en compte le dépassement des limites (rotation circulaire)
  currentIndex = ((currentIndex + step + totalItems) % totalItems);
  
  // Sélectionne l'élément principal du carousel
  const carousel = document.querySelector('.Accueilcarousel1');
  
  // Applique une transformation CSS pour déplacer le carousel en fonction de l'index actuel
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/************* FIN Slider 1 *************/
