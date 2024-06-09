import IMemento from "./interfaces/IMemento";

export default class CompraMemento implements IMemento{
    private _item: string[];
    
    constructor(value : string[]){
        this._item = value
    }

    public getCompraSalva(): string[] {
        return this._item
    }
}