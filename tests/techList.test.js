const techList = require('../src/techList');

const { tech, nome, retorno } = require('./mocks/techList');

describe('Testa a função techList', () => {
  it('Testa se retorna um array de objetos com a chave tech e nome, sendo o array ordenado pela chave tech', () => {
    expect(techList(tech, nome)).toStrictEqual(retorno);
  });

  it('Testa se ao passar um array vazio é lançado uma mensagem de erro', () => {
    expect(() => {techList([], nome)}).toThrow(new Error('Array vazio!'));
  });
});