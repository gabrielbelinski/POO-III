import CompraMemento from "./mementos/CompraMemento"
import IMemento from "./mementos/interfaces/IMemento"

export default class Compra{
    private _produtos : string[]

    constructor(){
        this._produtos = []
    }

    public addProduto(str: string) : void{
        this._produtos.push(str)
    }

    public save() : CompraMemento{
        const temp = this._produtos
        this._produtos = []
        return new CompraMemento(temp)
    }

    public restore(memento : IMemento){
        this._produtos = memento.getCompraSalva()
        
    }




}