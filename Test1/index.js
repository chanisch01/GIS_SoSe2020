"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let buttonabsenden = document.getElementById("absenden");
    buttonabsenden.addEventListener("click", buttonclickabsenden);
    let buttonbekommen = document.getElementById("bekommen");
    buttonbekommen.addEventListener("click", buttonclickbekommen);
    let htmltext = document.getElementById("text");
    async function buttonclickabsenden() {
        formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/absenden" + "?" + query.toString();
        await fetch(url);
    }
    async function buttonclickbekommen() {
        let url = "https://csgis2020.herokuapp.com";
        url = url + "/bekommen";
        let response = await fetch(url);
        let responseString = await response.text();
        htmltext.innerHTML = responseString;
        console.log("Daten bekommen");
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map