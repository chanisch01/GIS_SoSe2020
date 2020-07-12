namespace Aufgabe11 {

let buttonSenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonSenden");
buttonSenden.addEventListener("click", clickSenden);

let buttonBekommen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonBekommen");
buttonBekommen.addEventListener("click", clickBekommen);

let server: HTMLElement = <HTMLElement>document.getElementById("server");

async function clickSenden(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://csgis2020.herokuapp.com";
    url += "/html";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();

    let response: Response = await fetch(url);
    let responseText: string = await response.text();


    server.innerHTML = responseText;

}
async function clickBekommen(): Promise<void> {
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