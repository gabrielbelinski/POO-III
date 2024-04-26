import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        console.log("Você alugou o jogo The Sims 2!")
        this.getDescription()
    }
    getDescription(): void {
        console.log("Gênero: Jogo de simulação")
    }

}