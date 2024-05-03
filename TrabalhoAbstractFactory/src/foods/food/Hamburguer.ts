import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    addFoodToCart(): void {
        console.log("Você escolheu: Hamburguer! Produto adicionado ao carrinho!")
        this.getInfo()
    }
    getInfo(): void {
        console.log("Produto: Hamburguer; Ingredientes: Pão, Hamburguer, Alface, Queijo, Presunto")
        console.log("Pronto para consumir!")
        this.consumir()
    }
    consumir(): void {
        console.log("Adicionando ketchup...nhac")
    }

}