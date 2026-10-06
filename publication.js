gsap.registerPlugin(ScrollTrigger);



gsap.utils.toArray(
    ".pak, .pak2, .pak3, .pak4, .pak5, .pak6, .pak7, .pak8, .pak9, .pak10, .pak11, .pak12, .pak13, .pak14, .pak15, .pak16, .pak17, .pak18, .pak19, .pak20, .pak21, .pak22, .pak23, .pak24, .pak25, .pak26, .pak27, .pak28, .pak29, .pak30, .pak31, .pak32, .pak33, .pak34, .pak35, .pak36, .pak37"
).forEach((card) => {

    gsap.from(card, {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "restart none none reset"
        }
    });

});
