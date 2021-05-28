import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//clientes
const cliente1 = new Cliente();
cliente1.nome = "Jullian";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Luisa";
cliente2.cpf = 99988877701;
cliente2.rg = 987654321;

//contas
const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
console.log(conta1);

const conta2 = new ContaCorrente();
conta2.agencia = 102;
conta2.cliente = cliente2;
console.log(conta2);

//transações
conta1.depositar(100);
const valorSacado = conta1.sacar(50);
conta1.depositar(500);

let valor = 200;
conta1.transferir(valor, conta2);
