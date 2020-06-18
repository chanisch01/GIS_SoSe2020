namespace Aufgabe07 {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector("#warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let i: number = 0; i < localStorage.length; i++) {
            let key: string = <string>localStorage.key(i);
            let angeboteJson: string = <string>localStorage.getItem(key);

            let item: Angebote = <Angebote>JSON.parse(angeboteJson);

            gesamtPreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }

    function createDynamicContent(_inputAngebote: Angebote): void {

        //Div erstellen

        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputAngebote.name;
        console.log(newDiv.id);

        //Bild

        let imgAngebote: HTMLImageElement = document.createElement("img");
        imgAngebote.src = _inputAngebote.img;
        newDiv.appendChild(imgAngebote);
        console.log(imgAngebote);

        //Name

        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputAngebote.name;
        newDiv.appendChild(name);

        //Beschreibung

        let beschreibungAngebote: HTMLParagraphElement = document.createElement("p");
        beschreibungAngebote.innerHTML = _inputAngebote.beschreibung;
        newDiv.appendChild(beschreibungAngebote);

        //Preis

        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputAngebote.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);

        //Button

        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputAngebote));
    }

    function handleRemoveArticle(this: Angebote, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }

    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2);
    }

    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}

