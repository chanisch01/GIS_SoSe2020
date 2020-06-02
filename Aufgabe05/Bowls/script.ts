namespace Bowls {

    for (let i: number = 0; i < bowls.length; i++) {

        
     //Überschrift
        let artikelBowls: HTMLElement = document.createElement("h2");
        artikelBowls.innerHTML = "Bowls";
        
        if (i == 0) {
            artikelBowls.innerHTML = "Bowls";

        } else {
            artikelBowls.innerHTML = " ";
        }

      
        //div Container für Bowls
        let divBowls: HTMLElement = document.createElement("div");
        divBowls.setAttribute("class", "bowls");
    
        //Bild
        let imgBowls: HTMLElement = document.createElement("img");
        imgBowls.setAttribute("src", bowls[i].bild);
        imgBowls.setAttribute("alt", "bowls");
        
        //Name des Artikels
        let artikelName: HTMLElement = document.createElement("h3");
        artikelName.innerHTML = bowls[i].name;
        
        //Beschreibung des Artikel
        let artikelBeschreibung: HTMLElement = document.createElement("h3");
        artikelBeschreibung.innerHTML = bowls[i].beschreibung;
      
           
        //Preis 
        let bowlsPreis: HTMLElement = document.createElement("p");
        bowlsPreis.innerHTML = bowls[i].preis + "€";
        
        //Button "Kaufen"
        let buttonKaufen: HTMLElement = document.createElement("button");
        buttonKaufen.innerHTML = "Kaufen";
        
        // Tags werden als child zu div Container hinzugefügt
        divBowls.appendChild(imgBowls);
        divBowls.appendChild(artikelName);
        divBowls.appendChild(artikelBeschreibung);
        divBowls.appendChild(bowlsPreis);
        divBowls.appendChild(buttonKaufen);
        
        //Überschrift und Container hinzufügen
        document.getElementById("liste")?.appendChild(artikelBowls);
        document.getElementById("liste")?.appendChild(divBowls);
        
        
          }
        
        }
       //# sourceMappingURL=data.js.map