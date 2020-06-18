"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtpreis;
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        pGesamtpreis.addEventListener("click", removeAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtpreis = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let angeboteJSON = localStorage.getItem(key);
            let item = JSON.parse(angeboteJSON);
            gesamtpreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }
    function createDynamicContent(_inputAngebote) {
        //Div erstellen
        let divBowls = document.createElement("div");
        contentDiv.appendChild(divBowls);
        divBowls.id = _inputAngebote.name;
        console.log(divBowls.id);
        //Bilder
        let imgBowls = document.createElement("img");
        imgBowls.src = _inputAngebote.img;
        divBowls.appendChild(imgBowls);
        console.log(imgBowls);
        //Name
        let name = document.createElement("p");
        name.innerHTML = _inputAngebote.name;
        divBowls.appendChild(name);
        //Beschreibung
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = _inputAngebote.beschreibung;
        divBowls.appendChild(beschreibung);
        //Preis
        let price = document.createElement("p");
        price.innerHTML = "" + _inputAngebote.preis;
        divBowls.setAttribute("preis", price.innerHTML);
        divBowls.appendChild(price);
        //Button
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        divBowls.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputAngebote));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtpreis.toFixed(2);
    }
    function removeAll(_event) {
        localStorage.clear();
        update();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map