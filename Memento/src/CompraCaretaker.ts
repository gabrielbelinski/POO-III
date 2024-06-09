import Compra from "./Compra";
import CompraMemento from "./mementos/CompraMemento";
import IMemento from "./mementos/interfaces/IMemento";

export default class CompraCaretaker{
    private _mementos: IMemento[];
    private _compra: Compra

    constructor(compra: Compra){
        this._compra = compra
        this._mementos = []
    }

   public backup(){
        this._mementos.push(this._compra.save())
   }

   public undo(): void {
    if (!this._mementos.length) {
        return;
    }
    const memento = this._mementos.pop();

    this._compra.restore(memento);
}

   public showHistory(){
        const history = []
        for (const memento of this._mementos){
            history.push(memento.getCompraSalva().toString())
        }
        return history
   }
   

}