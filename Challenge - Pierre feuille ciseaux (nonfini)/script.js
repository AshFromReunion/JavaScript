$(document).ready(function () {
    $(".score").hide();
    $(".vous").hide();
    $(".commencer").click(function () {

        $(".commencer").hide();

        var seconde = 4;

        var decompte = setInterval(function () {
            seconde--;

            $('#cmpteRebout').html("" + seconde);
        }, 1000);

        setTimeout(function () {
            clearInterval(decompte);
            $("img").removeClass("cacher").addClass("visibl");
        }, 4000);

        $(".score").show();
        $(".vous").show();



        $("img").click(function () {


            $("img").hide();
            $(this).show();

            var liste = ['ciseaux', 'feuille', 'pierre'];

            function hasard() {
                var aleatoire = Math.floor(Math.random() * liste.length);
                return aleatoire;
            }

            function alea() {
                for (var i = 0; i < 3; i++) {
                    var position = hasard();
                    return liste[position];
                }
            }

            resultat = alea();

            $(".image-ordi").html("Choix de l'ordinateur : " + resultat);

            $(".vs").html("VS");

            $(".result").html("");

            var compteurU = 0;
            var compteurO = 0;

            if (resultat == this.id) {

                $(".result").html("Egalité");
            } else if (resultat == "ciseaux" && $("#feuille")) {
                compteurO++;
                $(".result").html("Gagnant : Ordinateur");
                $(".ordi").text("Ordinateur : " + compteurO);

            } else if (resultat == "ciseaux" && $("#pierre")) {
                compteurU++
                $(".result").html("Gagnant : Vous");
                $(".vous").text("Vous : " + compteurU);

            } else if (resultat == "feuille" && $("#ciseaux")) {
                compteurU++
                $(".result").html("Gagnant : Vous");
                $(".vous").text("Vous : " + compteurU);

            } else if (resultat == "feuille" && $("#pierre")) {
                compteurO++;
                $(".result").html("Gagnant : Ordinateur");
                $(".ordi").text("Ordinateur : " + compteurO);

            } else if (resultat == "pierre" && $("#ciseaux")) {
                compteurO++;
                $(".result").html("Gagnant : Ordinateur");
                $(".ordi").text("Ordinateur : " + compteurO);

            } else if (resultat == "pierre" && $("#feuille")) {
                compteurU++
                $(".result").html("Gagnant : Vous");
                $(".vous").text("Vous : " + compteurU);
            }

            $(".commencer").show();

        });

    });

});