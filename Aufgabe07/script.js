"use strict";
var Aufgabe07;
(function (Aufgabe07) {

    window.addEventListener("load", init);
    
    let angebote = [];

    function init(_event) {
        communicate("Angebote.json");
        buildNav();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        angebote = await response.json();
        buildArticles(angebote);
        console.log("Response", response);
    }
    function buildArticles(_angebote) {
    for (let i = 0; i < angebote.length; i++) {
        //div erstellen und anlegen um drauf zugreifen zu können 
        let newDiv = document.createElement("div");
        newDiv.id = "produkt" + i;
        document.getElementById("bowls")?.appendChild(newDiv);
        //Bild anlegen um es zu erkennen 
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
    }

//Teilaufgabe 1
let gesamtPreis = 0;
let zahl = 0;
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
function buildNav() {
//neue Variable erstellen und verlinken
let bowlsAnzeigen = document.querySelector("#bowlsButton");
bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));
let zubehoerAnzeigen = document.querySelector("#zubehoerButton");
zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));

}
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map