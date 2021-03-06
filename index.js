import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente2 = new Cliente("Ana",11122233309);
const conta2 = new ContaCorrente(102,cliente2);

const cliente1 = new Cliente("Gabriel",11122233309);
const contaCorrenteGabriel = new ContaCorrente(1001,cliente1); //faz com que a conta corrente tenha um cliente atribuído a ela
contaCorrenteGabriel.depositar(500);

let valor = 200;
contaCorrenteGabriel.transferencia(valor,conta2); //transfere do Gabriel para a ana

console.log(contaCorrenteGabriel);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas); // usando um atributo estático da classe e incrementando ele no construtor é possível saber o número exato de contas criadas
