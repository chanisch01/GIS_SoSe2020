namespace Aufgabe11 {

    let buttonAbsenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Absenden");
    buttonAbsenden.addEventListener("click", buttonclickabsenden);

    let buttonBekommen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Bekommen");
    buttonBekommen.addEventListener("click", buttonclickbekommen);

    let server: HTMLElement = <HTMLElement>document.getElementById("server");

    async function buttonclickabsenden(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let url: string = "https://csgis2020.herokuapp.com";
        url = url + "/absenden" + "?" + query.toString();
        await fetch(url);

    }
    async function buttonclickbekommen(): Promise<void> {
        let url: string = "https://csgis2020.herokuapp.com";
        url = url + "/bekommen";
        let serverResponse: Response = await fetch(url);
        let stringResponse: string = await serverResponse.text();
        server.innerHTML = stringResponse;

        console.log("bekommen");
    }
}