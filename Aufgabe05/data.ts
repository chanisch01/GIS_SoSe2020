interface Bowls {
    bild: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: string;
}

let bowl1: Bowls = { 
    bild: "bowl1.jpg",
    name: "Der Snack zwischendurch",
    beschreibung: "Bowl mit Kiwi und Mango-Mus",
    preis: 6.99,
    kategorie: "bowl"
};

let bowl2: Bowls = {
    bild: "bowl2.jpg",
    name: "Gesunder Start in den Tag",
    beschreibung: "Pudding mit Chia-Samen&Bananen",
    preis: 5.99,
    kategorie: "bowl"
};

let bowl3: Bowls = {
    bild: "bowl3.jpg",
    name: "Der Sattmacher",
    beschreibung: "Leckeres Oatmeal mit Rosinen",
    preis: 6.99,
    kategorie: "bowl"
};

let bowl4: Bowls = {
    bild: "bowl4.jpg",
    name: "Der Klassiker",
    beschreibung: "Tofu mit leckerem Gemüse",
    preis: 8.99,
    kategorie: "bowl"
};

let bowl5: Bowls = {
    bild: "bowl5.jpg",
    name: "Deftiges Abendessen",
    beschreibung: "Hackfleisch-Bowl mit Käse und Ei",
    preis: 9.99,
    kategorie: "bowl"
};

let bowl6: Bowls = {
    bild: "bowl6.jpg",
    name: "Nährstoff-Bombe",
    beschreibung: "Süßkartoffeln mit Gemüse und Dip",
    preis: 9.99,
    kategorie: "bowl"

};

interface Zubehoer {
    bild: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: string;

}

let zubehoer1: Zubehoer = {
    bild: "zubehoer1.jpg",
    name: "Smoothie Mixer",
    beschreibung: "Ein Muss in der Küche",
    preis: 20.99,
    kategorie: "zubehoer"
};

let zubehoer2: Zubehoer  = {
    bild: "zubehoer2.jpg",
    name: "Messer",
    beschreibung: "Ein Muss in der Küche",
    preis: 23.99,
    kategorie: "zubehoer"
};

let zubehoer3: Zubehoer = {
    bild: "zubehoer3.jpg",
    name: "6 Einweggläser",
    beschreibung: "Ein Muss in der Küche",
    preis: 6.99,
    kategorie: "zubehoer"
};

let zubehoer4: Zubehoer = {
    bild: "zubehoer4.jpg",
    name: "4 Kochlöffel",
    beschreibung: "Ein Muss in der Küche",
    preis: 2.99,
    kategorie: "zubehoer"
};

let zubehoer5: Zubehoer = {
    bild: "zubehoer5.jpg",
    name: "Schüssel",
    beschreibung: "Ein Muss in der Küche",
    preis: 5.99,
    kategorie: "zubehoer"
};

let zubehoer6: Zubehoer = {
    bild: "zubehoer6.jpg",
    name: "2 Gläser",
    beschreibung: "Ein Muss in der Küche",
    preis: 5.99,
    kategorie: "zubehoer"

};

let bowls: Bowls[] = [bowl1, bowl2, bowl3, bowl4, bowl5, bowl6];
let zubehoer: Zubehoer[] = [zubehoer1, zubehoer2, zubehoer3, zubehoer4, zubehoer4, zubehoer6];






