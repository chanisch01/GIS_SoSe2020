namespace Aufgabe09 {
   
        let btnHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
        btnHtml.addEventListener("click", clickHtml);
    
        let btnJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJson");
        btnJson.addEventListener("click", clickJson);
    
        let server: HTMLElement = <HTMLElement>document.getElementById("server");
    
    
        async function clickHtml(): Promise<void> {
            let formData: FormData = new FormData(document.forms[0]);
            let url: string = "https://csgis2020.herokuapp.com";
            url += "/html";
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            url = url + "?" + query.toString();
    
            let response: Response = await fetch(url);
            let responseText: string = await response.text();
    
    
            server.innerHTML = responseText;
    
    
    
        }
        async function clickJson(): Promise<void> {
            let formData: FormData = new FormData(document.forms[0]);
            let url: string = "https://csgis2020.herokuapp.com";
            url += "/json";
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            url = url + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseText: string = await response.text();
            console.log(responseText);
            let responseJson: JSON = JSON.parse(responseText);
    
            console.log(responseJson);
            server.innerHTML = responseText;
            console.log(server);
        }
    }