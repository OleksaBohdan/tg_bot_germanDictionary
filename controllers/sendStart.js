const sendMessage = require('../controllers/sendMessage');

module.exports = async function sendInfo(ctx, next) {
  const id = ctx.request.body.message.chat.id;
  const msg = ctx.request.body.message.text;

  const info = `
✌️ Просто введите слово к которому нужно найти артикль!
\n
Version: 1.0.0
Info: поскольку Бот на стадии тестирования просим извинения за возможные неполадки 😊
  `;

  if (msg.includes('/info') || msg.includes('/start')) {
    ctx.body = 'ok';
    sendMessage(id, info);
  } else {
    ctx.body = 'ok';
    next();
  }
};
