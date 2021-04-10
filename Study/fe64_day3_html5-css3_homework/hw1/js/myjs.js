  window.setInterval(function(){if (window.pageYOffset === 0) {
    document.getElementById('topButton').style.visibility = 'hidden';
  }
  else
    document.getElementById('topButton').style.visibility = 'visible';},100)
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('#topButton').on('click',function(){
    window.scroll(0,0);
})
$('.owl-carousel').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<img src='./images/left-arrow.png'>", "<img src='./images/right-arrow.png'>"],
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items: 1,
}
)

    $(".counter").countUp({
    time: 2000,
    delay: 5,
    });

// Get the modal
var modal = document.getElementById("getmore__modal");

// Get the button that opens the modal
var btn = document.getElementById("modal__button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    setTimeout(function () { modal.style.opacity = 1; }, 100)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

    modal.style.opacity = 0;
    setTimeout(function () { modal.style.display = "none"; }, 1000)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {

        modal.style.opacity = 0;
        setTimeout(function () { modal.style.display = "none"; }, 1000)
    }
}
$(window).on('load',function () {
    $.fn.lightspeedBox();
});
$.fn.lightspeedBox({
    showImageTitle: true,
    showImageCount: true,
    showDownloadButton: true,
    showAutoPlayButton: true,
    autoPlayback: false,
    playbackTiming: 3500,
    zIndex: 30,
    locale: {
      nextButton: 'Next image',
      prevButton: 'Previous image',
      closeButton: 'Close',
      downloadButton: 'Download image',
      noImageFound: 'Sorry, no image found.',
      autoplayButton: 'Enable autoplay'
    }
  });
  