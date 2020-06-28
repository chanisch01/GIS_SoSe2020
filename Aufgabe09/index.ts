namespace Aufgabe09 {

    let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", handleButtonHtml);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handleButtonJSON);

    let server: HTMLElement = <HTMLElement>document.getElementById("server");


    async function handleButtonHtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();


        server.innerHTML = responseText;

    }
    async function handleButtonJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
        let responseJson: JSON = JSON.parse(responseText);

        console.log(responseJson);
        server.innerHTML = responseText;
        console.log(server);
    }
}