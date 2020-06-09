"use strict";
var Bowls;
(function (Bowls) {
    for (let i = 0; i < bowls.length; i++) {
        //Überschrift
        let artikelUeberschrift = document.createElement("h2");
        artikelUeberschrift.innerHTML = "Bowls";
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Bowls";
        }
        else {
            artikelUeberschrift.innerHTML = " ";
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
        bowlsPreis.innerHTML = bowls[i].preis + "€";
        //Button "Kaufen"
        let buttonKaufen = document.createElement("button");
        buttonKaufen.innerHTML = "Kaufen";
        // Tags werden als child zu div Container hinzugefügt
        divBowls.appendChild(imgBowls);
        divBowls.appendChild(artikelName);
        divBowls.appendChild(artikelBeschreibung);
        divBowls.appendChild(bowlsPreis);
        divBowls.appendChild(buttonKaufen);
        //Überschrift und Container hinzufügen
        document.getElementById("liste")?.appendChild(artikelUeberschrift);
        document.getElementById("liste")?.appendChild(divBowls);
    }
    let Zubehoer;
    (function (Zubehoer) {
        for (let i = 0; i < zubehoer.length; i++) {
            //Überschrift
            let artikelUeberschrift = document.createElement("h2");
            artikelUeberschrift.innerHTML = "Zubehör";
            if (i == 0) {
                artikelUeberschrift.innerHTML = "Zubehör";
            }
            else {
                artikelUeberschrift.innerHTML = " ";
            }
            //div Container für Zubehör
            let divZubehoer = document.createElement("div");
            divZubehoer.setAttribute("class", "Zubehoer");
            //Bild
            let imgZubehoer = document.createElement("img");
            imgZubehoer.setAttribute("src", zubehoer[i].bild);
            imgZubehoer.setAttribute("alt", "zubehör");
            //Name des Artikels
            let artikelName = document.createElement("h3");
            artikelName.innerHTML = zubehoer[i].name;
            //Preis 
            let zubehoerPreis = document.createElement("p");
            zubehoerPreis.innerHTML = zubehoer[i].preis + "€";
            //Button "Kaufen"
            let buttonKaufen = document.createElement("button");
            buttonKaufen.innerHTML = "Kaufen";
            // Tags werden als child zu div Container hinzugefügt
            divZubehoer.appendChild(imgZubehoer);
            divZubehoer.appendChild(artikelName);
            divZubehoer.appendChild(zubehoerPreis);
            divZubehoer.appendChild(buttonKaufen);
            //Überschrift und Container hinzufügen
            document.getElementById("liste")?.appendChild(artikelUeberschrift);
            document.getElementById("liste")?.appendChild(divZubehoer);
        }
    })(Zubehoer || (Zubehoer = {}));
})(Bowls || (Bowls = {}));
//# sourceMappingURL=script.js.map