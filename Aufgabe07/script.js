"use strict";
var Aufgabe07;
(function (Aufgabe07) {


    let produktZaehler = 0;
    let gesamtPreis = 0;

    let warenkorb = document.createElement("div");

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

            //div erstellen 
            let newDiv = document.createElement("div");
            newDiv.id = "produkt" + i;
            document.getElementById("bowls")?.appendChild(newDiv);


            //Bild anlegen
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
            kaufen.addEventListener("click", handleWarenkorb);
            kaufen.setAttribute("preis", angebote[i].preis.toString());


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


    //Teilaufgabe 1


    function handleWarenkorb(_event) {

        if (produktZaehler >= 0) {
            document.getElementById("warenkorbZaehler")?.appendChild(warenkorb);
            warenkorb.innerHTML = "" + produktZaehler;
            document.getElementById("anzahlAnzeigen")?.appendChild(warenkorb);
        }

        produktZaehler++;
        warenkorb.innerHTML = produktZaehler + "";
        console.log(produktZähler);


        saveInLocalStorage(this);
        gesamtPreis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(gesamtPreis.toFixed(2));

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
            (document.getElementById("bowls")).style.display = "inline-grid";
            (document.getElementById("zubehoer")).style.display = "none";

        }

        function zubehoer() {
            (document.getElementById("zubehoer")).style.display = "inline-grid";
            (document.getElementById("bowls")).style.display = "none";
        }
    }

    let bowlsAnzeigen = document.querySelector("#bowlsButton");
    bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));

    let zubehoerAnzeigen = document.querySelector("#zubehoerButton");
    zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));
}
}) (Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map