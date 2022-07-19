const Dictionary = require('../models/Dictionary');

module.exports = async function findArticle(userId, message) {
  const word = message.split(' ', 1)[0].toLowerCase();
  const result = await Dictionary.find({ word: word });
  console.log(result);

  if (result.length == 0) {
    return 'keine';
  } else {
    const firstResult = result[0];
    const resultText = `
${firstResult.artirle}
${firstResult.word}
Возмонжный перевод 👇
${firstResult.translate}
    `;

    return resultText;
  }
};
