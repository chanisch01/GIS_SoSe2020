"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonSenden = document.getElementById("Senden");
    buttonSenden.addEventListener("click", clickSenden);
    let buttonBekommen = document.getElementById("Bekommen");
    buttonBekommen.addEventListener("click", clickBekommen);
    async function clickSenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        console.log("Anlegen");
    }
    async function clickBekommen() {
        let url = "https://csgis2020.herokuapp.com";
        let response = await fetch(url);
        let responseText = await response.text();
        document.getElementById("server").innerHTML = responseText;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map