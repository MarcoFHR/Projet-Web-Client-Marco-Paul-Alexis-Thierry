let currentIndex = 0;

function moveSlide(step) {
  const items = document.querySelectorAll('.Accueilcarousel1-item');
  const totalItems = 3;
  currentIndex = ((currentIndex + step + totalItems) % totalItems);
  const carousel = document.querySelector('.Accueilcarousel1');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}