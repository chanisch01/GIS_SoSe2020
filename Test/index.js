"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonAbsenden = document.getElementById("Absenden");
    buttonAbsenden.addEventListener("click", buttonclickAbsenden);
    let buttonBekommen = document.getElementById("Bekommen");
    buttonBekommen.addEventListener("click", buttonclickBekommen);
    let server = document.getElementById("server");
    async function buttonclickAbsenden() {
        console.log("An Datenbank");
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let url = "https://csgis2020.herokuapp.com";
        url += "/absenden?" + query.toString();
        await fetch(url);
    }
    async function buttonclickBekommen() {
        let url = "https://csgis2020.herokuapp.com/pull";
        let serverResponse = await fetch(url);
        let stringResponse = await serverResponse.text();
        server.innerHTML = stringResponse;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map