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

telefone_1.ddd = 42
telefone_1.numero = 88884543
telefone_1.tipo = "Celular"

endereco_1.rua = "Rua Jesuino Marcondes"
endereco_1.numero = 425
endereco_1.cidade = "Guarapuava"
endereco_1.estado = "Parana"

cliente_1.nome = "Gabriel"
cliente_1.endereco = endereco_1
cliente_1.data_nascimento = 16022002
cliente_1.sexo = "M"
cliente_1.cpf = 1243232442
cliente_1.telefone[0] = telefone_1 





console.log(venda_1)

