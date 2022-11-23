const verifyLength = (array) => {
  const erroTamanho = 'array com tamanho incorreto';
  if (array.length !== 11) {
    return erroTamanho;
  }
  return false;
};

const verifyIndex = (numeroAtual, contador) => {
  if (numeroAtual < 0 || numeroAtual > 9 || contador >= 3) {
    return true;
  }
  return false;
};

const verifyValues = (array, numeroAtual, contador) => {
  for (let secondIndex of array) {
    if (numeroAtual === secondIndex) {
      contador += 1;
    }
    const verify = verifyIndex(numeroAtual, contador);
    return verify;
  }
};

const montaNumero = (numberArray) => {
  const pt1 = `(${numberArray[0]}${numberArray[1]}) ${numberArray[2]}${numberArray[3]}`;
  const pt2 = `${numberArray[4]}${numberArray[5]}${numberArray[6]}`;
  const pt3 = `-${numberArray[7]}${numberArray[8]}${numberArray[9]}${numberArray[10]}`;

  return `${pt1}${pt2}${pt3}`;
};

function generatePhoneNumber(numberArray) {
  const erroNumero = 'não é possível gerar um número de telefone com esses valores';

  const errorLength = verifyLength(numberArray);
  if (errorLength) {
    return errorLength;
  }
  let numeroAtual = 0;
  let contador = 0;

  for (let index of numberArray) {
    numeroAtual = index;

    const verifyValuesArray = verifyValues(numberArray, numeroAtual, contador);
  
    if (verifyValuesArray) {
      return erroNumero;
    }
  
    contador = 0;
  }

  return montaNumero(numberArray);
}

module.exports = generatePhoneNumber;