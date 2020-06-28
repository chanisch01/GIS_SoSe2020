"use strict";
var Aufgabe09;
(function (Aufgabe09) {

    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", clickHTML);

    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", clickJSON);
    let formData;
    async function clickHTML() {
        formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let antwort = await fetch(url);
        let antwortText = await antwort.text();
        console.log(antwortText);
        let serverAntwort = document.getElementById("ausgabeServer");
        serverAntwort.innerHTML = antwortText;
    }
    async function clickJSON() {
        formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwortText = await antwort.json();
        console.log(antwortText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=index.js.map