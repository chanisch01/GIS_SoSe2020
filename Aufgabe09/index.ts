namespace Aufgabe9 {

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", clickHTML);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", clickJSON);

    let formData: FormData;

    async function clickHTML(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwortText: string = await antwort.text();
        console.log(antwortText);

        let serverAntwort: HTMLElement = <HTMLElement>document.getElementById("ausgabeServer");
        serverAntwort.innerHTML = antwortText;
    }

    async function clickJSON(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwortText: string = await antwort.json();
        console.log(antwortText);

    }
}