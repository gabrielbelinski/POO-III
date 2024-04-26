export default class Telefone{
    private _ddd: number
    private _numero: number
    private _tipo: string

    public get ddd(): number {
        return this._ddd
    }
    public set ddd(value: number) {
        this._ddd = value
    }

    public get numero(): number {
        return this._numero
    }
    public set numero(value: number) {
        this._numero = value
    }

    public get tipo(): string {
        return this._tipo
    }
    public set tipo(value: string) {
        this._tipo = value
    }
}