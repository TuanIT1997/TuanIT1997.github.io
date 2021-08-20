let elbutton = document.getElementsByClassName("tablink");
let ellink =document.getElementsByClassName("mylink"); 
for (let i = 0; i < elbutton.length; i++) {
    elbutton[i].addEventListener("click", function(){
        for (let i = 0; i < elbutton.length; i++) {
            elbutton[i].classList.remove("red");
        }
        elbutton[i].classList.add("red");
        for (let i = 0; i < ellink.length; i++) {
            ellink[i].style.display = "none";
        }
        ellink[i].style.display = "block";
    })
}