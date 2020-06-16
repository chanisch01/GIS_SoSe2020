namespace Aufgabe07 {


    let produktZähler: number = 0;
    let preisBerechnen: number = 0;

    let zahlAnzeigen: HTMLParagraphElement = document.createElement("p");
    let anzahlAnzeigen: HTMLDivElement = document.createElement("div");
    anzahlAnzeigen.id = "anzahlAnzeigen";

    let angebote: Angebote[] = [];
    window.addEventListener("load", init);

    export interface Angebote {
        img: string;
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorien: string;
    }

    function init(): void {
        let url: string = "data.json";
        communicate(url);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        angebote = await response.json();
        console.log("End");
        artikelErzeugen();
    }

    function saveInLocalStorage(_inputArticle: Angebote): void {
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.name;

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    //Produkte einschleifen
    function artikelErzeugen(): void {
        for (let i: number = 0; i < angebote.length; i++) {

            //Div
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "produkt" + i;
            document.getElementById("bowls")?.appendChild(newDiv);

            //Bild
            let imgAngebote: HTMLImageElement = document.createElement("img");
            imgAngebote.src = angebote[i].bild;
            document.getElementById("produkt" + i)?.appendChild(imgAngebote);

            //Name anlegen 
            let nameAngebote: HTMLParagraphElement = document.createElement("p");
            nameAngebote.innerHTML = angebote[i].name;
            document.getElementById("produkt" + i)?.appendChild(nameAngebote);

            let preisAngebote: HTMLParagraphElement = document.createElement("p");
            preisAngebote.innerHTML = angebote[i].preis + "€";
            document.getElementById("produkt" + i)?.appendChild(preisAngebote);

            //Beschreibung anlegen 
            let beschreibungAngebote: HTMLParagraphElement = document.createElement("p");
            beschreibungAngebote.innerHTML = angebote[i].beschreibung;
            document.getElementById("produkt" + i)?.appendChild(beschreibungAngebote);

            //Button

            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            document.getElementById("produkt" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleWarenkorb.bind(angebote[i]));
            kaufen.setAttribute("preis", angebote[i].preis.toString());


            switch (angebote[i].kategorien) {
                case "bowls":
                    let getContainerBowls: HTMLElement = document.getElementById("bowls")!;
                    getContainerBowls.appendChild(newDiv);
                    break;

                case "zubehoer":
                    let getContainerZubehoer: HTMLElement = document.getElementById("zubehoer")!;
                    getContainerZubehoer.appendChild(newDiv);
                    break;
                default:
                    break;

            }
        }

        //Teilaufgabe 1:

        function handleWarenkorb(this: Angebote, _event: Event): void {

            produktZähler++;
            console.log(produktZähler);

            saveInLocalStorage(this);
            preisBerechnen += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
            console.log(preisBerechnen.toFixed(2));


            if (produktZähler == 1) {
                document.getElementById("wagenkorbZaehler")?.appendChild(anzahlAnzeigen);
            }
            anzahlAnzeigen.innerHTML = "" + produktZähler;
            document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);

        }


        //Ein-/Ausblenden der Produkte

        function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {

            switch (this.getAttribute("id")) {
                case "bowlsButton":
                    bowls();
                    break;
                case "zubehoerButton":
                    zubehoer();
                    break;
            }

            function bowls(): void {
                (<HTMLElement>document.getElementById("bowls")).style.display = "inline-grid";
                (<HTMLElement>document.getElementById("zubehoer")).style.display = "none";

            }

            function zubehoer(): void {
                (<HTMLElement>document.getElementById("zubehoer")).style.display = "inline-grid";
                (<HTMLElement>document.getElementById("bowls")).style.display = "none";

            }

        }
        let bowlsAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#bowls");
        bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));

        let zubehoerAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#zubehoer");
        zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));

    }
}
