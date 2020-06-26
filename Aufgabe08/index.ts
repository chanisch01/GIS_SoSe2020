namespace Aufgabe08 {


    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", handleClick);

    async function handleClick(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "https://csgis2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let serverResponse: Response = await fetch(url);
        let responseText: string = await serverResponse.text();
        console.log("Ich habe das zurück bekommen:", responseText);
    }

}