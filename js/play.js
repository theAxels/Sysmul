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