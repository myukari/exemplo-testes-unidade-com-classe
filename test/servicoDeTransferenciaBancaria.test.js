import ServicoDeTransferenciaBancaria from '../src/servicoDeTransferenciaBancaria.js';
import assert from 'node:assert';

describe('Classe de Serviços de Transferência Bancária', () => {
  it('Validar que a transferência seja adicionada à lista de transferências', () => {
    //Arrange
    const servicoDeTransferencia = new ServicoDeTransferenciaBancaria();


    //Act
    servicoDeTransferencia.transferir('Ada Naomi','Monica Ota','200000');
    const transferencias = servicoDeTransferencia.consultar();
    const minhaTransferencia = transferencias.at(-1);
    //Assert
    assert.equal(minhaTransferencia.remetente, 'Ada Naomi');
    assert.equal(minhaTransferencia.destinatario, 'Monica Ota');
    assert.equal(minhaTransferencia.valorTransferencia, '200000');
  });     
})