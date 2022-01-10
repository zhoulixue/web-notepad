const sum = require('../src/sum')

// 精确匹配
test('adds 1 + 2 to equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})
// 对象匹配
test('obj', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})
// 相反的匹配
test('not zero', () => {
  expect(1 + 2).not.toBe(0)
})
test('not obj', () => {
  expect({ one: 1 }).not.toEqual({ two: 2 })
})
// 真值
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeFalsy()
  expect(n).not.toBeTruthy()
})
test('undefined', () => {
  const n = undefined
  expect(n).toBeUndefined()
  expect(n).not.toBeDefined()
  expect(n).toBeFalsy()
  expect(n).not.toBeTruthy()
})
// 数字
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
// 字符串
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
// Arrays and iterables
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
// 错误
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
