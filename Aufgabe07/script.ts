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
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: number;
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
        console.log("Ende");
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

            //Div
            let divBowls: HTMLElement = document.createElement("div");
            divBowls.setAttribute("class", "Produkte");

            //Bild
            let imgBowls: HTMLElement = document.createElement("img");
            imgBowls.setAttribute("src", angebote[i].img);

            //Name
            let bowlsName: HTMLElement = document.createElement("h2");
            bowlsName.innerHTML = angebote[i].name;

            //Beschreibung
            let bowlsBeschreibung: HTMLElement = document.createElement("p");
            bowlsBeschreibung.innerHTML = angebote[i].beschreibung;

            //Preis
            let bowlsPreis: HTMLElement = document.createElement("h3");
            bowlsPreis.innerHTML = angebote[i].preis + "€";


            //Button
            let button: HTMLInputElement = document.createElement("input");
            button.innerHTML = "Jetzt kaufen";
            button.type = "button";
            button.value = "Kaufen";
            bowlsPreis.appendChild(button);

            //button.addEventListener("click", handleAdd);
            button.addEventListener("click", kaufenButton.bind(angebote[i]));
            button.setAttribute("preis", angebote[i].preis.toString());

            //"Button" in Warenkorb
            button.setAttribute("name", angebote[i].name);
            button.setAttribute("img", angebote[i].img);
            button.setAttribute("beschreibung", angebote[i].beschreibung);
            button.setAttribute("kategorie", angebote[i].kategorie.toString());

            document.getElementById("_angebote" + i)?.appendChild(button);
            document.getElementById("_angebote" + i)?.appendChild(button);


            // Alle Tags zu div Container
            divBowls.appendChild(imgBowls);
            divBowls.appendChild(bowlsName);
            divBowls.appendChild(bowlsPreis);
            divBowls.appendChild(bowlsBeschreibung);
            divBowls.appendChild(button);

            switch (angebote[i].kategorie) {
                case 1:
                    let getContainer1: HTMLElement = document.getElementById("bowls")!;
                    getContainer1.appendChild(divBowls);
                    break;
                case 2:
                    let getContainer2: HTMLElement = document.getElementById("zubehoer")!;
                    getContainer2.appendChild(divBowls);
                    break;
                default:
                    break;
            }

            //Teilaufgabe 1:


            function kaufenButton(this: Angebote, _event: Event): void {
                produktZähler++;
                console.log(produktZähler);

                saveInLocalStorage(this);
                preisBerechnen += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
                console.log(preisBerechnen.toFixed(2));


                if (produktZähler == 1) {
                    document.getElementById("warenkorbZaehler")?.appendChild(anzahlAnzeigen);
                }
                anzahlAnzeigen.innerHTML = "" + produktZähler;
                document.getElementById("anzahlAnzeigen")?.appendChild(zahlAnzeigen);

            }


            //Teilaufgabe 2:

            function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
                switch (this.getAttribute("id")) {
                    case "bowlsB":
                        bowls();
                        break;
                    case "zubehoerB":
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
            let bowlsAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#bowlsB");
            bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));

            let zubehoerAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#zubehoerB");
            zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));


        }
    }
}
