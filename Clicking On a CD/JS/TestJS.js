let i = 0;
var cd;
let len;
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    const xmlDoc = xhttp.responseXML;
    cd = xmlDoc.getElementsByTagName("CD");
    len = cd.length;
    loadCD();
}
function loadCD() {
    let text = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < len; i++) {
        text += '<tr onclick="displayCD(' + i + ')">';
        text += "<td>" + cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td>"
        text += "<td>" + cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td></tr>"
    }
    document.getElementById("tableCD").innerHTML = text;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
function displayCD(i) {
    document.getElementById("showCD").innerHTML =
        "Artist: " + cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "<br>" +
        "Title: " + cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "<br>" +
        "Year: " + cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue + "<br>";
}

