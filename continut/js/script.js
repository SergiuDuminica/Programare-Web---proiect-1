setInterval(date_time, 1000);

function date_time() {
    const d = new Date();
    document.getElementById("s1").innerHTML = "Data de astăzi: " + d.toLocaleDateString();
    document.getElementById("s1_1").innerHTML = "Ora: " + d.toLocaleTimeString();
}

function locatie() {
    let origin = window.location.pathname;
    document.getElementById("s1_2").innerHTML = origin;
}

function browser_SO() {
    let browser = window.navigator.appName;
    let version = window.navigator.appVersion;
    document.getElementById("s1_3").innerHTML = "Browserul pe care operați: " + browser + ", versiunea: " + version;
}

var clicks = 0;

function desenare_canvas(event) {
    clicks++;
    var canvas = document.getElementById("Canvas");
    if (clicks == 2) {
        var width = event.clientX - x1 - canvas.getBoundingClientRect().left;
        var height = event.clientY - y1 - canvas.getBoundingClientRect().top;
        var lineColor = document.getElementById("culoare_contur");
        var fillColor = document.getElementById("culoare_umplere");
        var context = canvas.getContext("2d");
        context.strokeStyle = lineColor.value;
        context.fillStyle = fillColor.value;
        context.lineWidth = "5";
        context.rect(x1, y1, width, height);
        context.stroke();
        context.fill();
        clicks = 0;
    }
    else {
        x1 = event.clientX - canvas.getBoundingClientRect().left;
        y1 = event.clientY - canvas.getBoundingClientRect().top;
    }
}

function schimbaContinut(resursa, jsFisier, jsFunctie) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =
        function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("continut").innerHTML = this.responseText;
                if (jsFisier) {
                    var elementScript = document.createElement('script');
                    elementScript.onload = function () {
                        console.log("hello");
                        if (jsFunctie) {
                            window[jsFunctie]();
                        }
                    };
                    elementScript.src = jsFisier;
                    document.head.appendChild(elementScript);
                } else {
                    if (jsFunctie) {
                        window[jsFunctie]();
                    }
                }
            }
        }
    xhttp.open("GET", resursa + '.html', true);
    xhttp.send();
}

function addRow() {
    var table = document.getElementById("s3");
    var x = document.getElementById("linie").value;
    var newRow = table.insertRow(x);
    const myTDlist = document.querySelectorAll("td");
    const myTRlist = document.querySelectorAll("tr");
    for (let i = 0; i < (myTDlist.length / myTRlist.length); i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = "new row";
    }
}

function addColumn() {
    var x = document.getElementById("coloana").value;
    const myTRlist = document.querySelectorAll("tr")
    for (let i = 0; i < myTRlist.length; i++) {
        td = document.createElement("td")
        const text = document.createTextNode("new column");
        td.appendChild(text);
        myTRlist[i].insertBefore(td, myTRlist[i].children[x]);
    }
}