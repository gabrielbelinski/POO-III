import IItem from "./interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        console.log("Você alugou o filme Jogos Vorazes!")
        this.getDescription()
    }
    getDescription(): void {
        console.log("Gênero: terror, drama, fantasia, aventura, romance, ficção científica; Duração: 2h22m")
    }
}