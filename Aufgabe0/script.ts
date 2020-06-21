namespace Aufgabe07 {

    let produktZaehler: number = 0;
    let gesamtPreis: number = 0;

    let gesamtZahl: HTMLParagraphElement = document.createElement("p");
    let zahlAnzeigen: HTMLDivElement = document.createElement("div");
    zahlAnzeigen.id = "zahlAnzeigen";

    let angebote: Angebote[] = [];
    window.addEventListener("load", init);

    export interface Angebote {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }

    function init(): void {
        let url: string = "angebote.json";
        communicate(url);
    }

    async function communicate(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        console.log("Response", response);
        angebote = await response.json();
        artikelErzeugen();
    }

    function saveInLocalStorage(_inputAngebote: Angebote): void {
        let itemString: string = JSON.stringify(_inputAngebote);
        let key: string = "" + _inputAngebote.name;

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    function artikelErzeugen(): void {

        for (let i: number = 0; i < angebote.length; i++) {

            //div erstellen 
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "produkt" + i;
            document.getElementById("bowls")?.appendChild(newDiv);


            //Bild anlegen
            let imgAngebote: HTMLImageElement = document.createElement("img");
            imgAngebote.src = angebote[i].img;
            document.getElementById("produkt" + i)?.appendChild(imgAngebote);

            //Name anlegen 
            let nameAngebote: HTMLParagraphElement = document.createElement("p");
            nameAngebote.innerHTML = angebote[i].name;
            document.getElementById("produkt" + i)?.appendChild(nameAngebote);

            //Beschreibung anlegen 
            let beschreibungAngebote: HTMLParagraphElement = document.createElement("p");
            beschreibungAngebote.innerHTML = angebote[i].beschreibung;
            document.getElementById("produkt" + i)?.appendChild(beschreibungAngebote);

            //Preis
            let preisAngebote: HTMLParagraphElement = document.createElement("p");
            preisAngebote.innerHTML = angebote[i].preis + "€";
            document.getElementById("produkt" + i)?.appendChild(preisAngebote);

            //Button

            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Kaufen";
            document.getElementById("produkt" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", kaufenButton.bind(angebote[i]));
            kaufen.setAttribute("preis", angebote[i].preis.toString());


            //"Button" in Warenkorb
            kaufen.setAttribute("name", angebote[i].name);
            kaufen.setAttribute("img", angebote[i].img);
            kaufen.setAttribute("beschreibung", angebote[i].beschreibung);
            kaufen.setAttribute("kategorie", angebote[i].kategorie);

            document.getElementById("_angebote" + i)?.appendChild(kaufen);
            document.getElementById("_angebote" + i)?.appendChild(kaufen);


            switch (angebote[i].kategorie) {
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

        function kaufenButton(this: Angebote, _event: Event): void {
            produktZaehler++;
            console.log(produktZaehler);

            saveInLocalStorage(this);
            gesamtPreis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
            console.log(gesamtPreis.toFixed(2));


            if (produktZaehler == 1) {
                document.getElementById("warenkorbZaehler")?.appendChild(zahlAnzeigen);
            }
            zahlAnzeigen.innerHTML = "" + produktZaehler;
            document.getElementById("anzahlAnzeigen")?.appendChild(gesamtZahl);

        }

        //Teilaufgabe 2:

        function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
            switch (this.getAttribute("id")) {
                case "bowlsAnzeigen":
                    bowls();
                    break;
                case "zubehoerAnzeigen":
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
