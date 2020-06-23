"use strict";
var Aufgabe8;
(function (Aufgabe08) {

    let button = document.getElementById("button");
    button.addEventListener("click", handleClick);

    async function handleClick() {

        let formData = new FormData(document.forms[0]);
        let url = "https://chani01gis.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
    })(Aufgabe08 || (Aufgabe08 = {}));
   //# sourceMappingURL=index.js.map