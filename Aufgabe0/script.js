"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let produktZaehler = 0;
    let gesamtPreis = 0;
    let gesamtZahl = document.createElement("p");
    let zahlAnzeigen = document.createElement("div");
    zahlAnzeigen.id = "zahlAnzeigen";
    let angebote = [];
    window.addEventListener("load", init);
    function init() {
        let url = "angebote.json";
        communicate(url);
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        angebote = await response.json();
        artikelErzeugen();
    }
    function saveInLocalStorage(_inputAngebote) {
        let itemString = JSON.stringify(_inputAngebote);
        let key = "" + _inputAngebote.name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    function artikelErzeugen() {
        for (let i = 0; i < angebote.length; i++) {
            //div erstellen 
            let newDiv = document.createElement("div");
            newDiv.id = "produkt" + i;
            document.getElementById("bowls")?.appendChild(newDiv);
            //Bild anlegen
            let imgAngebote = document.createElement("img");
            imgAngebote.src = angebote[i].img;
            document.getElementById("produkt" + i)?.appendChild(imgAngebote);
            //Name anlegen 
            let nameAngebote = document.createElement("p");
            nameAngebote.innerHTML = angebote[i].name;
            document.getElementById("produkt" + i)?.appendChild(nameAngebote);
            //Beschreibung anlegen 
            let beschreibungAngebote = document.createElement("p");
            beschreibungAngebote.innerHTML = angebote[i].beschreibung;
            document.getElementById("produkt" + i)?.appendChild(beschreibungAngebote);
            //Preis
            let preisAngebote = document.createElement("p");
            preisAngebote.innerHTML = angebote[i].preis + "€";
            document.getElementById("produkt" + i)?.appendChild(preisAngebote);
            //Button
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Kaufen";
            document.getElementById("produkt" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", kaufenButton.bind(angebote[i]));
            kaufen.setAttribute("preis", angebote[i].preis.toString());
            //"Button" in Warenkorb
            kaufen.setAttribute("name", angebote[i].name);
            kaufen.setAttribute("img", angebote[i].img);
            kaufen.setAttribute("beschreibung", angebote[i].beschreibung);
            kaufen.setAttribute("kategorie", angebote[i].kategorie);
            document.getElementById("_angebote" + i)?.appendChild(kaufen);
            document.getElementById("_angebote" + i)?.appendChild(kaufen);
            switch (angebote[i].kategorie) {
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
        //Teilaufgabe 1:
        function kaufenButton(_event) {
            produktZaehler++;
            console.log(produktZaehler);
            saveInLocalStorage(this);
            gesamtPreis += parseFloat(_event.target?.getAttribute("preis"));
            console.log(gesamtPreis.toFixed(2));
            if (produktZaehler == 1) {
                document.getElementById("warenkorbZaehler")?.appendChild(zahlAnzeigen);
            }
            zahlAnzeigen.innerHTML = "" + produktZaehler;
            document.getElementById("anzahlAnzeigen")?.appendChild(gesamtZahl);
        }
        //Teilaufgabe 2:
        function handleCategoryClick(_click) {
            switch (this.getAttribute("id")) {
                case "bowlsAnzeigen":
                    bowls();
                    break;
                case "zubehoerAnzeigen":
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
        let bowlsAnzeigen = document.querySelector("#bowls");
        bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));
        let zubehoerAnzeigen = document.querySelector("#zubehoer");
        zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map