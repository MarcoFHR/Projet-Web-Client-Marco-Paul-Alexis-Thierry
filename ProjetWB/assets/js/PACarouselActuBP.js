/************* DEBUT Actus *************/

const carousel = document.querySelector('.carouselaccueil2'); // Sélectionne l'élément de la carousel

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

/************* FIN Actus *************/