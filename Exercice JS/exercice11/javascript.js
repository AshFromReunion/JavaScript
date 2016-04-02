var i = 1;
var nombre = prompt("Quel table de multiplication voulais vous savoir ?");
var resultat = "";

while(i <= 10)
{
  resultat += '\n' + nombre + ' x ' + i + ' = ' + nombre*i ;
  i++;
}

alert('La table de multiplication de ' + nombre + " est : " + resultat)
