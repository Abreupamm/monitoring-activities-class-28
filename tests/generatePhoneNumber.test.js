const generatePhoneNumber = require('../src/generatePhoneNumber');

const { arraysComTamanhosErrados, arrayComValoresErrados, arrayCerto } = require('./mocks/generateNumber');

describe('Testa a função generatePhoneNumber', () => {
  it('Se ao passar um array com tamanho incorreto é retornado a string "array com tamanho incorreto"', () => {
    expect(generatePhoneNumber(arraysComTamanhosErrados.array1)).toBe('array com tamanho incorreto');
    expect(generatePhoneNumber(arraysComTamanhosErrados.array2)).toBe('array com tamanho incorreto');
    expect(generatePhoneNumber(arraysComTamanhosErrados.array3)).toBe('array com tamanho incorreto');
  });

  it('Se ao passar números menores que 0, ou mais que 9 ou se repita 3 vezes não é possível gerar o número de telefone', () => {
    expect(generatePhoneNumber(arrayComValoresErrados.array1)).toBe('não é possível gerar um número de telefone com esses valores');
    expect(generatePhoneNumber(arrayComValoresErrados.array2)).toBe('não é possível gerar um número de telefone com esses valores');
  });

  it('Se ao passar um array correto o retorno é (12) 34567-8901', () => {
    expect(generatePhoneNumber(arrayCerto)).toBe('(12) 34567-8901');
  });
});