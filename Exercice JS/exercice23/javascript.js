function Mention(moyenne)
{

if(moyenne < 0 || moyenne > 20)

{
  alert("entrer moyenne entre 0 et 20");
}

 else if(moyenne < 10) {
  alert("non admis");
}

else if (moyenne <=12) {
  alert("passable");
}
else if (moyenne <= 14){
  alert("assez bien");
}
else if (moyenne <=16) {
  alert("bien");
}
else if (moyenne <= 20) {
  alert("Très bien");

}
}
while (true) {
  Mention(parseInt(prompt('Entrer moyenne')));
}
