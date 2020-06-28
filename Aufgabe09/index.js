"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handleButtonHTML);

    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handleButtonJSON);

    let server = document.getElementById("server");

    async function handleButtonHtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        server.innerHTML = responseText;
    }
    async function handleButtonJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        let responseJson = JSON.parse(responseText);
        console.log(responseJson);
        server.innerHTML = responseText;
        console.log(server);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=index.js.map


