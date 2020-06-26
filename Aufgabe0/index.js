"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    document.getElementById("submitBtn")?.addEventListener("click", submit);
    async function submit() {
        let formData = new FormData(document.forms[0]);
        let url = "https://testgisss2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let serverResponse = await fetch(url);
        let responseText = await serverResponse.text();
        console.log("Ich habe das zurück bekommen:", responseText);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=index.js.map