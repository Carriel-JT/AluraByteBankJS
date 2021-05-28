import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Jullian";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteJullian = new ContaCorrente();
contaCorrenteJullian.agencia = 1001;
contaCorrenteJullian.cliente = cliente1;
contaCorrenteJullian.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteJullian.tranferir(valor, conta2);

conta2.saldo = 30000;
console.log(conta2.saldo);