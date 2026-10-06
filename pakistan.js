function showPeak(id){
    let allContent = document.querySelectorAll(".peak-content");

    allContent.forEach(function(item){
         item.classList.remove("show")
    });

    let content = document.getElementById(id);
    content.classList.add("show")

   
}

document.addEventListener("DOMContentLoaded", function(){

    gsap.registerPlugin(ScrollTrigger);

    // Hero Section

    gsap.from(".welcome",{
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".welcome h1",{
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    // Islamabad image

    gsap.from(".islamm",{
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".islamm",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Third Section

    gsap.from(".third-sec h1",{
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger:{
            trigger: ".third-sec",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".third-sec p",{
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".third-sec",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Peak section

    gsap.from(".peak-image",{
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".peak-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".timeline-item",{
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".timeline",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // cuisine section

    gsap.from(".cuisine-section h1",{
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".cuisine-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".cuisine-text",{
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".cuisine-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".cuisine-card",{
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        ScrollTrigger: {
            trigger: ".cuisine-row",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".folk-img",
        {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".fourth-sec",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
 });

 gsap.from(".music",{
    x: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".fourth-sec",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
 });

 gsap.from(".links a",{
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".links",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
 });

 gsap.from(".folk",{
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".folk",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
 });

 scrollTrigger.refresh();

})