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
            let articlesJSON: string = <string>localStorage.getItem(key);

            let item: Angebote = <Angebote>JSON.parse(articlesJSON);

            gesamtpreis += item.preis;
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

        //IMG IN DIV PACKEN
        let imgAngebote: HTMLImageElement = document.createElement("img");
        imgAngebote.src =  _inputArticle.img;
        document.getElementById("produkt")?.appendChild(imgAngebote);
        console.log(imgAngebote);

        //NAME
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);

        //PREIS
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);

        //BESCHREIBUNG
        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = _inputArticle.beschreibung;
        newDiv.appendChild(beschreibung);

        //BUTTON
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
        pGesamtpreis.innerHTML = "" + gesamtpreis.toFixed(2);
    }

    function removeAll(_event: Event): void {
        localStorage.clear();
        update();
        }
}
