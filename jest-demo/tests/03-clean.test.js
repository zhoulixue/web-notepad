// 安装和移除
// 多次测试重复设置
beforeEach(() => {});
afterEach(() => {});
beforeEach(() => {
  return Promise.resolve(2);
});

// 一次性设置
beforeAll(() => {
  return Promise.resolve(2);
});

afterAll(() => {
  return Promise.resolve(2);
});

// 作用域
describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return Promise.resolve(2);
  });
  test('', () => {});
});
// 顶级的beforeEach 会比 describe 中的beforeEach 执行的更早
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});
