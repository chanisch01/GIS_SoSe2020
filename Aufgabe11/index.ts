namespace Aufgabe11 {

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Anlegen");
    buttonHTML.addEventListener("click", clickHTML);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Ausgeben");
    buttonJSON.addEventListener("click", clickJSON);

    let server: HTMLElement = <HTMLElement>document.getElementById("server");

    async function clickHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();


        server.innerHTML = responseText;

    }
    async function clickJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
        let responseJSON: JSON = JSON.parse(responseText);

        console.log(responseJSON);
        server.innerHTML = responseText;
        console.log(server);
    }
}