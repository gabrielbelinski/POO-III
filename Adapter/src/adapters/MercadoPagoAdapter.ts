import MercadoPago from "../mercadopago/MercadoPago";
import IPayoneerPayment from "../payoneer/interfaces/IPayoneerPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayoneerPayment{

    constructor(private mercadopago : MercadoPago){
        console.log("Adaptando Mercado Pago no Payoneer")
    }
    authToken(): Token {
        return new Token()
    }
    sendPayment(): void {
        this.mercadopago.sendPayment()
    }
    receivePayment(): void {
        this.mercadopago.receivePayment()
    }

    
}