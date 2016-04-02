var tableau =[];
var ligne = 0;
var colonne = 0;
for (var i = 0; i < 4; i++)
{
tableau[i]= [];
}


for( colonne = 0; colonne < 4; colonne++)
{
  for (ligne = 0; ligne < 5; ligne++)
  {
    var valeur = prompt("entrer valeur");
    tableau[colonne][ligne]=valeur;
  }
}

alert(tableau);
