function incarcaPersoane() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var i;
      var xmlDoc = this.responseXML;
      var table = "<tr><th>Nume</th><th>Prenume</th><th>Gen</th><th>" +
        "Varsta</th><th>Numar telefon</th><th>Email" +
        "</th><th>Strada</th><th>Numar</th><th>Localitate</th><th>Judet</th><th>Tara</th></tr>";
      var x = xmlDoc.getElementsByTagName("persoana");
      for (i = 0; i < x.length; i++) {
        table += "<tr><td>" + x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("gen")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("numartelefon")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("strada")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("numar")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("localitate")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("judet")[0].childNodes[0].nodeValue
          + "</td><td>" + x[i].getElementsByTagName("tara")[0].childNodes[0].nodeValue
          + "</td><t>";
      }
      document.getElementById("persoane").innerHTML = table
    }
  };
  xhttp.open("GET", "../resurse/persoane.xml", true);
  xhttp.send();
}

function verifica() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var gasit = 0;
      var obj = JSON.parse(xhttp.responseText);
      var user = document.getElementById("utilizator").value;
      var password = document.getElementById("parola").value;
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].utilizator == user && obj[i].parola == password) {
          gasit = 1;
        }
      }
      if (gasit == 1) {
        document.getElementById("check").innerHTML = "Gasit";
      }
      else {
        document.getElementById("check").innerHTML = "Nu a fost gasit";
      }
    }
  }
  xhttp.open("GET", "/resurse/utilizatori.json", true);
  xhttp.send();
}

function inregistreaza() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // var user = document.getElementById("username").value;
      // var password = document.getElementById("password").value;
      // addNewUser(user, password);
      // console.log('S-a apasat butonul de inregistrare');
    }
  }
  xhttp.open("POST", "/resurse/utilizatori.json", true);
  xhttp.send();
}