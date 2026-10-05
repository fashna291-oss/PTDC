rightBtn.addEventListener("click", function(){
    container.scrollBy({
        left: 350,
        behavior: "smooth"
    });

});

leftBtn.addEventListener("click", function(){
    container.scrollBy({
        left: -350,
        behavior: "smooth"
    })
})