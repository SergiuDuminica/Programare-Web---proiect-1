var listaPrecedenta = [];

onmessage = (x) => {
    var dif = [];
    console.log("worker.js");
    if (listaPrecedenta.indexOf(x) < 0) {
        dif.push(x);
    }
    if (dif.length() > 0) {
        postMessage(dif);
        console.log(dif);
    }
}