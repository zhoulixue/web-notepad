
let G = {};
const app = function () {

};

app.get = function(str, func) {
  console.log('get 方法');
  // 注册方法
  G[str] = func;
};

app.post = function() {
  console.log('post 方法');
};

app.get('login', (req, res) => {
  console.log('login');
});
