const trueOrFalse = require('../src/trueOrFalse');

describe('Testa a função trueOrFalse', () => {
  it('Testa se ao receber 2 parâmetros true retorna true', () => {
    expect(trueOrFalse(true, true)).toBe(true);
    expect(trueOrFalse(true, true)).toBeTruthy();
  });

  it('Testa se ao receber 2 parâmetros false retorna false', () => {
    expect(trueOrFalse(false, false)).toBe(false);
    expect(trueOrFalse(false, false)).toBeFalsy();
  });

  it('Testa se ao receber 1 parâmetro false e outro true retorna false', () => {
    expect(trueOrFalse(false, true)).toBe(false);
    expect(trueOrFalse(false, true)).toBeFalsy();
  });
});