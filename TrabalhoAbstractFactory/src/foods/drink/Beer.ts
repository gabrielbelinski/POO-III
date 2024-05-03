import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    addDrinkToCart(): void {
        console.log("Você escolheu: Cerveja! Produto adicionado ao carrinho!")
        this.getInfo()
    }
    getInfo(): void {
        console.log("Produto: Brahma Puro Malte - Lata")
        console.log("Pronto para consumir!")
        this.consumir()
    }
    consumir(): void {
        console.log("Abrindo...tioplack!")
    }

}