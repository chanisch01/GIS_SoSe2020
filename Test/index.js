"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonSignInJson = document.getElementById("ausgeben");
    buttonSignInJson.addEventListener("click", handleClickRetrieve);
    let buttonSignInHtml = document.getElementById("absenden");
    buttonSignInHtml.addEventListener("click", handleClickStore);
    let ausgabe = document.getElementById("Ausgabefeld");
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    ausgabe.setAttribute("style", "display: none");
    let formData;
    /* let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    buttonActionHtml.addEventListener("click", handleClickStore);
    let buttonActionJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("show");
    buttonActionJson.addEventListener("click", handleClickRetrieve); */
    async function handleClickRetrieve() {
        //let url: string = "http://localhost:8100/" + _format;
        let url = "https://soseeasypass.herokuapp.com";
        url += "/output";
        let response = await fetch(url);
        console.log(response);
        let responseText = await response.json();
        let ausgabe = document.getElementById("Ausgabefeld");
        ausgabe.setAttribute("style", "display: block");
        ausgabe.innerHTML = responseText;
        console.log(responseText);
    }
    async function handleClickStore() {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/";
        let url = "https://soseeasypass.herokuapp.com";
        url += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        //formular.reset(); aaaabb
        await fetch(url);
    }
    console.log("Fertig geladen");
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=index.js.map