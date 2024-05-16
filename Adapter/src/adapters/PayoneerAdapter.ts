import Payonner from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment{

    constructor(private payoneer :Payonner){
        console.log("Adaptando Payoneer no PayPal")
    }

    authToken(): Token {
        return new Token()
    }
    paypalPayment(): void {
        this.payoneer.sendPayment()
    }
    paypalReceive(): void {
        this.payoneer.receivePayment()
    }

}