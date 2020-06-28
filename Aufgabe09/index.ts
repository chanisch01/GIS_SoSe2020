namespace Aufgabe9 {

    let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", handleButtonHtml);

    let buttonJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJson");
    buttonJson.addEventListener("click", handleButtonJson);

    let server: HTMLElement = <HTMLElement>document.getElementById("server");


    async function handleButtonHtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);

        let serverAntwort: HTMLElement = <HTMLElement> document.getElementById("ausgabeServer");
        serverAntwort.innerHTML = responseText;

 }
    async function handleButtonJson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();

        console.log(responseText);
        
    }
}