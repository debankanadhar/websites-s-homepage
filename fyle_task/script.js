$(document).ready(function(){
    $('.contact_us').click(function(){
        $('.form-wrapper').show();
    });
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 25,
    grabCursor: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

function openFyleHQ() {
    window.open('https://www.fylehq.com', '_blank');
}


function openForm() {
    document.getElementById("formPopup").style.display = "block";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("formPopup")) {
        document.getElementById("formPopup").style.display = "none";
    }
}


function changeImage(src) {
    document.getElementById("main-image").src = src;
}
