 namespace Aufgabe08 {
    
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
        button?.addEventListener("click", handle);
    
    
        async function handle(): Promise<void> {
    
            let formData: FormData = new FormData(document.forms[0]);
            let url: string = "https://csgis2020.herokuapp.com/";
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            url = url + "?" + query.toString();
            console.log(url);
    
            console.log("Benutzername " + formData.get("name"));
            console.log("Passwort " + formData.get("passwort"));
    
        }
    }
