"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let btnPush = document.getElementById("push");
    btnPush.addEventListener("click", push);
    let btnPull = document.getElementById("pull");
    btnPull.addEventListener("click", pull);
    let answerField = document.getElementById("ausgabe");
    async function push() {
        console.log("pushing to the DB");
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let url = "https://csgis2020.herokuapp.com";
        url += "/push?" + query.toString();
        await fetch(url);
    }
    async function pull() {
        let url = "https://csgis2020.herokuapp.com/pull";
        let serverResponse = await fetch(url);
        let stringResponse = await serverResponse.text();
        answerField.innerHTML = stringResponse;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map