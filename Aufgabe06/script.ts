namespace Aufgabe06 {

    artikelErzeugen();

    function artikelErzeugen(): void {

        for (let i: number = 0; i < angebote.length; i++) {

            //div erstellen 
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "produkt" + i;
            document.getElementById("bowls")?.appendChild(newDiv);


            //Bild anlegen
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
            kaufen.addEventListener("click", handleWarenkorb);
            kaufen.setAttribute("preis", angebote[i].preis.toString());


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

        //Teilaufgabe 1

        let gesamtPreis: number = 0;
        let produktZaehler: number = 0;
        let warenkorb: HTMLDivElement = document.createElement("div");

        function handleWarenkorb(_event: Event): void {
            if (produktZaehler >= 0) {
                document.getElementById("warenkorbZaehler")?.appendChild(warenkorb);
            }
            produktZaehler++;
            warenkorb.innerHTML = produktZaehler + "";

            gesamtPreis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);

            console.log(gesamtPreis);


        }

        //Teilaufgabe 2

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
        //neue Variable erstellen und verlinken

        let bowlsAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#bowlsButton");
        bowlsAnzeigen.addEventListener("click", handleCategoryClick.bind(bowlsAnzeigen));

        let zubehoerAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#zubehoerButton");
        zubehoerAnzeigen.addEventListener("click", handleCategoryClick.bind(zubehoerAnzeigen));

    }
}