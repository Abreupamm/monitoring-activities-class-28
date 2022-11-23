function triangleArea(base, altura) {
  if (typeof base !== 'number' || typeof altura !== 'number') {
    throw new Error('Insira números por favor!');
  }

  return (base * altura) / 2;
}

module.exports = triangleArea;