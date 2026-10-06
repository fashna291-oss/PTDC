// Dom Element get karna
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");
const footer = document.querySelector("footer");

// Dom Element Count karna
const cards = document.querySelectorAll(".div8 , .div9, .div10, .div11, .div12, .div13");
console.log("Total Province Cards:", cards.length);

// Objects

const pakistan = {
    name: "pakistan",
    capital: "Islamabad",
    provinces: 4,
    regions: 2,
    tourism: "Beautiful"
}

console.log(pakistan.name);
console.log(pakistan.capital);

// Object property checking
console.log("capital" in pakistan);
console.log("currency" in pakistan);

// Array

const provinces = ["Punjab", "Sindh", "Khyber Pakhtunkhaw", "Balochistan", "Azad Kashmir", "Gilgit Baltistan"];

// forEach()
provinces.forEach(function(province, index){
    console.log(index, province)
})

// Arrow function 

provinces.forEach((province) =>{
    console.log("Provinces:", province);
})

// Map()

const provinceNames = provinces.map((province) =>{
    return province.toUpperCase();

});

console.log(provinceNames);

// filter()

const longNames = provinces.filter((province) =>{
    return province.length > 8;
});

console.log("Long Names:", longNames);

// find()

const sindh = provinces.find((province) =>{
    return province === "Sindh";
});

console.log("Found:", sindh);

// findIndex

const sindhIndex = provinces.findIndex((province) =>{
    return province === "Sindh"
});

console.log("Sindh Index:", sindhIndex);

// reduce()

const totalCharacters = provinces.reduce((total, province) =>{
    return total + province.length;
}, 0);

console.log("Total characters:", totalCharacters);

// Rest operator

function showProvinces(first, ...remaining){
    console.log("First province:", first);
    console.log("Remaining:", remaining)
}

showProvinces(
    "Punjab",
    "Sindh",
    "KPK",
    "Balochistan"
);

// Spread Operator

const moreProvinces = [...provinces, "Islamabad"];

// Function 

function welcomeMessage(name){
    return "Welcome to Pakistan" + name;
}

console.log(welcomeMessage("Tourist"));

// First class function

const greeting = function(name){
    return "Hello" + name;
};

console.log(greeting("Visitor"));


// callBack Function

function processToursit(name, callback){
    const message = callback(name);

    console.log(message);
}

processToursit("Ashna", greeting);

// Dom text change

const mainHeading = document.querySelector(".div7 h1");

if(mainHeading){
    mainHeading.addEventListener("click", function(){
        mainHeading.textContent = "Explore Beautiful Pakistan";
    });
}

// Event Listener

if(div4){
    div4.addEventListener("mouseenter", function(){
        div4.style.transition = "0.5s"
    });
}

// Mouse event on province card

cards.forEach((card) =>{
    card.addEventListener("mouseenter", () =>{
        card.style.transform = "scale(1.02)";
        card.style.transition = "0.4s";
    });

    card.addEventListener("mouseleave", () =>{
        card.style.transform = "scale(1)";
    });
});

// Get all links
const links = document.querySelectorAll("a");

console.log("Total links:", links.length);

links.forEach((link) =>{
    console.log(link.textContent);
});


// Prevent Default

links.forEach((link) =>{
    link.addEventListener("click", function(event){
        const href = link.getAttribute("href");

        if(href === "#" || href === ""){
            event.preventDefault();
        }
    })
})



// Set Timeout

setTimeout(() =>{
    console.log("Tourism website loaded succesfully.")
}, 2000);

// Promise

const tourismPromise = new Promise((resolve, reject) =>{
    const websiteLoaded = true;

    if(websiteLoaded){
        resolve("Tourism data loaded successfully.")
    } else{
        reject("Something went wrong")
    }
});

tourismPromise
    .then((message) =>{
        console.log(message)
    })
    .catch((error) =>{
        console.log(error)
    })

    // Async / await

    async function loadTourismData(){
        try{
            const result = await tourismPromise;

            console.log("Async:", result);
        } catch(error){
            console.log(error)
        }
    }

    loadTourismData();

    // Local Storage

    localStorage.setItem(
        "favouritePlace",
        "Hunza Valley"
    );

    const favoritePlace = localStorage.getItem(
        "favoritePlace"
    );

    console.log("Favorite place:", favoritePlace);

    // GSAP start


    gsap.registerPlugin(ScrollTrigger);

    // Hero section

    gsap.from(".carousel-caption h2",{
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // Navbar  section

    gsap.from(".div2",{
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Top Bar

    gsap.from(".div1",{
        y: -30,
        opacity: 0,
        duration: 0.8
    });

    // Welcome Section

    gsap.from(".salam",{
        x: -80,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div3",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });


    gsap.from(".imgs",{
        scale: 0.7,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div3",
            start: "top 80% ",
            toggleActions: "restart none restart reset"
        }
    })

    gsap.from(".parah1",{
        x: 80,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div3",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    // latest updates 

    gsap.from(".div4 h1",{
        y: 50,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div4",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    gsap.from(".update-card",{
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,

        scrollTrigger: {
            trigger: ".div4",
            start: "top 75%",
            toggleActions: "restart none restart reset"
        }
    });


    // PTD  Section

    gsap.from(".ptd", {
        x: -100,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div5",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    gsap.from(".img1",{
        x: 100,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div5",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    // ntc section

    gsap.from(".ntc",{
        x: 100,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div6",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    gsap.from(".img2",{
        x: -100,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div6",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    // Pakistan heading

    gsap.from(".div7 h1",{
        y: 60,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".div7",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    // Islamabad card

    gsap.from(".islam",{
        scale: 0.8,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".islam",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    // All Province cards

    gsap.from(
        ".div8, .div9, .div10, .div11, .div12, .div13",{
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,

            scrollTrigger: {
                trigger: ".second-parah",
                start: "top 80%",
                toggleActions: "restart none restart reset"
            }
        }
    );

    // Footer

    gsap.from(".footer-about",{
        x: -80,
        opacity: 0,
        duration: 1,

        ScrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    gsap.from(".footer-links",{
        y: 60,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    gsap.from(".footer-box",{
        x: 80,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            toggleActions: "restart none restart reset"
        }
    });

    const socialIcons = document.querySelectorAll(
        ".social-icons a"
    );

    socialIcons.forEach((icon) =>{
        icon.addEventListener("mouseenter",()=>{
            gsap.to(icon,{
                y: 80,
                scale: 1.1,
                duration: 0.3
            });
        });

        icon.addEventListener("mouseleave",() =>{
            gsap.to(icon,{
                y: 0,
                scale: 1,
                duration: 0.3
            });
        });
    });

    // province card hover with gsap

    cards.forEach((card) =>{
        card.addEventListener("mouseenter", () =>{
            gsap.to(card,{
                scale: 1.03,
                duration: 0.4,
                ease: "poer2.out"
            });
        });

        card.addEventListener("mouseleave", () =>{
            gsap.to(card,{
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });

    // Console Test

    console.log("Pakistan Tourism Website Javascript Loaded!")