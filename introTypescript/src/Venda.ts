import Produto from "./Produto"
import Cliente from "./Cliente"

export default class Venda{
    private _codigo: number
    private _data: number
    private _cliente: Cliente
    private _produtos: Produto[]

   
   
    constructor(){
        this._produtos = []
    }

    public get codigo(): number {
        return this._codigo
    }
    public set codigo(value: number) {
        this._codigo = value
    }

    public get data(): number {
        return this._data
    }
    public set data(value: number) {
        this._data = value
    }

    public get cliente(): Cliente {
        return this._cliente
    }
    public set cliente(value: Cliente) {
        this._cliente = value
    }

    public get produtos(): Produto[] {
        return this._produtos
    }
    public set produtos(value: Produto[]) {
        this._produtos = value
    }

    public calcularTotal(): number{
        let valorTotal: number = 0
        for(let i = 0; i < this.produtos.length; i++){
            valorTotal += this.produtos[i].valor
        }
        return valorTotal
    }

    

}
