import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./builders/directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder()
const director : Director = new Director(builder)

director.constructSanduicheComum()
const sanduicheComum : Sanduiche = builder.getSanduiche()
console.log("Preparando sanduiche " + sanduicheComum.sanduicheType)
console.log("Pão: " + sanduicheComum.bread)
console.log("Proteína: " + sanduicheComum.protein)

console.log("\nSaladas: ")
for(var i in sanduicheComum.salads){
    console.log(sanduicheComum.salads[i].nome + " ")
}
console.log("\nMolhos: ")
for(var i in sanduicheComum.sauces){
    console.log(sanduicheComum.sauces[i].nome + " ")
}
console.log("\n")

director.constructSanduicheVeg()
const sanduicheVeg : Sanduiche = builder.getSanduiche()
console.log("Preparando sanduiche " + sanduicheVeg.sanduicheType)
console.log("Pão: " + sanduicheVeg.bread)
console.log("Proteína: " + sanduicheVeg.protein)

console.log("\nSaladas: ")
for(var i in sanduicheVeg.salads){
    console.log(sanduicheVeg.salads[i].nome + " ")
}

console.log("\nMolhos: ")
for(var i in sanduicheVeg.sauces){
    console.log(sanduicheVeg.sauces[i].nome + " ")
}
console.log("\n")