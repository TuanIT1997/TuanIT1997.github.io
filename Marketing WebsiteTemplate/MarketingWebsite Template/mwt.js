function controlNav(){
    let el = document.getElementById("navDemo");
    if (el.classList.contains("show")){
        el.classList.remove("show");
    }else{
        el.classList.add("show");
    }
}
function closeModal(){
    document.getElementsByClassName("modal")[0].style.display = "none";
}
function openModal(){
    document.getElementsByClassName("modal")[0].style.display = "block";
}
function closeSidebar(){
    document.getElementsByClassName("sidebar")[0].style.display = "none";
}
function openSidebar(){
    document.getElementsByClassName("sidebar")[0].style.display = "block";
}