var cp ="";
var cj ="";

var ordre = 1;
var desordre = 1;

cp = parseInt(prompt("Entrez le nombre de chevaux partant : "));
cj = parseInt(prompt("Entrez le nombre de chevaux joués : "));

for (var i = 1; i <= cj; i++) {
ordre = ordre * (i + cp - cj);
desordre = desordre * i;
}

alert("Dans l'ordre, une chanc sur " + ordre);
alert("Dans le desordre, une chance sur" + ordre/desordre);
