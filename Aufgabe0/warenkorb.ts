namespace Aufgabe07 {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let angebotejson: string = <string>localStorage.getItem(key);

            let item: Angebote = <Angebote>JSON.parse(angebotejson);

            gesamtPreis += item.preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }


    function erstelleInhalt(_inputAngebote: Angebote): void {

        //Div erstellen

        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputAngebote.name;
        console.log(newDiv.id);

        //Bild 

        let imgElement: HTMLImageElement = document.createElement("img");
        newDiv.appendChild(imgElement);
        imgElement.src = _inputAngebote.img;
        console.log(imgElement);

        //Name

        let name: HTMLParagraphElement = document.createElement("p");
        newDiv.appendChild(name);
        name.innerHTML = _inputAngebote.name;

        //Preis 

        let price: HTMLParagraphElement = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputAngebote.preis;
        newDiv.setAttribute("preis", price.innerHTML);
    }
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }


    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}

