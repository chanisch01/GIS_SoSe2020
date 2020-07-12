namespace Aufgabe11 {

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDatenbank");
    buttonHTML.addEventListener("click", absenden);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", anfordern);


    async function absenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/absenden" + "?" + query.toString();
        await fetch(url);
        console.log("Absenden");
    }

    async function anfordern(): Promise<void> {
        
        let url: string = "https://csgis2020.herokuapp.com";
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        document.getElementById("text")!.innerHTML = responseText;
    }
}