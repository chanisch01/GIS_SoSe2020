"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    let button = document.getElementById("button");
    button.addEventListener("click", handle);
    async function handle() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        console.log("Vorname " + formData.get("vname"));
        console.log("Nachname " + formData.get("nname"));
        console.log("Telefon" + formData.get("telefon"));
        console.log("E-Mail " + formData.get("e-mail"));
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=index.js.map