$(document).ready(function(){
    var currentIndex = 0;
    var slides = $('#slider .slide');
    var slideCount = slides.length;

    slides.eq(currentIndex).css({"display": "block", "left": "-100%"})
        .animate({"left": "0"}, 1000);

    setInterval(function(){
        var nextIndex = (currentIndex + 1) % slideCount;

        slides.eq(currentIndex).animate({"left": "-100%"}, 1000);
        slides.eq(nextIndex).css("left", "100%").show().animate({"left": "0"}, 1000);

        currentIndex = nextIndex;
    }, 4000);
});

//ANIMATIONS
gsap.from(".logo", 1, {
    opacity: 0,
    x: -70,
    ease: "expo.easeInOut"
});

gsap.from(".nav-buttons ul li", 1, {
    opacity: 0,
    x: -120,
    ease: "power3.easeInOut"
});

gsap.from(".title", 1, {
    opacity: 0,
    delay: .6,
    y: 100,
    ease: "expo.easeInOut"
});

gsap.from(".button", 1, {
    opacity: 0,
    delay: 1.6,
    y: 70,
    ease: "expo.easeInOut"
});

gsap.from(".head-product", 2, {
    opacity: 0,
    delay: 2.6,
    y: -300,
    ease: "expo.easeInOut"
});