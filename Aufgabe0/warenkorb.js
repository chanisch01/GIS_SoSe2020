"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector(".artikelliste");
        pGesamtpreis = document.querySelector("#gesamtpreis");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let angebotejson = localStorage.getItem(key);
            let item = JSON.parse(angebotejson);
            gesamtPreis += item.preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }
    function erstelleInhalt(_inputAngebote) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputAngebote.name;
        console.log(newDiv.id);
        //Bild 
        let imgElement = document.createElement("img");
        newDiv.appendChild(imgElement);
        imgElement.src = _inputAngebote.img;
        console.log(imgElement);
        //Name
        let name = document.createElement("p");
        newDiv.appendChild(name);
        name.innerHTML = _inputAngebote.name;
        //Preis 
        let price = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputAngebote.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        //Button
        let kaufen = document.createElement("button");
        newDiv.appendChild(kaufen);
        kaufen.innerHTML = "Löschen";
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputAngebote));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map