namespace Aufgabe08 {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    document.getElementById("button").addEventListener("click", handleClick);

    async function handleClick(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://chani01gis.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(url);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
}
