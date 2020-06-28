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
        console.log("Benutzername " + formData.get("name"));
        console.log("Passwort " + formData.get("passwort"));
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=index.js.map