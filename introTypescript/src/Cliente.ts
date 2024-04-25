import Endereco from "./Endereco"
import Telefone from "./Telefone"

export default class Cliente {
    private _nome: string
    private _cpf: number
    private _data_nascimento: number
    private _sexo: string
    private _endereco: Endereco
    private _telefones: Telefone[]

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    public get cpf(): number {
        return this._cpf
    }
    public set cpf(value: number) {
        this._cpf = value
    }

    public get data_nascimento(): number {
        return this._data_nascimento
    }
    public set data_nascimento(value: number) {
        this._data_nascimento = value
    }

    public get sexo(): string {
        return this._sexo
    }
    public set sexo(value: string) {
        this._sexo = value
    }

    public get endereco(): Endereco {
        return this._endereco
    }
    public set endereco(value: Endereco) {
        this._endereco = value
    }

    public get telefone(): Telefone[] {
        return this._telefones
    }
    public set telefone(value: Telefone[]) {
        this._telefones = value
    }

}