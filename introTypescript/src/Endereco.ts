export default class Endereco{
    private _rua: string
    private _numero: number
    private _cidade: string
    private _estado: string

    
    public get rua(): string {
        return this._rua
    }
    public set rua(value: string) {
        this._rua = value
    }

    public get numero(): number {
        return this._numero
    }
    public set numero(value: number) {
        this._numero = value
    }

    public get cidade(): string {
        return this._cidade
    }
    public set cidade(value: string) {
        this._cidade = value
    }

    public get estado(): string {
        return this._estado
    }
    public set estado(value: string) {
        this._estado = value
    }
    
}