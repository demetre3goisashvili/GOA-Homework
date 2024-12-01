class Animal{
    constructor(species, habitat, diet, look){
        this.species = species
        this.habitat = habitat
        this.diet = diet
        this.look = look
    }
    cardmaker() {
        let div = document.createElement("div");
        div.classList.add("animal-card");

        let img = document.createElement("img");
        img.src = this.look;
        img.alt = `es aris ${this.species}`;

        let h1 = document.createElement("h1");
        h1.textContent = this.species;

        let dietP = document.createElement("p");
        dietP.textContent = `dieta: ${this.diet}`;

        let habitatP = document.createElement("p");
        habitatP.textContent = `habitati: ${this.habitat}`;

        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(dietP);
        div.appendChild(habitatP);

        return div;
    }
}


class App{
    constructor(){
        this.cxovelebi = []
    }
    damateba(obj){
        this.cxovelebi.push(obj) 
    }
    render(){
        this.cxovelebi.forEach(animal => {
            document.body.appendChild(animal.cardmaker());
        });
    }
}


let app = new App()
app.damateba(new Animal("Penguin", "Arctic", "Fish", "penguin.webp"))
app.damateba(new Animal("Medvedi", "Mashas saxli", "Tapli", "beeer.avif"))
app.damateba(new Animal("Hippo", "Lake", "Meat", "hippo.jpg"))


app.render()




