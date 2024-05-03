import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    addDrinkToCart(): void {
        console.log("Você escolheu: Refrigerante! Produto adicionado ao carrinho!")
        this.getInfo()
    }
    getInfo(): void {
        console.log("Produto: Coca-Cola - Lata");
        console.log("Pronto para consumir!")
        this.consumir()
    }
    consumir(): void {
        console.log("Abrindo...shhhhhh")
    }

}