const verify = (array) => {
  if (array.length === 0) {
    throw new Error('Array vazio!');
  }
};

function techList(arrayTech, nome) {
  verify(arrayTech);
  const list = [];

  for (let index = 0; index < arrayTech.length; index += 1) {
    list.push({
      tech: arrayTech[index],
      name: nome,
    });
  }

  return list.sort((a, b) => {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
}

module.exports = techList;