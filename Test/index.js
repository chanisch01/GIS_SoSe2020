"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonAbsenden = document.getElementById("Absenden");
    buttonAbsenden.addEventListener("click", buttonclickabsenden);
    let buttonBekommen = document.getElementById("Bekommen");
    buttonBekommen.addEventListener("click", buttonclickbekommen);
    let server = document.getElementById("server");
    async function buttonclickabsenden() {
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let url = "https://csgis2020.herokuapp.com";
        url = url + "/absenden" + "?" + query.toString();
        await fetch(url);
    }
    async function buttonclickbekommen() {
        let url = "https://csgis2020.herokuapp.com";
        url = url + "/bekommen";
        let serverResponse = await fetch(url);
        let stringResponse = await serverResponse.text();
        server.innerHTML = stringResponse;
        console.log("bekommen");
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map