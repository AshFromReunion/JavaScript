var nombre;
var resultat = "";
var stop;
var i

nombre = parseInt(prompt("Entrer un nombre de depart"));
stop = nombre;
for (i = 1; i <= 10; i++)
{
  stop = nombre+i;
  resultat += stop + ", ";
}

alert(resultat);
