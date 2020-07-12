"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let buttonHTML = document.getElementById("send");
    buttonHTML.addEventListener("click", clickAbsenden);
    let buttonJSON = document.getElementById("get");
    buttonJSON.addEventListener("click", clickAnfordern);
    let htmltext = document.getElementById("text");
    async function clickAbsenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/absenden" + "?" + query.toString();
        await fetch(url);
    }
    async function clickAnfordern() {
        let url = "https://csgis2020.herokuapp.com";
        url = url + "/get";
        let response = await fetch(url);
        let responseText = await response.text();
        htmltext.innerHTML = responseText;
        console.log("holen");
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map