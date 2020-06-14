"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //Bowls
    let bowl1 = {
        bild: "bowl1.jpg",
        name: "Der Snack zwischendurch",
        beschreibung: "Bowl mit Kiwi und Mango-Mus",
        preis: 6.99,
        kategorie: "bowl"
    };
    let bowl2 = {
        bild: "bowl2.jpg",
        name: "Gesunder Start in den Tag",
        beschreibung: "Pudding mit Chia Samen",
        preis: 5.99,
        kategorie: "bowl"
    };
    let bowl3 = {
        bild: "bowl3.jpg",
        name: "Der Sattmacher",
        beschreibung: "Leckeres Oatmeal mit Rosinen",
        preis: 7.99,
        kategorie: "bowl"
    };
    let bowl4 = {
        bild: "bowl4.jpg",
        name: "Der Klassiker",
        beschreibung: "Tofu mit leckerem Gemüse",
        preis: 8.99,
        kategorie: "bowl"
    };
    let bowl5 = {
        bild: "bowl5.jpg",
        name: "Deftiges Abendessen",
        beschreibung: "Hacklfeisch Bowl mit Käse und Ei",
        preis: 9.99,
        kategorie: "bowl"
    };
    let bowl6 = {
        bild: "bowl6.jpg",
        name: "Nährstoff-Bombe",
        beschreibung: "Süßkartoffeln mit Gemüse und Dip",
        preis: 10.99,
        kategorie: "bowl"
    };
    //Zubehoer
    let zubehoer1 = {
        bild: "zubehoer1.jpg",
        name: "Smoothie Mixer",
        beschreibung: "Ein Muss in der Küche",
        preis: 20.99,
        kategorie: "zubehoer"
    };
    let zubehoer2 = {
        bild: "zubehoer2.jpg",
        name: "Messer",
        beschreibung: "Ein Muss in der Küche",
        preis: 23.99,
        kategorie: "zubehoer"
    };
    let zubehoer3 = {
        bild: "zubehoer3.jpg",
        name: "6 Einweggläser",
        beschreibung: "Ein Muss in der Küche",
        preis: 6.99,
        kategorie: "zubehoer"
    };
    let zubehoer4 = {
        bild: "zubehoer4.jpg",
        name: "4 Kochlöffel",
        beschreibung: "Ein Muss in der Küche",
        preis: 2.99,
        kategorie: "zubehoer"
    };
    let zubehoer5 = {
        bild: "zubehoer5.jpg",
        name: "Schüssel",
        beschreibung: "Ein Muss in der Küche",
        preis: 5.99,
        kategorie: "zubehoer"
    };
    let zubehoer6 = {
        bild: "zubehoer6.jpg",
        name: "2 Gläser",
        beschreibung: "Ein Muss in der Küche",
        preis: 5.99,
        kategorie: "zubehoer"
    };
    let angebote = [bowl1, bowl2, bowl3, bowl4, bowl5, bowl6, zubehoer1, zubehoer2, zubehoer3, zubehoer4, zubehoer5, zubehoer6];
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
//neue Variable erstellen und verlinken
let bowlsAnzeigen = document.querySelector("#bowlsButton");
bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));
let zubehoerAnzeigen = document.querySelector("#zubehoerButton");
zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));

})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map