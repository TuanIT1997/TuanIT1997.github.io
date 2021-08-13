let i = 0;
let cd;
let len;
const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    const xmlDoc = xhttp.responseXML;
    cd = xmlDoc.getElementsByTagName("CD");
    len = cd.length;
    displayCD(i);
}
xhttp.open("GET","cd_catalog.xml");
xhttp.send();
function displayCD(i){
    document.getElementById("showCD").innerHTML = 
    "Artist: " + cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "<br>"+
    "Title: " + cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "<br>"+
    "Year: " + cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue + "<br>";
}
function upCD(){
    if(i<len-1){
        i++;
        displayCD(i);
    }
}
function backCD(){
    if (i>0){
        i--;
        displayCD(i);
    }
}