var somme = 0;
var somme_vers ="";
var reste="";
var dix_euro="";
var cinq_euro="";
var prix=1;



while (prix != 0) {
prix = parseInt(prompt("entrer un prix"));
somme +=  prix;



}
alert(somme);
somme_vers = prompt("entre la somme versee");
reste = somme_vers - somme;
dix_euro = 0;
while (reste >= 10) {
dix_euro = dix_euro + parseFloat(1);
reste = reste-parseFloat(10);
}

cinq_euro = 0;
if (reste >= 5)
{
cinq_euro = 1;
reste = reste - 5;
}

alert("10 euros : " + dix_euro);
alert("5 euros : " + cinq_euro);
alert("1 euros : " + reste);
