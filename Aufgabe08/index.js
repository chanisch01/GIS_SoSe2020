"use strict";
var Aufgabe08;
(function (Aufgabe08) {

    let button = document.getElementById("button");
    button.addEventListener("click", addUrl);
    
    async function addUrl() {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let serverResponse = await fetch(url);
        let responseText = await serverResponse.text();
        console.log("Ich habe das zurück bekommen:", responseText);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=index.js.map