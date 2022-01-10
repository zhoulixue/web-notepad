function fetchData(cb) {
  setTimeout(() => {
    cb('peanut butter')
  }, 2000);
}
function fetchData2() {
  return new Promise(resolve => {
    resolve('peanut butter')
  })
}
// 回调
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
// Promise
test('the data is peanut butter', () => {
  return fetchData2().then(data => {
    expect(data).toBe('peanut butter');
  });
});
// async/await
test('the data is peanut butter', async () => {
  const data = await fetchData2();
  expect(data).toBe('peanut butter');
});
