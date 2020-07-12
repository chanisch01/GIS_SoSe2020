namespace Aufgabe11 {

    let formData: FormData;

    let buttonabschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("abschicken");
    buttonabschicken.addEventListener("click", buttonclickabschicken);

    let buttonerhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("erhalten");
    buttonerhalten.addEventListener("click", buttonclickerhalten);

    let htmltext: HTMLElement = <HTMLElement>document.getElementById("text");


    async function buttonclickabschicken(): Promise<void> {
        formData = new FormData(document.forms[0]);

        let url: string = "https://csgis2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/abschicken" + "?" + query.toString();
        await fetch(url);
    }


    async function buttonclickerhalten(): Promise<void> {
        let url: string = "https://csgis2020/.herokuapp.com";
        url = url + "/erhalten";

        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        htmltext.innerHTML = responseString;
        console.log("erhalten");
    }


}