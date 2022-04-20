function compose (middleware) {
  return function (context, next) {
    function dispatch (i) {
      let fn = middleware[i];
      if (!fn) {
        return Promise.resolve();
      }
      try {
        return Promise.resolve(fn(context, () => {
          return dispatch(i + 1)
        }))
      } catch (err) {
        return Promise.reject(err)
      }
    }
    return dispatch(0)
  }
}

const f1 = async (ctx, next) => {
  console.log("A1")
  await next()
  console.log("A2")
}
const f2 = async (ctx, next) => {
  console.log("B1")
  await next()
  console.log("B2")
}
const f3 = async (ctx, next) => {
  console.log("C1")
  await next()
  console.log("C2")
}

const fn = compose([f1, f2, f3])
fn();
