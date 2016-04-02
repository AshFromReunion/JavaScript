var tableau = [];
var valeur;
var rang=0;


for (var i = 0; i < 5; i++) {

  valeur = parseInt(prompt(" entrer valeur : "));
  tableau[i] = valeur;
}


alert(tableau);

var petit = tableau[0];

for (var i = 0; i < 5; i++){

  if (tableau[i] < petit) {
    petit = tableau[i];
    rang = i;

  }

}

alert("le plus petit nombe est : " + petit);
alert("il se trouve au rang : " + rang);
