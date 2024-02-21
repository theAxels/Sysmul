const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000);

function toggleSynopsis() {
    var synopsisContent = document.querySelector('.synopsis-content');
    var button = document.querySelector('.synopsis .toggle-btn button');
    synopsisContent.classList.toggle('show-all');
    button.textContent = synopsisContent.classList.contains('show-all') ? 'Show Less' : 'Show More';
}

function toggleDetails() {
    var detailsContent = document.querySelector('.details-content');
    var button = document.querySelector('.details .toggle-btn button');
    detailsContent.classList.toggle('show-all');
    button.textContent = detailsContent.classList.contains('show-all') ? 'Show Less' : 'Show More';
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});