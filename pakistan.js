function showPeak(id){
    let allContent = document.querySelectorAll(".peak-content");

    allContent.forEach(function(item){
         item.classList.remove("show")
    });

    let content = document.getElementById(id);
    content.classList.add("show")

   
}