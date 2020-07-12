"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonSenden = document.getElementById("buttonSenden");
    buttonSenden.addEventListener("click", clickSenden);
    let buttonBekommen = document.getElementById("buttonBekommen");
    buttonBekommen.addEventListener("click", clickBekommen);
    let server = document.getElementById("server");
    async function clickSenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        server.innerHTML = responseText;
    }
    async function clickBekommen() {
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
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map