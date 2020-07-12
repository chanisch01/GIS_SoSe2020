namespace Aufgabe11 {
    let formData: FormData;

    let buttonsenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button1");
    buttonsenden.addEventListener("click", buttonclicksenden);

    let buttonbekommen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
    buttonbekommen.addEventListener("click", buttonclickbekommen);

   

    let htmltext: HTMLElement = <HTMLElement>document.getElementById("text");


    async function buttonclicksenden(): Promise<void> {
        formData = new FormData(document.forms[0]);
     
        let url: string = "https://csgis2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/Daten senden" + "?" + query.toString();
        await fetch(url);
        
        

    }


    async function buttonclickbekommen(): Promise<void> {
        let url: string = "https://csgis2020.herokuapp.com";
    
        url = url + "/Daten bekommen";
      
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        htmltext.innerHTML = responseString;
        console.log("Daten bekommen");
    }


}