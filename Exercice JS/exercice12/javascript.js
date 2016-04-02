var nombre;
var resultat = 0;

nombre = parseInt(prompt("Entrer un nombre"));

for (var i = 1; i <= nombre; i++)
{
  resultat += i;
}

alert(resultat);
