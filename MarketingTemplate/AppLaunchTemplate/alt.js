function controlSlides(){
    let elSlide = document.getElementsByClassName("mySlides");
    let pos = -1;
    for (let i = 0; i < elSlide.length; i++) {
        if (elSlide[i].style.display === "block"){
            pos = i;
        }
        elSlide[i].style.display = "none";
    }
    pos++;
    pos = (pos+3) % 3;
    elSlide[pos].style.display = "block";
}
window.onload = controlSlides();
function closeModal(){
    document.getElementsByClassName("modal")[0].style.display = 'none';
}
function openModal(){
    document.getElementsByClassName("modal")[0].style.display = 'block';
}
