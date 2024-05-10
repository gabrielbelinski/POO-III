import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";

export default class SanduicheBuilder implements IBuilder{

    private sanduiche = new Sanduiche()
    reset(): void {
        this.sanduiche = new Sanduiche()
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche
        this.reset()
        return result
    }
    setSanduicheType(type: SanduicheType) {
        this.sanduiche.sanduicheType = type
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein
    }
    addSalads(salad: Salad) {
        this.sanduiche.addSalads(salad)
    }
    addSauces(sauce: Sauce) {
        this.sanduiche.addSauces(sauce)
    }

}