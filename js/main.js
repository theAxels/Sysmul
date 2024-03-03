window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

function goToTop() {
    const duration = 500;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      const scrollStep = -scrollTop / (duration / 15);
      const scrollInterval = setInterval(function() {
        if (document.documentElement.scrollTop || document.body.scrollTop) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  }