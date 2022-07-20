const Dictionary = require('../models/Dictionary');

module.exports = async function findArticle(userId, message) {
  const word = message.split(' ', 1)[0].toLowerCase();
  const result = await Dictionary.find({ word: word });

  if (result.length == 0) {
    return '😱 keine Worte | Не найдено';
  } else {
    const firstResult = result[0];
    let translateResult = '';

    for (let i = 0; i < result.length; i++) {
      translateResult +=
        '🪄' +
        result[i].translate
          .replace(/\[|\]/g, '')
          .replace(/[^а-яёА-ЯЁ ]/g, '')
          .replace(/\s+/g, ' ')
          .trim() +
        '\n';
    }
    let artirle;
    if (firstResult.artirle == 'der') {
      artirle = `🔵 der`;
    } else if (firstResult.artirle == 'die') {
      artirle = `🔴 die`;
    } else if (firstResult.artirle == 'das') {
      artirle = `🟢 das`;
    }
    const resultText = `
${artirle} ${firstResult.word}
Возможный перевод 👇
${translateResult}
    `;

    return resultText;
  }
};
