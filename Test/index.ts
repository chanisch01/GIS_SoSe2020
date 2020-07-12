namespace Aufgabe11 {

    let btnPush: HTMLButtonElement = <HTMLButtonElement>document.getElementById("push");
    btnPush.addEventListener("click", push);
    let btnPull: HTMLButtonElement = <HTMLButtonElement>document.getElementById("pull");
    btnPull.addEventListener("click", pull);
    let answerField: HTMLDivElement = <HTMLDivElement>document.getElementById("ausgabe");

    async function push(): Promise<void> {
        console.log("pushing to the DB");
       
        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let url: string = "https://csgis2020.herokuapp.com";
        url += "/push?" + query.toString();
       
        await fetch(url);
        
    }
    async function pull(): Promise<void> {
        let url: string = "https://csgis2020.herokuapp.com/pull";
        let serverResponse: Response = await fetch(url);
        let stringResponse: string = await serverResponse.text();
        answerField.innerHTML = stringResponse;
    }
}