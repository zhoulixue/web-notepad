// 竞态问题
// 1. 点击按钮发起请求A
// 2. 再次点击按钮发起请求B
// 3. 请求B先返回
// 4. 请求A后返回，预期得到B的数据，结果错误的得到了A的数据

// 模拟请求
function request(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('request response', time)
      resolve(time)
    }, time);
  })
}

// let finalData;
// async function getData(time) {
//   finalData = await request(time)
// }
// // 发起A请求，3s 后返回
// getData(3000)
// // 发起B请求，1s 后返回
// getData(1000)

// // finalData预计是1000，但是实际是3000，出现了错误
// setTimeout(() => {
//   console.log('finalData', finalData)
// }, 4000);

// 设置一个竞态函数
function compete(cb) {
  let cleanup
  function onInvalidate (fn) {
    cleanup = fn
  }
  // 返回一个竞态函数
  return (...args) => {
    // 清除上一次函数的状态
    if (cleanup) {
      cleanup()
    }
    // 注册此次清楚状态的函数
    cb(onInvalidate, ...args)
  }
}
// getData改造
let finalData2
async function getData2(onInvalidate, time) {
  // 过期标记
  let expired = false;
  onInvalidate(() => {
    // 无效时标记过期
    expired = true;
  })
  const res = await request(time)
  if (!expired) {
    finalData2 = res
  }
}
// 获取竞态函数
const getData2Compete = compete(getData2)

// 发起A请求，3s 后返回
getData2Compete(3000)
// 发起B请求，1s 后返回
getData2Compete(1000)
// finalData2预计是1000
setTimeout(() => {
  console.log('finalData2', finalData2)
}, 4000);
