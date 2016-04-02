var grand = 0;
var nombre;
var rang = 0;
var i;

for (i = 1; i <= 5; i++)
{
  nombre = parseFloat(prompt("Entre un nombre"));

  if(nombre > grand)
  {
    grand = nombre;
    rang = i;
  }

}

alert("Le plus grand de ces nombres est : " + grand);
alert("C’était le nombre numéro " + rang);
