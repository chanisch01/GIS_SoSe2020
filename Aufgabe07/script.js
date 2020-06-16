"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let produktZähler = 0;
    let preisBerechnen = 0;
    let zahlAnzeigen = document.createElement("p");
    let anzahlAnzeigen = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";
    let angebote = [];
    window.addEventListener("load", init);
    function init() {
        let url = "data.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        angebote = await response.json();
        console.log("End");
        artikelErzeugen();
    }
    function saveInLocalStorage(_inputArticle) {
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    //Produkte einschleifen
    function artikelErzeugen() {
        for (let i = 0; i < angebote.length; i++) {
            //Div
            let newDiv = document.createElement("div");
            newDiv.id = "produkt" + i;
            document.getElementById("bowls")?.appendChild(newDiv);
            //Bild
            let imgAngebote = document.createElement("img");
            imgAngebote.src = angebote[i].bild;
            document.getElementById("produkt" + i)?.appendChild(imgAngebote);
            //Name anlegen 
            let nameAngebote = document.createElement("p");
            nameAngebote.innerHTML = angebote[i].name;
            document.getElementById("produkt" + i)?.appendChild(nameAngebote);
            let preisAngebote = document.createElement("p");
            preisAngebote.innerHTML = angebote[i].preis + "€";
            document.getElementById("produkt" + i)?.appendChild(preisAngebote);
            //Beschreibung anlegen 
            let beschreibungAngebote = document.createElement("p");
            beschreibungAngebote.innerHTML = angebote[i].beschreibung;
            document.getElementById("produkt" + i)?.appendChild(beschreibungAngebote);
            //Button
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            document.getElementById("produkt" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleWarenkorb.bind(angebote[i]));
            kaufen.setAttribute("preis", angebote[i].preis.toString());
            switch (angebote[i].kategorien) {
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
        function handleWarenkorb(_event) {
            produktZähler++;
            console.log(produktZähler);
            saveInLocalStorage(this);
            preisBerechnen += parseFloat(_event.target?.getAttribute("preis"));
            console.log(preisBerechnen.toFixed(2));
            if (produktZähler == 1) {
                document.getElementById("wagenkorbZaehler")?.appendChild(anzahlAnzeigen);
            }
            anzahlAnzeigen.innerHTML = "" + produktZähler;
            document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);
        }
        //Ein-/Ausblenden der Produkte
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
        let bowlsAnzeigen = document.querySelector("#bowls");
        bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));
        let zubehoerAnzeigen = document.querySelector("#zubehoer");
        zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map