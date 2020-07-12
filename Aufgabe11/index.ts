namespace Aufgabe11 {

let buttonSenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Senden");
buttonSenden.addEventListener("click", clickSenden);

let buttonBekommen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Bekommen");
buttonBekommen.addEventListener("click", clickBekommen);

async function clickSenden(): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://csgis2020.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    await fetch(url);
    console.log("Anlegen");
}

async function clickBekommen(): Promise<void> {

    let url: string = "https://csgis2020.herokuapp.com";
    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
}
}