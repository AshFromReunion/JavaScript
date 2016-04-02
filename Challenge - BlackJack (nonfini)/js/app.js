function carte_aleatoire(min, max)

{

  var carte = min + (max-min+1)*Math.random();
  return Math.floor(carte);

}

function commencer()
{

  var jeu = [];
  var carte = new Array("2","3","4","5","6","7","8","9","10","Vallé", "Dame", "Roi", "As");
  var signe = new Array("Trefle", "Carreau", "Coeur", "Pique");

  for(i = 0; i < 4; i++)
  {
    jeu[i] = []
    for (var j = 0; j < 13; j++) {
      jeu[i][j] = carte[j] + signe[i];
    }
  }

  var carte1 = jeu[carte_aleatoire(0,3)][carte_aleatoire(0,12)];
  var carte2 = jeu[carte_aleatoire(0,3)][carte_aleatoire(0,12)];

  alert("Vous avez reçu : " + carte1 + " et " + carte2);

  for (var i = 0; i < 4; i++) {

    for (var j = 10; j < 13; j++) {

      if (carte1 == jeu[i][j]) {
        carte1 = 10;

      }
    }
  }

  for (var i = 0; i < 4; i++) {

    for (var j = 10; j < 13; j++) {

      if (carte2 == jeu[i][j]) {
        carte2 = 10;

      }
    }
  }

  var somme = parseInt(carte1) + parseInt(carte2);

  alert("Vous avez : " + somme + " points");


  while (somme < 21) {

    var reponse = prompt("Voulez vous continuer ? ");

    if (reponse = true) {

      var carte3 = jeu[carte_aleatoire(0,3)][carte_aleatoire(0,12)];

      alert("Vous avez : " + somme + " points" + " \n Vous avez reçu la carte : " + carte3);


      for (var i = 0; i < 4; i++) {

        for (var j = 10; j < 13; j++) {

          if (carte3 == jeu[i][j]) {
            carte3 = 10;

          }
        }
      }

      var somme = parseInt(carte1) + parseInt(carte2) + parseInt(carte3);

      alert("Vous avez : " + somme + " points ");

    }

  }


  if (somme == 21)
  {
    alert("Vous avez gagné !!!!!!!!!!!!!!!!!!! ");
  }


  else if (somme > 21){
    alert("Vous avez perdu :( ");
  }


}
