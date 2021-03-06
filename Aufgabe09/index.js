"use strict";
var Aufgabe9;
(function (Aufgabe9) {
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", clickHTML);
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", clickJSON);
    let server = document.getElementById("server");
    async function clickHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        server.innerHTML = responseText;
    }
    async function clickJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        let responseJSON = JSON.parse(responseText);
        console.log(responseJSON);
        server.innerHTML = responseText;
        console.log(server);
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=index.js.map