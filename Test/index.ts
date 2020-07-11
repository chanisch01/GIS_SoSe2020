namespace Aufgabe11 {

    let button1: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button1");
    button1.addEventListener("click", clickButton1);

    let storebttn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("store");
    storebttn.addEventListener("click", clickButton2);
    
    
    async function clickButton1 (_event: Event): Promise<void> {
        let url: string = "https://csgis2020.herokuapp.com/";
        url += "button1";
        
        let response: Response = await fetch(url);
        let responseString: string = await response.text();

       
        document.getElementById("Inhaalt")!.innerHTML = responseString;
    }

    async function clickButton2(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://csgis2020.herokuapp.com/";
      
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "button2" + "?" + query.toString();      

        await fetch(url); 
              
    
    }
}