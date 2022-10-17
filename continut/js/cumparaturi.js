class Produs {
    constructor(id, nume, cantitate) {
        this.id = id;
        this.nume = nume;
        this.cantitate = cantitate;
    }
}

var index = 1;

function adaugaLista() {
    var nume = document.getElementById("nume");
    var cantitate = document.getElementById("cantitate");
    entry = new Produs(index, nume.value, cantitate.value);
    localStorage.setItem('entry' + index.toString(), JSON.stringify(entry));
    var get = localStorage.getItem('entry' + index.toString());
    if (get != null) {
        console.log("Adaugat!");
        document.getElementById("listaProduse").innerHTML += "<tr><td>" + index + "</td><td>" + nume.value + "</td><td>" + cantitate.value + "</td></tr>";
    }
    index++;
}

const myWorker = new Worker('js/worker.js');

setInterval(() => {

    for (var i = 1; i < index; ++i) {
        var x = localStorage.getItem('entry' + i.toString());
        console.log(x);
        myWorker.postMessage(x);
    }
}, 1000)

myWorker.onmessage = (diff) => {
    var tabel = document.getElementById("listaProduse").innerHTML;
    console.log(diff);
}