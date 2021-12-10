// const myUrl = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?name=xiaoming&age=1#hash');
// const params = myUrl.searchParams;

// console.log(params);
// console.log(params.get('name'));
// console.log(params.toString());

// const testParams = new URLSearchParams({
//   user: 'abc',
//   query: [1, 2, 3],
// });
// console.log(testParams);

// const testParams2 = new URLSearchParams([
//   ['user', 'abc'],
//   ['query', 'first'],
//   ['query', 'second'],
// ]);
// console.log(testParams2);

// let myUrl = new URL('test/index.html', 'https://example.com');
// // https://example.com/test/index.html

// myUrl = new URL('http://Example.com/test/index.html', 'https://example.com');
// // http://example.com/test/index.html

let params;
params = new URLSearchParams('user=abc&query=xyz');
params = new URLSearchParams('?user=abc&query=xyz');
params = new URLSearchParams({ user: 'abc', query: ['first', 'second'] });
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second'],
]);

params.append('xxx', 123);
params.delete('user');
params.forEach((v, key) => {
  console.log(v, key);
});
params.get('user');
params.getAll('query');
params.has('user');
params.keys();
// 如果存在任何名称为 name 的预先存在的名称-值对，则将第一个此类对的值设置为 value 并删除所有其他名称。 如果没有，则将名称-值对追加到查询字符串。
params.set('user', 'def');
params.sort();
params.values();
params.toString();