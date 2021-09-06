function homeBest(){
    let el =  document.getElementById("home-best");
    let text = "";
    let count = 0;
    for (let i = 0; i < menu.length; i++) {
        if (count == 8){break;}
        if(menu[i].best == true) {
        count++;
        text += 
        '<div class="container margin-bottom col s12 m6 l3">'+
            '<div class="card center">'+
                '<img class="image" style="width: 100%;" src="./DATA/IMG/'+ menu[i].name +'.jpg" alt="">'+
                '<h5>'+ menu[i].name+'</h5>'+
                '<h6 class="text-green" style="padding-bottom: 16px;">'+menu[i].money+'.000đ</h6>'+
            '</div>'+
        '</div>';
        }
    }
    el.innerHTML = text;
}
window.onload = homeBest();