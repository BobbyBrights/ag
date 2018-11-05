var topSlider = new Flickity('.top-slider', {
    cellAlign: 'left',
    pageDots: false,
    prevNextButtons: false,
    hash: true
});
var topSliderNavItems = document.querySelectorAll('.top-slider-navigation__item');
var topSliderNavItemNodes = Array.prototype.slice.call(topSliderNavItems);
for (var i = 0; i < topSliderNavItems.length; i++) {
    topSliderNavItems[i].onclick = function () {
        var index = topSliderNavItemNodes.indexOf(this);
        topSlider.select(index);
    };
}
topSlider.on('change', function (index) {
    for (var a = 0; a < topSliderNavItems.length; a++) {
        topSliderNavItems[a].classList.remove("active");
    }
    topSliderNavItems[index].classList.add("active");
});

var gallerySliderCont = document.querySelector('.gallery-slider');
var gallerySlider = new Flickity(gallerySliderCont, {
    cellAlign: 'center',
    wrapAround: true,
    pageDots: false
});
gallerySlider.on('change', function (index) {
    var galleryTextSliderItems = document.querySelectorAll('.gallery-text-slider__item');
    for (var i = 0; i < galleryTextSliderItems.length; i++) {
        galleryTextSliderItems[i].classList.remove("active");
    }
    galleryTextSliderItems[index].classList.add("active");
});

var jsScroll = document.getElementsByClassName('js-scroll');
for (var i = 0; i < jsScroll.length; i++) {
    jsScroll[i].addEventListener("click", function (e) {
        e.preventDefault();
        var selector = this.getAttribute('href');
        document.querySelector(selector).scrollIntoView({
            behavior: "smooth"
        });
    });
}

