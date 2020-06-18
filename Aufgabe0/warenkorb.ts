namespace Aufgabe07 {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector("#angeboteliste");
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
            let articleJson: string = <string>localStorage.getItem(key);

            let item: Angebote = <Angebote>JSON.parse(articleJson);

            gesamtPreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }

    function createDynamicContent(_inputArticle: Angebote): void {

        //Div erstellen

        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);

        //Bild

        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = _inputArticle.img;
        newDiv.appendChild(imgElement);
        console.log(imgElement);

        //Name

        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);

        //Beschreibung

        let beschreibungAngebote: HTMLParagraphElement = document.createElement("p");
        beschreibungAngebote.innerHTML = _inputArticle.beschreibung;
        newDiv.appendChild(beschreibungAngebote);

        //Preis

        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);

        //Button

        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }

    function handleRemoveArticle(this: Angebote, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }

    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }

    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}

