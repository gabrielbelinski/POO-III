import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    addFoodToCart(): void {
        console.log("Você escolheu: Hot-Dog! Produto adicionado ao carrinho!")
        this.getInfo()
    }
    getInfo(): void {
        console.log("Produto: Hot-Dog; Ingredientes: Pão, Salsicha, Batata Palha, Molho, Queijo")
        console.log("Pronto para consumir!")
        this.consumir()
    }
    consumir(): void {
        console.log("Adicionando mais molho...nhac")
    }

}