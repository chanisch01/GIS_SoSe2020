namespace Aufgabe11 {
    let formData: FormData;
    let buttonsenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("speichern");
    buttonsenden.addEventListener("click", buttonclicksenden);

    let buttonholen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("holen");
    buttonholen.addEventListener("click", buttonclickholen);

   

    let htmltext: HTMLElement = <HTMLElement>document.getElementById("text");


    async function buttonclicksenden(): Promise<void> {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://gissommersemester2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/senden" + "?" + query.toString();
        await fetch(url);
        
        

    }


    async function buttonclickholen(): Promise<void> {
        let url: string = "https://gissommersemester2020.herokuapp.com";
        
        //let url: string = "http://localhost:8100";
        url = url + "/holen";
        //BUGS gefixt
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        htmltext.innerHTML = responseString;
        console.log("holen");
    }


}