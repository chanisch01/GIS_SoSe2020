"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonHTML = document.getElementById("buttonDatenbank");
    buttonHTML.addEventListener("click", absenden);
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", anfordern);
    async function absenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/absenden" + "?" + query.toString();
        await fetch(url);
        console.log("Absenden");
    }
    async function anfordern() {
        let url = "https://csgis2020.herokuapp.com";
        let response = await fetch(url);
        let responseText = await response.text();
        document.getElementById("output").innerHTML = responseText;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map