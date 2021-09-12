function openSidebar(){
    document.getElementsByClassName("sidebar")[0].style.display = "block";
    document.getElementsByClassName("overlay")[0].style.display = "block";
}
function closeSidebar(){
    document.getElementsByClassName("sidebar")[0].style.display = "none";
    document.getElementsByClassName("overlay")[0].style.display = "none";
}
let elSlide = document.getElementsByClassName("mySlides");
let elSelectSlide = document.getElementsByClassName("selectSlide");
for (let i = 0; i < elSelectSlide.length; i++) {
    elSelectSlide[i].addEventListener("click",function(){
        for (let i = 0; i < elSlide.length; i++) {
            elSlide[i].style.display = "none";
        }
        elSlide[i].style.display = "block";
        for (let i = 0; i < elSelectSlide.length; i++) {
            elSelectSlide[i].classList.remove("opacity-off");
        }
        this.classList.add("opacity-off")
    })
}