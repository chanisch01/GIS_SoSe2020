"use strict";
var Bowls;
(function (Bowls) {


    for (let i = 0; i < bowls.length; i++) {


        //Überschrift
        let artikelUeberschrift = document.createElement("h2");
        artikelUeberschrift.innerHTML = "Bowls";
        artikelUeberschrift.setAttribute("id", "Überschrift");
        
        let artikelBowls = document.createElement("h2");
        artikelBowls.innerHTML = "Bowls";
        artikelBowls.setAttribute("id", "Überschrift");
        
        if (i == 0) {
            artikelBowls.innerHTML = "Bowls";
        }
        else {
            artikelBowls.innerHTML = " ";
        }

        //div Container für Bowls
        let divBowls = document.createElement("div");
        divBowls.setAttribute("class", "bowls");

        //Bild
        let imgBowls = document.createElement("img");
        imgBowls.setAttribute("src", bowls[i].bild);
        imgBowls.setAttribute("alt", "bowls");

        //Name des Artikels
        let artikelName = document.createElement("h3");
        artikelName.innerHTML = bowls[i].name;

        //Beschreibung des Artikel
        let artikelBeschreibung = document.createElement("h3");
        artikelBeschreibung.innerHTML = bowls[i].beschreibung;

        //Preis 
        let bowlsPreis = document.createElement("p");
        bowlsPreis.innerHTML = bowls[i].preis;

        //Button "Kaufen"
        let buttonKaufen = document.createElement("button");
        buttonKaufen.innerHTML = "Kaufen";

        // Tags werden als child zu div Container hinzugefügt
        divBowls.appendChild(imgBowls);
        divBowls.appendChild(artikelBowls);
        divBowls.appendChild(artikelBeschreibung);
        divBowls.appendChild(bowlsPreis);
        divBowls.appendChild(buttonKaufen);

        //Überschrift und Container hinzufügen
        document.getElementById("liste")?.appendChild(artikel);
        document.getElementById("liste")?.appendChild(artikelBowls);
    }
    
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map