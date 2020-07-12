"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let buttonsenden = document.getElementById("speichern");
    buttonsenden.addEventListener("click", buttonclicksenden);
    let buttonholen = document.getElementById("holen");
    buttonholen.addEventListener("click", buttonclickholen);
    let htmltext = document.getElementById("text");
    async function buttonclicksenden() {
        formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch(url);
    }
    async function buttonclickholen() {
        let url = "https://csgis2020.herokuapp.com";
        url = url + "/holen";
        let response = await fetch(url);
        let responseString = await response.text();
        htmltext.innerHTML = responseString;
        console.log("holen");
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map