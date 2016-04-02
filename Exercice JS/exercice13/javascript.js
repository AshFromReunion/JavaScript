var nombre;
var resultat = 1;

nombre = parseInt(prompt("Entrer un nombre"));

for (var i = 1; i <= nombre; i++)
{
  resultat *= i;
}

alert(resultat);
