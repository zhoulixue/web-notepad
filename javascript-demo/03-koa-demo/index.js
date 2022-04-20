const Koa = require("koa")

const app = new Koa()

// 中间件A
app.use(async (ctx, next) => {
    console.log("A1")
    await next()
    console.log("A2")
});
// 中间件B
app.use(async (ctx, next) => {
    console.log("B1")
    await next()
    console.log("B2")
});
// 中间件C
app.use(async (ctx, next) => {
    console.log("C1")
    await next()
    console.log("C2")
});

app.listen(3000);

// 输出
// A1 -> B1 -> C1 -> C2 -> B2 -> A2
