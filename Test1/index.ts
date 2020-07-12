namespace Aufgabe11 {
    let formData: FormData;

    let buttonabsenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("absenden");
    buttonabsenden.addEventListener("click", buttonclickabsenden);

    let buttonbekommen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bekommen");
    buttonbekommen.addEventListener("click", buttonclickbekommen);

   

    let htmltext: HTMLElement = <HTMLElement>document.getElementById("text");


    async function buttonclickabsenden(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/absenden" + "?" + query.toString();
        await fetch(url);
        
        

    }


    async function buttonclickbekommen(): Promise<void> {
        let url: string = "https://csgis2020.herokuapp.com";
        url = url + "/bekommen";
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        htmltext.innerHTML = responseString;
        console.log("Daten bekommen");
    }


}