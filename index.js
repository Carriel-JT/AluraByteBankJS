import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Jullian", 11122233309);
const cliente2 = new Cliente("Luisa", 99988877701);

const contaCorrenteJullian = new ContaCorrente(1001, cliente1);
const contaCorrenteLuisa = new ContaCorrente(102, cliente2);

contaCorrenteJullian.depositar(500)
let valor = 200;
contaCorrenteJullian.tranferir(valor, contaCorrenteLuisa);

console.log(cliente1);
console.log(cliente2);