"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button = document.getElementById("button");
    button?.addEventListener("click", handle);
    async function handle() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        console.log("Vorname" + formData.get("vname"));
        console.log("Nachname" + formData.get("nname"));
        console.log("Telefon" + formData.get("telefon"));
        console.log("E-mail" + formData.get("e-mail"));
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=index.js.map