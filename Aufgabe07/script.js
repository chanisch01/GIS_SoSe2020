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
        let url = "angebote.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        angebote = await response.json();
        console.log("Ende");
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
            //Div
            let divBowls = document.createElement("div");
            divBowls.setAttribute("class", "Produkte");
            //Bild
            let imgBowls = document.createElement("img");
            imgBowls.setAttribute("src", angebote[i].img);
            //Name
            let bowlsName = document.createElement("h2");
            bowlsName.innerHTML = angebote[i].name;
            //Beschreibung
            let bowlsBeschreibung = document.createElement("p");
            bowlsBeschreibung.innerHTML = angebote[i].beschreibung;
            //Preis
            let bowlsPreis = document.createElement("h3");
            bowlsPreis.innerHTML = angebote[i].preis + "€";
            //Button
            let button = document.createElement("input");
            button.innerHTML = "Jetzt kaufen";
            button.type = "button";
            button.value = "Kaufen";
            bowlsPreis.appendChild(button);
            //button.addEventListener("click", handleAdd);
            button.addEventListener("click", kaufenButton.bind(angebote[i]));
            button.setAttribute("preis", angebote[i].preis.toString());
            //"Button" in Warenkorb
            button.setAttribute("name", angebote[i].name);
            button.setAttribute("img", angebote[i].img);
            button.setAttribute("beschreibung", angebote[i].beschreibung);
            button.setAttribute("kategorie", angebote[i].kategorie.toString());
            document.getElementById("_angebote" + i)?.appendChild(button);
            document.getElementById("_angebote" + i)?.appendChild(button);
            // Alle Tags zu div Container
            divBowls.appendChild(imgBowls);
            divBowls.appendChild(bowlsName);
            divBowls.appendChild(bowlsPreis);
            divBowls.appendChild(bowlsBeschreibung);
            divBowls.appendChild(button);
            switch (angebote[i].kategorie) {
                case 1:
                    let getContainer1 = document.getElementById("bowls");
                    getContainer1.appendChild(divBowls);
                    break;
                case 2:
                    let getContainer2 = document.getElementById("zubehoer");
                    getContainer2.appendChild(divBowls);
                    break;
                default:
                    break;
            }
            //Teilaufgabe 1:
            function kaufenButton(_event) {
                produktZähler++;
                console.log(produktZähler);
                saveInLocalStorage(this);
                preisBerechnen += parseFloat(_event.target?.getAttribute("preis"));
                console.log(preisBerechnen.toFixed(2));
                if (produktZähler == 1) {
                    document.getElementById("warenkorbZaehler")?.appendChild(anzahlAnzeigen);
                }
                anzahlAnzeigen.innerHTML = "" + produktZähler;
                document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);
            }
            //Teilaufgabe 2:
            function handleCategoryClick(_click) {
                switch (this.getAttribute("id")) {
                    case "bowlsB":
                        bowls();
                        break;
                    case "zubehoerB":
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
            let bowlsAnzeigen = document.querySelector("#bowlsB");
            bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));
            let zubehoerAnzeigen = document.querySelector("#zubehoerB");
            zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map