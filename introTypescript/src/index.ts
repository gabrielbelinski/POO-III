import Venda from "./Venda";
import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Produto from "./Produto";

var telefone_1 : Telefone = new Telefone()
var endereco_1 : Endereco = new Endereco()
var cliente_1 : Cliente = new Cliente()
var produto_1 : Produto = new Produto()
var venda_1 : Venda = new Venda()
var telefone_2 : Telefone = new Telefone()
var produto_2 : Produto = new Produto()

telefone_1.ddd = 42
telefone_1.numero = 88884543
telefone_1.tipo = "Celular"

telefone_2.ddd = 42
telefone_2.numero = 95304412
telefone_2.tipo = "Celular"

endereco_1.rua = "Rua Jesuino Marcondes"
endereco_1.numero = 425
endereco_1.cidade = "Guarapuava"
endereco_1.estado = "Parana"

cliente_1.nome = "Gabriel"
cliente_1.endereco = endereco_1
cliente_1.data_nascimento = 16022002
cliente_1.sexo = "Masculino"
cliente_1.cpf = 1243232442
cliente_1.telefones[0] = telefone_1
cliente_1.telefones[1] = telefone_2

produto_1.codigo = 2004
produto_1.descricao = "Sonho de Valsa"
produto_1.valor = 49.90

produto_2.codigo = 2005
produto_2.descricao = "Ouro Branco"
produto_2.valor = 69.90

venda_1.cliente = cliente_1
venda_1.codigo = 150
venda_1.data = 19042024
venda_1.produtos[0] = produto_1
venda_1.produtos[1] = produto_2

console.log("Dados da venda\n\n", "Nome do cliente:", venda_1.cliente.nome, "\n", venda_1.cliente.endereco, "\nCPF: ", venda_1.cliente.cpf, "\nData de Nascimento:", venda_1.cliente.data_nascimento, "\nGênero:", venda_1.cliente.sexo, "\nTelefones:", venda_1.cliente.telefones)
console.log("\nCódigo da venda:", venda_1.codigo, "\nData da venda:" , venda_1.data, "\nDenominação dos produtos adquiridos:", venda_1.produtos, "\nValor total da venda (R$):", venda_1.calcularTotal().toFixed(2))

