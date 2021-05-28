class cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldo;    

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}


const cliente1 = new cliente();
cliente1.nome = "Jullian";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;
console.log(cliente1);
const constaCorrenteJullian = new ContaCorrente();
constaCorrenteJullian.saldo = 0
constaCorrenteJullian.agencia = 1001
console.log(constaCorrenteJullian);
constaCorrenteJullian.saldo += 100;
console.log(constaCorrenteJullian);
constaCorrenteJullian.sacar(50);
console.log(constaCorrenteJullian);
constaCorrenteJullian.sacar(200);
console.log(constaCorrenteJullian);


const cliente2 = new cliente();
cliente2.nome = "Luisa";
cliente2.cpf = 99988877701;
cliente2.rg = 987654321;
console.log(cliente2);
const constaCorrenteLuisa = new ContaCorrente();
constaCorrenteLuisa.saldo = 0
constaCorrenteLuisa.agencia = 1001
console.log(constaCorrenteLuisa);