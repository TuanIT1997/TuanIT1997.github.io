function openSideMenu(){
    document.getElementsByClassName("side-menu")[0].style.display = "block";
    document.getElementsByClassName("time-icon")[0].style.display = "inline-block";
    document.getElementsByClassName("bar-icon")[0].style.display = "none"; 
}
function closeSideMenu(){
    document.getElementsByClassName("side-menu")[0].style.display = "none";  
    document.getElementsByClassName("bar-icon")[0].style.display = "inline-block"; 
    document.getElementsByClassName("time-icon")[0].style.display = "none";
}
