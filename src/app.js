const Koa = require('koa');
const Router = require('koa-router');
const config = require('../config/config');
const findArticle = require('../controllers/findArticle');
const sendMessage = require('../controllers/sendMessage');
const sendInfo = require('../controllers/sendStart');

const app = new Koa();
app.use(require('koa-bodyparser')());
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = 'ok';
});

router.post(`/${config.TOKEN}`, sendInfo, async (ctx, next) => {
  const userId = ctx.request.body.message.from.id;
  const message = ctx.request.body.message.text;
  const result = await findArticle(userId, message);
  sendMessage(userId, result);
  ctx.status = 200;
  ctx.body = 'ok';
});

app.use(router.routes());

module.exports = app;
