// 模拟函数
// 使用 mock 函数
test('mock函数', () => {
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // 此 mock 函数被调用了两次
  expect(mockCallback.s.calls.length).toBe(2);

  // 第一次调用函数时的第一个参数是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 第二次调用函数时的第一个参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 第一次函数调用的返回值是 42
  expect(mockCallback.mock.results[0].value).toBe(42);
})

// Mock 的返回值
test('Mock 返回值', () => {
  const myMock = jest.fn();
  console.log(myMock());
  // > undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10, 'x', true, true
})
