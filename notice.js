gsap.registerPlugin(ScrollTrigger);

gsap.from(".public",{
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",

    scrollTrigger:{
        trigger: ".public",
        start: "top 85%",
        toggleActions: "restart none none reset"
    }
});

gsap.from(".notice-row",{
    x: -80,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",

    scrollTrigger:{
        trigger: ".notices",
        start: "top 80%",
        toggleActions: "restart none none reset"
    }
});

gsap.from(".attractionss",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".attractionss",
        start: "top 85%",
        toggleActions: "restart none none reset"
    }
});

