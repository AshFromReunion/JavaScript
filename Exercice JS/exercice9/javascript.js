var nombre;

nombre = prompt("Entrer un nombre entre 10 et 20");

if (nombre >= 10 && nombre <= 20) {
  alert("Saisie Acceptée");
}

else if (nombre < 10) {
  alert("Plus grand !");
}

else {
  alert("Plus petit !");
}
