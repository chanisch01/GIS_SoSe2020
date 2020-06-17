namespace Aufgabe07 {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtpreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        pGesamtpreis.addEventListener("click", removeAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtpreis = 0;
        for (let i: number = 0; i < localStorage.length; i++) {
            let key: string = <string>localStorage.key(i);
            let angeboteJSON: string = <string>localStorage.getItem(key);

            let item: Angebote = <Angebote>JSON.parse(angeboteJSON);

            gesamtpreis += item.preis;
            createDynamicContent(item);
        }
        setGesamtpreis();
    }

    function createDynamicContent(_inputAngebote: Angebote): void {

        //Div erstellen
        let divBowls: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(divBowls);
        divBowls.id = _inputAngebote.name;
        console.log(divBowls.id);

        //Bilder
        let imgBowls: HTMLImageElement = document.createElement("img");
        imgBowls.src = _inputAngebote.img;
        divBowls.appendChild(imgBowls);
        console.log(imgBowls);

        //Name
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputAngebote.name;
        divBowls.appendChild(name);

        //Beschreibung
        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = _inputAngebote.beschreibung;
        divBowls.appendChild(beschreibung);

        //Preis
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputAngebote.preis;
        divBowls.setAttribute("preis", price.innerHTML);
        divBowls.appendChild(price);

        //Button
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        divBowls.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputAngebote));
    }
    function handleRemoveArticle(this: Angebote, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtpreis.toFixed(2);
    }

    function removeAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}
