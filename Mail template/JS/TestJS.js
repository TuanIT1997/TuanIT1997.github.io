function openMail(){
    document.getElementsByClassName("background")[0].style.display = "block";
}
function closeMail(){
    document.getElementsByClassName("background")[0].style.display = "none";
}
function list(el){
    if (el.classList.contains("ibox-red") == false){
        el.classList.add("ibox-red");
        document.getElementsByClassName("person-list")[0].style.display = "block";
    }else{
        el.classList.remove("ibox-red");
        document.getElementsByClassName("person-list")[0].style.display = "none";
    }
}
function showPerson(el,id){
    if (el.classList.contains("person-active") == false){
        let listPerson = document.getElementsByClassName("person");
        let len = listPerson.length;
        for (let i = 0; i < len; i++) {
           listPerson[i].classList.remove("person-active");
        }
        el.classList.add("person-active");
    }
    let listMain = document.getElementsByClassName("main");
        let len = listMain.length;
        for (let i = 0; i < len; i++) {
           listMain[i].style.display = "none";
        }
    document.getElementById(id).style.display = "block";
}
function openBar(){
    document.getElementById("close-bar").style.display = "block";
    document.getElementsByClassName("menu")[0].style.display = "block";
}
function closeBar(){
    document.getElementById("close-bar").style.display = "none";
    document.getElementsByClassName("menu")[0].style.display = "none";
}

