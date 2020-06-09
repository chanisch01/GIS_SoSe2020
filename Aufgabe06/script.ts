namespace Aufgabe06 {

    interface Angebote {
            bild: string;
            name: string;
            beschreibung: string;
            preis: number;
            kategorie: string;
    }
    
    //Bowls
    
    let bowl1: Angebote = {
        bild: "bowl1.jpg",
        name: "Der Snack zwischendurch",
        beschreibung: "Bowl mit Kiwi und Mango-Mus",
        preis: 6.99,
        kategorie: "bowl"
    };
    
    
    let bowl2: Angebote = {
        bild: "bowl2.jpg",
        name: "Gesunder Start in den Tag",
        beschreibung: "Pudding mit Chia Samen",
        preis: 5.99,
        kategorie: "bowl"
    };
    
    let bowl3: Angebote = {
        bild: "bowl3.jpg",
        name: "Der Sattmacher",
        beschreibung: "Leckeres Oatmeal mit Rosinen",
        preis: 7.99,
        kategorie: "bowl"
    };
    
    let bowl4: Angebote = {
        bild: "bowl4.jpg",
        name: "Der Klassiker",
        beschreibung: "Tofu mit leckerem Gemüse",
        preis: 8.99,
        kategorie: "bowl"
    };
    
    let bowl5: Angebote = {
        bild: "bowl5.jpg",
        name: "Deftiges Abendessen",
        beschreibung: "Hacklfeisch Bowl mit Käse und Ei",
        preis: 9.99,
        kategorie: "bowl"
    };
    
    
    let bowl6: Angebote = {
        bild: "bowl6.jpg",
        name: "Nährstoff-Bombe",
        beschreibung: "Süßkartoffeln mit Gemüse und Dip",
        preis: 10.99,
        kategorie: "bowl"
    };
    
    //Zubehoer
       
    let zubehoer1: Angebote = {
        bild: "zubehoer1.jpg",
        name: "Smoothie Mixer",
        beschreibung: "Ein Muss in der Küche",
        preis: 20.99,
        kategorie: "zubehoer"
    };
    
    let zubehoer2: Angebote  = {
        bild: "zubehoer2.jpg",
        name: "Messer",
        beschreibung: "Ein Muss in der Küche",
        preis: 23.99,
        kategorie: "zubehoer"
    };
    
    let zubehoer3: Angebote = {
        bild: "zubehoer3.jpg",
        name: "6 Einweggläser",
        beschreibung: "Ein Muss in der Küche",
        preis: 6.99,
        kategorie: "zubehoer"
    };
    
    let zubehoer4: Angebote = {
        bild: "zubehoer4.jpg",
        name: "4 Kochlöffel",
        beschreibung: "Ein Muss in der Küche",
        preis: 2.99,
        kategorie: "zubehoer"
    };
    
    let zubehoer5: Angebote = {
        bild: "zubehoer5.jpg",
        name: "Schüssel",
        beschreibung: "Ein Muss in der Küche",
        preis: 5.99,
        kategorie: "zubehoer"
    };
    
    let zubehoer6: Angebote = {
        bild: "zubehoer6.jpg",
        name: "2 Gläser",
        beschreibung: "Ein Muss in der Küche",
        preis: 5.99,
        kategorie: "zubehoer"
    };
    
    let angebote: Angebote[] = [bowl1, bowl2, bowl2, bowl3, bowl4, bowl6, zubehoer1, zubehoer2, zubehoer3, zubehoer4, zubehoer5, zubehoer6];
    
    for (let i: number = 0; i < angebote.length; i++) {

         //div erstellen und anlegen um drauf zugreifen zu können 
         let newDiv: HTMLDivElement = document.createElement("div");
         newDiv.id = "produkt" + i;
         document.getElementById("bowls")?.appendChild(newDiv);
 
 
         //Bild anlegen um es zu erkennen 
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
    }

//Teilaufgabe 1
        
let gesamtPreis: number = 0;
let zahl: number = 0;
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

function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
    switch (this.getAttribute("id")) {
      case "bowlsAnzeige":
        bowls();
        break;
      case "zubehoerAnzeige":
        zubehoer();
        break;
}

    function bowls(): void {
    (<HTMLElement>document.getElementById("bowls")).style.display = "block";
    (<HTMLElement>document.getElementById("zubehoer")).style.display = "none";

}

    function zubehoer(): void {
    (<HTMLElement>document.getElementById("zubehoer")).style.display = "block";
    (<HTMLElement>document.getElementById("bowls")).style.display = "none";
    }  
}
//neue Variable erstellen und verlinken
let bowlsButton: HTMLElement = <HTMLElement>document.querySelector("#bowlsAnzeige");
bowlsButton.addEventListener("click", handleCategoryClick.bind(bowlsButton));

let zubehoerButton: HTMLElement = <HTMLElement>document.querySelector("#zubehoerAnzeige");
zubehoerButton.addEventListener("click", handleCategoryClick.bind(zubehoerButton));
   