  namespace Zubehör {
  
    for (let i: number = 0; i < zubehör.length; i++) {
  
      //Überschrift

      let artikelZubehör: HTMLElement = document.createElement("h2");
      artikelZubehör.innerHTML = "Zubehör";
    
      if (i == 0) {
          artikelZubehör.innerHTML = "Zubehör";

      } else {
          artikelZubehör.innerHTML = " ";
      }

  
      //div Container für Zubehör
      let divZubehör: HTMLElement = document.createElement("div");
      divZubehör.setAttribute("class", "zubehör");
  
      //Bild
      let imgZubehör: HTMLElement = document.createElement("img");
      imgZubehör.setAttribute("src", zubehör[i].bild);
      imgZubehör.setAttribute("alt", "zubehör");
  
      //Name des Artikels
      let artikelName: HTMLElement = document.createElement("h3");
      artikelName.innerHTML = zubehör[i].name;
  
      //Beschreibung des Artikel
      let artikelBeschreibung: HTMLElement = document.createElement("h3");
      artikelBeschreibung.innerHTML = zubehör[i].beschreibung;

     
  
      //Preis 
      let zubehörPreis: HTMLElement = document.createElement("p");
      zubehörPreis.innerHTML = zubehör[i].preis;
  
      //Button "Kaufen"
      let buttonKaufen: HTMLElement = document.createElement("button");
      buttonKaufen.innerHTML = "Kaufen";
  
      // Tags werden als child zu div Container hinzugefügt
      divZubehör.appendChild(imgZubehör);
      divZubehör.appendChild(artikelName);
      divZubehör.appendChild(artikelBeschreibung);
      divZubehör.appendChild(zubehörPreis);
      divZubehör.appendChild(buttonKaufen);
  
      //Überschrift und Container hinzufügen
      document.getElementById("liste")?.appendChild(artikelZubehör);
      document.getElementById("liste")?.appendChild(divZubehör);
  
  
    }
  
  }
 