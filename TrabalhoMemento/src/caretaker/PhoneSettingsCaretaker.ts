import IMemento from "../memento/interfaces/IMemento";
import PhoneSettings from "../settings/PhoneSettings";
import ICaretaker from "./interfaces/ICaretaker";

export default class PhoneSettingsCaretaker implements ICaretaker{
    private _mementos : IMemento[] = []

    constructor(private _phoneSettings : PhoneSettings){
    }

    public saveSnapshot() : void{
        console.log("Backup das configurações realizado com sucesso!")
        this._mementos.push(this._phoneSettings.save())
    }

    public restoreSnapshot() : void{
        console.log("Restaurando backup das configurações...")
        if(!this._mementos.length){
            console.log("Erro: Não existem alterações a serem restauradas!")
            return
        }
        this._phoneSettings.restore(this._mementos.pop())
    }

    public showSnapshots() : void{
        console.log("Exibindo o histórico de mudanças...\n")
        for(const memento of this._mementos){
            console.log(memento.print())
        }
    }
}