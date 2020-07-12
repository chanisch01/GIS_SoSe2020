"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let buttonabschicken = document.getElementById("abschicken");
    buttonabschicken.addEventListener("click", buttonclickabschicken);
    let buttonerhalten = document.getElementById("erhalten");
    buttonerhalten.addEventListener("click", buttonclickerhalten);
    let htmltext = document.getElementById("text");
    async function buttonclickabschicken() {
        formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "/abschicken" + "?" + query.toString();
        await fetch(url);
    }
    async function buttonclickerhalten() {
        let url = "https://csgis2020/.herokuapp.com";
        url = url + "/erhalten";
        let response = await fetch(url);
        let responseString = await response.text();
        htmltext.innerHTML = responseString;
        console.log("erhalten");
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map