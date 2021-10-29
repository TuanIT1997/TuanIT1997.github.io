document.getElementById("open-menu").addEventListener("click",() => openMenu());
function openMenu(){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("close-menu").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("open-menu").addEventListener("click",() => closeMenu());
}
function closeMenu(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("open-menu").addEventListener("click",() => openMenu());
}