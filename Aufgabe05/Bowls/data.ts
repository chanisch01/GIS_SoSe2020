interface Bowls {
    bild: string;
    name: string;
    beschreibung: string;
    preis: number;
}

let bowl1: Bowls = { 
    bild: "bowl1.jpg",
    name: "Der Snack zwischendurch",
    beschreibung: "Bowl mit Kiwi und Mango-Mus",
    preis: 6.99
};

let bowl2: Bowls = {
    bild: "bowl2.jpg",
    name: "Gesunder Start in den Tag",
    beschreibung: "Pudding mit Chia-Samen&Bananen",
    preis: 5.99
};

let bowl3: Bowls = {
    bild: "bowl3.jpg",
    name: "Der Sattmacher",
    beschreibung: "Leckeres Oatmeal mit Rosinen",
    preis: 6.99
};

let bowl4: Bowls = {
    bild: "bowl4.jpg",
    name: "Der Klassiker",
    beschreibung: "Tofu mit leckerem Gemüse",
    preis: 8.99
};

let bowl5: Bowls = {
    bild: "bowl5.jpg",
    name: "Deftiges Abendessen",
    beschreibung: "Hackfleisch-Bowl mit Käse und Ei",
    preis: 9.99
};

let bowl6: Bowls = {
    bild: "bowl6.jpg",
    name: "Nährstoff-Bombe",
    beschreibung: "Süßkartoffeln mit Gemüse und Dip",
    preis: 9.99
};


//Array
let bowls: Bowls [] = [bowl1, bowl2, bowl3, bowl4, bowl5, bowl6];
