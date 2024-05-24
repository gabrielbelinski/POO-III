import IConsole from "../consoles/interfaces/IConsole";
import IGameplay from "./interfaces/IGameplay";

export default class Play implements IGameplay{

    constructor(private console: IConsole){

    }
    
    playing(): void {
        console.log("Iniciando o jogo...")
    }
    result(): void {
        console.log("Jogando: GTA Vice City")
    }

}