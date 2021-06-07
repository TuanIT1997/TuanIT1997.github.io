var lunar = new Date(2022, 1, 1, 0, 0, 0).getTime();
function newYear() {
     let toDay = new Date().getTime();
     let time = lunar - toDay;
     let s = 1000;
     let m = s * 60;
     let h = m * 60;
     let d = h * 24;
     document.getElementById(`d`).innerText = Math.floor(time / (d));
     document.getElementById("h").innerText = Math.floor((time % (d)) / (h));
     document.getElementById("m").innerText = Math.floor((time % (h)) / (m));
     document.getElementById("s").innerText = Math.floor((time % (m)) / (s));
 }
function changecolor(){
    for (let i = 1; i <=3 ; i++) {
        let color = document.getElementById(`para`+i).style.color
        switch (color) {
            case `red`:
                document.getElementById(`para`+i).style.color=`yellow`
                break;
            case `green`:
                document.getElementById(`para`+i).style.color=`red`
                break;    
            case `yellow`:
                document.getElementById(`para`+i).style.color=`green`
                break;     
            default:
                if (i===1){
                    document.getElementById(`para`+i).style.color=`red` 
                }
                if (i===2){
                    document.getElementById(`para`+i).style.color=`green` 
                }
                if (i===3){
                    document.getElementById(`para`+i).style.color=`yellow` 
                }        
                break;
        }
    }
}
const button = document.querySelector('.change-color');
button.addEventListener('click',changecolor);
 setInterval(function () {
    newYear()
}, 1000)