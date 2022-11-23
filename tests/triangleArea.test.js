const triangleArea = require('../src/triangleArea');

describe('Testa a função triangleArea', () => {
  it('Testa se ao chamarmos a função com os parâmetros 10 e 50 o retorno é 250', () => {
    expect(triangleArea(10, 50)).toBe(250);
  });

  it('Testa se ao chamarmos a função com os parâmetros 5 e 2 o retorno é 5', () => {
    expect(triangleArea(5, 2)).toBe(5);
  });

  it('Testa se ao chamarmos a função com os parâmetros 51 e 1 o retorno é 25.5', () => {
    expect(triangleArea(51, 1)).toBe(25.5);
  });

  it('Testa se ao chamarmos a função com um parâmetro inválido, diferente de número é lançado um erro', () => {
    expect(() => {triangleArea('51', 1)}).toThrow(new Error('Insira números por favor!'));
  });
});