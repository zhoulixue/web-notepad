const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log(ctx);
  console.log(ctx.request);
  console.log(ctx.response);

});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(7000);
