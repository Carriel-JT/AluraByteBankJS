import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Jullian", 11122233309);
const cliente2 = new Cliente("Luisa", 99988877701);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(102, cliente2);

contaCorrente1.depositar(500)
let valor = 200;
contaCorrente1.tranferir(valor, contaCorrente2);

console.log(cliente1);
console.log(contaCorrente1);
console.log(cliente2);
console.log(contaCorrente2);
console.log(ContaCorrente.numeroDeContas);