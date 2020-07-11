"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let button1 = document.getElementById("button1");
    button1.addEventListener("click", clickButton1);
    let storebttn = document.getElementById("store");
    storebttn.addEventListener("click", clickButton2);
    async function clickButton1(_event) {
        let url = "https://csgis2020.herokuapp.com/";
        url += "button1";
        let response = await fetch(url);
        let responseString = await response.text();
        document.getElementById("Inhaalt").innerHTML = responseString;
    }
    async function clickButton2(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://csgis2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += "button2" + "?" + query.toString();
        await fetch(url);
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map