"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let buttonsenden = document.getElementById("button1");
    buttonsenden.addEventListener("click", buttonclicksenden);
    let buttonbekommen = document.getElementById("button2");
    buttonbekommen.addEventListener("click", buttonclickbekommen);
    let htmltext = document.getElementById("text");
    async function buttonclicksenden() {
        formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/Daten senden" + "?" + query.toString();
        await fetch(url);
    }
    async function buttonclickbekommen() {
        let url = "https://csgis2020.herokuapp.com";
        url = url + "/Daten bekommen";
        let response = await fetch(url);
        let responseString = await response.text();
        htmltext.innerHTML = responseString;
        console.log("Daten bekommen");
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map