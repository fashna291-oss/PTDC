const container = document.getElementById("galleryContainer");

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");

rightBtn.addEventListener("click", function(){
    container.scrollLeft += 330;
})

leftBtn.addEventListener("click", function(){
    container.scrollLeft -= 330;
})

gsap.registerPlugin(ScrollTrigger);



gsap.from(".gallery-card", {
    x: 80,
    opacity: 0,
    scale: 0.85,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        toggleActions: "restart none none reset"
    }
});


gsap.from(".attractions", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".attractions",
        start: "top 85%",
        toggleActions: "restart none none reset"
    }
});



gsap.from(".attractions h1", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",

    scrollTrigger: {
        trigger: ".attractions",
        start: "top 85%",
        toggleActions: "restart none none reset"
    }
});