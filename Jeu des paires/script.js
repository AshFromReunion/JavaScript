var listeCarte = ['img/img1.gif', 'img/img2.gif', 'img/img3.gif', 'img/img4.gif', 'img/img5.gif', 'img/img6.gif', 'img/img7.gif', 'img/img1.gif', 'img/img2.gif', 'img/img3.gif', 'img/img4.gif', 'img/img5.gif', 'img/img6.gif', 'img/img7.gif'];
var plateau = [];


// DEBUT FONCTION HASARD         Renvoie un nombre au hasard
function hasard() {
  var nbAlea = Math.floor(Math.random() * listeCarte.length);
  return nbAlea;
}
// FIN FONCTION HASARD



// DEBUT FONCTION ALEA          Place les cartes aléatoirement sur la page
function alea() {
  for (var i = 0; i < 14; i++) {
    var position = hasard();
    document.getElementsByTagName('div')[i].style.backgroundImage = "url(" + listeCarte[position] + ")";
    listeCarte.splice(position, 1);
  }
}
// FIN FONCTION ALEA


var second = 31;

// DEBUT FONCTION CHANGETIME        Lance , avec la fonction suivante, le chronomètre de 30  secondes - possibilité de rejouer à la fin du chrono
function changeTime() {
  if (second > -1) {
    second--;
  }

  if (second == -1) {
    var continuer = confirm("Temps écoulé ! Voulez-vous essayer à nouveau ?");

    if (continuer) {
      for (var z = 0; z < 14; z++) {
        document.getElementsByTagName('div')[z].firstChild.className = 'visible';

      }
      listeCarte = ['img/img1.gif', 'img/img2.gif', 'img/img3.gif', 'img/img4.gif', 'img/img5.gif', 'img/img6.gif', 'img/img7.gif', 'img/img1.gif', 'img/img2.gif', 'img/img3.gif', 'img/img4.gif', 'img/img5.gif', 'img/img6.gif', 'img/img7.gif'];
      alea();
      compteur = 0;
      second = 31;

    } else {

      for(var y=0; y<14; y++)
      {
        document.getElementsByTagName('div')[y].onclick = null;
      }
        window.location.reload();
    }
  }

  if (second > -1) {
      if(second==0 || second==1)
          {
              var tempsRestant = "Il vous reste <span class=\"chiffre\">" + second + "</span> seconde !";
              document.getElementById('temps').innerHTML = tempsRestant;

          }
      else{
    var tempsRestant = "Il vous reste <span class=\"chiffre\">" + second + "</span> secondes !";
    document.getElementById('temps').innerHTML = tempsRestant;
          }

  } else {
    document.getElementById('temps').innerHTML = "C'est fini ! Rechargez la page pour recommencer ! ";
  }
}
// FIN FONCTION CHANGETIME


// DEBUT FONCTION CHRONOMETRE               Exécute la fonction précédente pour créer le chronomètre
function chronometre(){
  var instance = self.setInterval(changeTime, 1000);
}
// FIN FONCTION CHRONOMETRE



var compteur = 0;

// DEBUT FONCTION RETOURNER             Fonction appelée pour retourner les cartes et les comparer
function retourner(carte) {
  if(listeCarte.length == 0){
    plateau.push(carte);
    carte.firstChild.className = 'hidden';

    if (plateau.length >= 2 && plateau[1].style.backgroundImage != plateau[0].style.backgroundImage) {

      setTimeout(function retournement(){
      plateau[0].firstChild.className = 'visible';
      plateau[1].firstChild.className = 'visible';
      plateau = [];
          }, 300);



    } else if (plateau.length >= 2 && plateau[1].style.backgroundImage == plateau[0].style.backgroundImage) {
      plateau = [];
      compteur += 1;
    }

    if (compteur == 7) {
      var continuer = confirm("Vous avez gagné ! Voulez-vous rejouer ?");

      if (continuer) {
        for (var z = 0; z < 14; z++) {
          document.getElementsByTagName('div')[z].firstChild.className = 'visible';
        }

        listeCarte = ['img/img1.gif', 'img/img2.gif', 'img/img3.gif', 'img/img4.gif', 'img/img5.gif', 'img/img6.gif', 'img/img7.gif', 'img/img1.gif', 'img/img2.gif', 'img/img3.gif', 'img/img4.gif', 'img/img5.gif', 'img/img6.gif', 'img/img7.gif'];
        alea();
        compteur = 0;
        second = 31;
      }

      else
      {

        window.location.reload();
      }
    }
  }
}
// FIN FONCTION RETOURNER


// FONCTION POUR DEFILEMENT DES GIFS
$(document).ready(function(){

  function defile(idImg, duree){
    hFen = $(window).width();
    hImg = $(idImg).width();

    hTot = hFen + hImg;

    $(idImg).animate({ right: "+="+hTot }, duree);
  }

  defile(team, 37000);
  defile(dracaufeu, 30000);
});
// FIN FONCTION POUR DEFILEMENT DES GIFS




// FONCTION POUR CONTROLE DU SON

document.getElementById('audioPlayer').play();

function play(idPlayer, control) {

    var player = document.getElementById(idPlayer);
    if (player.paused) {
            player.play();
            control.src = "img/sonon.png";
    } else {
            player.pause();
            control.src = "img/sonoff.png";
    }
}



// FIN FONCTION POUR CONTROLE DU SON
