let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Gestione dell'indice fuori dai limiti
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Nascondere tutte le diapositive
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Rimuovere la classe "active" da tutti i punti
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Mostrare la diapositiva corrente e attivare il punto corrispondente
  slides[slideIndex - 1].style.display = "block";
  if (dots.length > 0) { // Assicurarsi che ci siano i punti prima di manipolarli
    dots[slideIndex - 1].classList.add("active");
  }
}



