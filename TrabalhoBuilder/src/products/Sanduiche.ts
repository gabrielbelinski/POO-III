import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{
    private _sanduicheType: SanduicheType;
    private _bread: Bread;
    private _protein: Protein;
    private _salads : Salad[] = []
    private _sauces : Sauce[] = []

    public get sanduicheType(): SanduicheType {
        return this._sanduicheType;
    }
    public set sanduicheType(value: SanduicheType) {
        this._sanduicheType = value;
    }

    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }

    public get protein(): Protein {
        return this._protein;
    }
    public set protein(value: Protein) {
        this._protein = value;
    }

    /**
     * Getter salads
     * @return {Salad[] }
     */
	public get salads(): Salad[]  {
		return this._salads;
	}

    /**
     * Getter sauces
     * @return {Sauce[] }
     */
	public get sauces(): Sauce[]  {
		return this._sauces;
	}

    /**
     * Setter salads
     * @param {Salad[] } value
     */
	public set salads(value: Salad[] ) {
		this._salads = value;
	}

    /**
     * Setter sauces
     * @param {Sauce[] } value
     */
	public set sauces(value: Sauce[] ) {
		this._sauces = value;
	}

    public addSauces(sauce: Sauce){
        this.sauces.push(sauce)
    }

    public addSalads(salads: Salad){
        this.salads.push(salads)
    }
 
    
}