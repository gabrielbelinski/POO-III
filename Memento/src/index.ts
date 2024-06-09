import Compra from "./Compra"
import CompraCaretaker from "./CompraCaretaker"

const compra = new Compra()
const compraCaretaker = new CompraCaretaker(compra)

compra.addProduto("Leite")
compraCaretaker.backup()

console.log(compraCaretaker.showHistory())


compra.addProduto("Refri")
compraCaretaker.backup()

console.log(compraCaretaker.showHistory())


compra.addProduto("Salada")
compraCaretaker.backup()

console.log(compraCaretaker.showHistory())


compra.addProduto("Peixe")
compraCaretaker.backup()

console.log(compraCaretaker.showHistory())

console.log(compraCaretaker.showHistory())

compraCaretaker.undo();

console.log(compraCaretaker.showHistory())

compraCaretaker.undo();

console.log(compraCaretaker.showHistory())

compraCaretaker.undo();

console.log(compraCaretaker.showHistory())

compraCaretaker.undo();

console.log(compraCaretaker.showHistory())




