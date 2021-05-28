class cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Jullian";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Luisa";
cliente2.cpf = 99988877701;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 987654321;

console.log(cliente1);
console.log(cliente2);