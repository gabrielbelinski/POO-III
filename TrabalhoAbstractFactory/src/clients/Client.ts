import IDeliveryFactory from "../deliveryapp/interfaces/IDeliveryFactory";
import IDrink from "../foods/drink/interfaces/IDrink";
import IFood from "../foods/food/interfaces/IFood";

export default class Client{
    private drink: IDrink
    private food: IFood

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink()
        this.food = factory.createDeliveryFood()
    }

    startDelivery(): void{
        this.drink.addDrinkToCart()
        this.food.addFoodToCart()
    }
}