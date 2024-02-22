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