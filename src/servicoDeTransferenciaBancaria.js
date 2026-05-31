export default class ServicoDeTransferenciaBancaria{
  #transferencias //Propriedade Privada (nao pode ser acessada de fora da classe)
  
  constructor(){ //Primeiro metodo a ser executado quando usar a Classe
    this.#transferencias = [];
  }
  
  transferir(de, para, valor){ //Método
    this.#transferencias.push({
      remetente: de,
      destinatario: para,
      valorTransferencia: valor
    });
  }
  
  consultar(){
    return this.#transferencias;
  }
}