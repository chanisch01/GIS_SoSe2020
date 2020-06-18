"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector("#warenliste");
        pGesamtpreis = document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let angeboteJson = localStorage.getItem(key);
            let item = JSON.parse(angeboteJson);
            gesamtPreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }
    function createDynamicContent(_inputAngebote) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputAngebote.name;
        console.log(newDiv.id);
        //Bild
        let imgAngebote = document.createElement("img");
        imgAngebote.src = _inputAngebote.img;
        newDiv.appendChild(imgAngebote);
        console.log(imgAngebote);
        //Name
        let name = document.createElement("p");
        name.innerHTML = _inputAngebote.name;
        newDiv.appendChild(name);
        //Beschreibung
        let beschreibungAngebote = document.createElement("p");
        beschreibungAngebote.innerHTML = _inputAngebote.beschreibung;
        newDiv.appendChild(beschreibungAngebote);
        //Preis
        let price = document.createElement("p");
        price.innerHTML = "" + _inputAngebote.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        //Button
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputAngebote));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2);
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map