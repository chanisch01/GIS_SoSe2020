namespace Aufgabe11 {

    let buttonAbsenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Absenden");
    buttonAbsenden.addEventListener("click", buttonclickAbsenden);
   
    let buttonBekommen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Bekommen");
    buttonBekommen.addEventListener("click", buttonclickBekommen);
   
    let server: HTMLElement = <HTMLElement>document.getElementById("server");

    async function buttonclickAbsenden(): Promise<void> {
        console.log("An Datenbank");
       
        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/absenden?" + query.toString();
       
        await fetch(url);
        
    }
    async function buttonclickBekommen(): Promise<void> {
        let url: string = "https://csgis2020.herokuapp.com/pull";
        
        let serverResponse: Response = await fetch(url);
        let stringResponse: string = await serverResponse.text();
        server.innerHTML = stringResponse;
    }
}