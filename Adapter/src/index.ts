
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import Payoneer from "./payoneer/Payoneer";
import IPayoneerPayment from "./payoneer/interfaces/IPayoneerPayment";
import IPayPalPayment from "./paypal/interfaces/IPayPalPayment";

const payment : IPayPalPayment = new PayoneerAdapter(new Payoneer)
payment.paypalPayment()
payment.paypalReceive()

const paymentMP : IPayoneerPayment = new MercadoPagoAdapter(new MercadoPago)
paymentMP.sendPayment()
paymentMP.receivePayment()