namespace Aufgabe11 {

    let formData: FormData;

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    buttonHTML.addEventListener("click", clickAbsenden);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    buttonJSON.addEventListener("click", clickAnfordern);

    let htmltext: HTMLElement = <HTMLElement>document.getElementById("text");
   
    async function clickAbsenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/absenden" + "?" + query.toString();
        await fetch(url);
    }

    async function clickAnfordern(): Promise<void> {
        
        let url: string = "https://csgis2020.herokuapp.com";
        url = url + "/get";
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        htmltext.innerHTML = responseText;
        console.log("holen");
    }
}