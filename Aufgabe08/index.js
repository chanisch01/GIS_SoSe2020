"use strict";
var Aufgabe08;
(function (Aufgabe08) {
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
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=index.js.map