var pg = 0;
var i = 1;
var place="";
var nombre = prompt("entre un nb");
while (nombre != 0)
{
  var nombre = prompt("entre un nombre");
  var i = i+1;

  if (nombre > pg)
  {
    pg = nombre;
    place = i;
  }
}


alert(pg);
alert(place);
