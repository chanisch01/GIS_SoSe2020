"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    artikelErzeugen();
    function artikelErzeugen() {
        for (let i = 0; i < Aufgabe06.angebote.length; i++) {
            //div erstellen 
            let newDiv = document.createElement("div");
            newDiv.id = "produkt" + i;
            document.getElementById("bowls")?.appendChild(newDiv);
            //Bild anlegen
            let imgAngebote = document.createElement("img");
            imgAngebote.src = Aufgabe06.angebote[i].bild;
            document.getElementById("produkt" + i)?.appendChild(imgAngebote);
            //Name anlegen 
            let nameAngebote = document.createElement("p");
            nameAngebote.innerHTML = Aufgabe06.angebote[i].name;
            document.getElementById("produkt" + i)?.appendChild(nameAngebote);
            let preisAngebote = document.createElement("p");
            preisAngebote.innerHTML = Aufgabe06.angebote[i].preis + "€";
            document.getElementById("produkt" + i)?.appendChild(preisAngebote);
            //Beschreibung anlegen 
            let beschreibungAngebote = document.createElement("p");
            beschreibungAngebote.innerHTML = Aufgabe06.angebote[i].beschreibung;
            document.getElementById("produkt" + i)?.appendChild(beschreibungAngebote);
            //Button
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            document.getElementById("produkt" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleWarenkorb);
            kaufen.setAttribute("preis", Aufgabe06.angebote[i].preis.toString());
            switch (Aufgabe06.angebote[i].kategorie) {
                case "bowls":
                    let getContainerBowls = document.getElementById("bowls");
                    getContainerBowls.appendChild(newDiv);
                    break;
                case "zubehoer":
                    let getContainerZubehoer = document.getElementById("zubehoer");
                    getContainerZubehoer.appendChild(newDiv);
                    break;
                default:
                    break;
            }
        }
        //Teilaufgabe 1
        let gesamtPreis = 0;
        let produktZaehler = 0;
        let warenkorb = document.createElement("div");
        function handleWarenkorb(_event) {
            if (produktZaehler >= 0) {
                document.getElementById("warenkorbZaehler")?.appendChild(warenkorb);
            }
            produktZaehler++;
            warenkorb.innerHTML = produktZaehler + "";
            gesamtPreis += parseFloat(_event.target?.getAttribute("preis"));
            console.log(gesamtPreis);
        }
        //Teilaufgabe 2
        function handleCategoryClick(_click) {
            switch (this.getAttribute("id")) {
                case "bowlsButton":
                    bowls();
                    break;
                case "zubehoerButton":
                    zubehoer();
                    break;
            }
            function bowls() {
                document.getElementById("bowls").style.display = "inline-grid";
                document.getElementById("zubehoer").style.display = "none";
            }
            function zubehoer() {
                document.getElementById("zubehoer").style.display = "inline-grid";
                document.getElementById("bowls").style.display = "none";
            }
        }
        //neue Variable erstellen und verlinken
        let bowlsAnzeigen = document.querySelector("#bowlsButton");
        bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));
        let zubehoerAnzeigen = document.querySelector("#zubehoerButton");
        zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map