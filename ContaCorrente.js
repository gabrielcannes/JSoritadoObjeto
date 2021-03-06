import {Cliente} from "./Cliente.js"
export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente; // recebe uma instância da classe Cliente
  _saldo = 0;
  
  // getters e setters
  get saldo(){
    return this.saldo;
  }

  set cliente (novoValor){
    if (novoValor instanceof Cliente){ // se o meu novo valor for uma instância de cliente
      this._cliente = novoValor;
    }
  }

  get cliente (){
    return this.cliente;
  }

  // construtor
  constructor(agencia,cliente){
    this.cliente = cliente; //usando o get mesmo dentro da classe (cliente ao invez do _cliente)
    this.agencia = agencia;
    ContaCorrente.numeroDeContas += 1; // contador geral não pode usar o this
  }

  // metodos
  sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
    }
    return valor;
  }

  depositar(valor){
    if(valor <= 0) return //early return: se entrar nesse if encerra-se o método e retorna mais cedo
    
    this._saldo += valor
  }

  transferencia(valor, conta){ //valor a ser transferido e para qual conta transferir
    conta.cidade = "São Paulo";//adicionando dinamicamente um atributo ao objeto conta
    const valorSacado = this.sacar(valor); //saca o valor da conta que está sendo retirada o dinheiro
    conta.depositar(valor); // deposita o valor sacado 
  }

  
}