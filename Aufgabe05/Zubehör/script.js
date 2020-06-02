"use strict";
var Zubehör;
(function (Zubehör) {
    for (let i = 0; i < zubehör.length; i++) {
        //Überschrift
        let artikelZubehör = document.createElement("h2");
        artikelZubehör.innerHTML = "Zubehör";
        if (i == 0) {
            artikelZubehör.innerHTML = "Zubehör";
        }
        else {
            artikelZubehör.innerHTML = " ";
        }
        //div Container für Zubehör
        let divZubehör = document.createElement("div");
        divZubehör.setAttribute("class", "zubehör");
        //Bild
        let imgZubehör = document.createElement("img");
        imgZubehör.setAttribute("src", zubehör[i].bild);
        imgZubehör.setAttribute("alt", "zubehör");
        //Name des Artikels
        let artikelName = document.createElement("h3");
        artikelName.innerHTML = zubehör[i].name;
        //Preis 
        let zubehörPreis = document.createElement("p");
        zubehörPreis.innerHTML = zubehör[i].preis + "€";
        //Button "Kaufen"
        let buttonKaufen = document.createElement("button");
        buttonKaufen.innerHTML = "Kaufen";
        // Tags werden als child zu div Container hinzugefügt
        divZubehör.appendChild(imgZubehör);
        divZubehör.appendChild(artikelName);
        divZubehör.appendChild(zubehörPreis);
        divZubehör.appendChild(buttonKaufen);
        //Überschrift und Container hinzufügen
        document.getElementById("liste")?.appendChild(artikelZubehör);
        document.getElementById("liste")?.appendChild(divZubehör);
    }
})(Zubehör || (Zubehör = {}));
//# sourceMappingURL=data.js.map
