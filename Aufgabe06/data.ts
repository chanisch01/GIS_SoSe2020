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

    let zubehoer2: Angebote = {
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

    export let angebote: Angebote[] = [bowl1, bowl2, bowl3, bowl4, bowl5, bowl6, zubehoer1, zubehoer2, zubehoer3, zubehoer4, zubehoer5, zubehoer6];

}