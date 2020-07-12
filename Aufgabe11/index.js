"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonAbschicken = document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);
    let buttonErhalten = document.getElementById("datenErhalten");
    buttonErhalten.addEventListener("click", clickErhalten);
    let htmltext = document.getElementById("text");
    async function clickAbschicken() {
        let form = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com/";
        let query = new URLSearchParams(form);
        url += "/abschicken" + "?" + query.toString();
        await fetch(url);
        console.log("Abschicken");
    }
    async function clickErhalten() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://csgis2020.herokuapp.com";
        url += "/erhalten" + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let response1 = await response.text();
        document.getElementById("server").innerHTML = response1;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map