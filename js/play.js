window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.querySelector('#youtubeVideo');
    var src = iframe.getAttribute('src');
    setTimeout(function() {
        src += '&autoplay=1';
        iframe.setAttribute('src', src);
    }, 1000);
});

var carousels = document.querySelectorAll('.carousel');

carousels.forEach(function(carousel) {
    var carouselInterval = setInterval(function() {
        var activeItem = carousel.querySelector('.carousel-item.active');
        var nextItem = activeItem.nextElementSibling;
        var activeIndicator = carousel.querySelector('.carousel-indicators.active');
        var nextIndicator;
    
        if (!nextItem) {
            nextItem = carousel.querySelector('.carousel-item:first-child');
            nextIndicator = carousel.querySelector('.carousel-indicators li:first-child');
        } else {
            nextIndicator = activeIndicator.nextElementSibling;
        }
    
        nextItem.classList.add('active');
        activeItem.classList.remove('active');
    
        activeIndicator.classList.remove('active');
        nextIndicator.classList.add('active');
    }, 5000);

    carousel.querySelectorAll('.carousel-indicators li').forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            var targetSlideIndex = parseInt(indicator.getAttribute('data-bs-slide-to'));
            goToSlide(carousel, targetSlideIndex);
        });
    });
});

function goToSlide(carousel, targetSlideIndex) {
    var carouselInner = carousel.querySelector('.carousel-inner');
    var slides = carouselInner.querySelectorAll('.carousel-item');
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    slides[targetSlideIndex].classList.add('active');
    var indicators = carousel.querySelectorAll('.carousel-indicators li');
    indicators.forEach(function(indicator) {
        indicator.classList.remove('active');
    });
    indicators[targetSlideIndex].classList.add('active');
}


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

document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll('.trending-list li');
    var posters = document.querySelectorAll('.poster-card');

    for (var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('mouseover', createMouseoverHandler(posters[i]));
        listItems[i].addEventListener('mouseout', createMouseoutHandler(posters[i]));
    }

    const circleCards = document.querySelector('.circle-cards');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    function toggleArrows() {
        leftArrow.style.display = circleCards.scrollLeft > 0 ? 'block' : 'none';
        rightArrow.style.display = circleCards.scrollLeft < (circleCards.scrollWidth - circleCards.clientWidth) ? 'block' : 'none';
    }

    toggleArrows();

    circleCards.addEventListener('scroll', toggleArrows);
    leftArrow.addEventListener('click', function() {
        circleCards.scrollLeft -= 90;
    });
    rightArrow.addEventListener('click', function() {
        circleCards.scrollLeft += 90;
    });
    window.addEventListener('resize', toggleArrows);
});


function createMouseoverHandler(poster) {
    return function() {
        poster.classList.add('show');
    };
}

function createMouseoutHandler(poster) {
    return function() {
        poster.classList.remove('show');
    };
}