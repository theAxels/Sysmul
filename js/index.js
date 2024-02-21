
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'flex';
    }

    setInterval(nextSlide, 3000);
});

const currentYear = new Date().getFullYear();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.ajax({
    url:'http://omdbapi.com',
    type: 'get',
    dataType: 'json',
    data: {
        'apikey': 'f1f9cd43',
        's': 'all',
        'type': 'series',
        'year' : currentYear
    },
    success: function(result){
        console.log(result);
        if(result.Response == "True"){
            let movies = result.Search;
                $.each(movies, function(i, data){
                    if(data.Poster != 'N/A'){
                        $('#series-list').append(`
                        <div class="card">
                            <img src=" `+ data.Poster +`" alt="Series Image">
                            <div class="card-body">
                                <h3>`+ data.Title +`</h3>
                                <div class="info">
                                    <span class="episode">Number of Episodes: `+ getRandomInt(8, 50)+`</span>
                                    <span class="rating">Rating: `+ (Math.random() * (9.9 - 4) + 4).toFixed(1) +`</span>
                                </div>
                            </div>
                        </div>
                        `)
                    }
                });
        }else{
            $('#movie-list').html(`
            <div class="col">
                <h1 class="test-center">` + result.Error + `</h1>
            </div>
            `)
        }
    }
}) ;