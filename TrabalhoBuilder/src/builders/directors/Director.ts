import Bread from "../../components/Bread";
import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import Sauce from "../../components/Sauce";
import SanduicheType from "../../components/SanduicheType";
import IBuilder from "../interfaces/IBuilder";

export default class Director{
    
    constructor(private builder: IBuilder){}

    constructSanduicheComum(){
        this.builder.setSanduicheType(SanduicheType.COM)
        this.builder.setBread(Bread.PARM)
        this.builder.setProtein(Protein.FRD)
        this.builder.addSalads(new Salad("Tomate"))
        this.builder.addSalads(new Salad("Alface"))
        this.builder.addSauces(new Sauce("Supreme"))
        this.builder.addSauces(new Sauce("Barbecue"))
    }

    constructSanduicheVeg(){
        this.builder.setSanduicheType(SanduicheType.VEG)
        this.builder.setBread(Bread.GRANOLA)
        this.builder.setProtein(Protein.BVG)
        this.builder.addSalads(new Salad("Picles"))
        this.builder.addSalads(new Salad("Espinafre"))
        this.builder.addSauces(new Sauce("Chipotle"))
        this.builder.addSauces(new Sauce("Cebola agridoce"))
    }

}