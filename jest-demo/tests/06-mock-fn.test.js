
jest.mock('../src/foo'); // this happens automatically with automocking
const foo = require('../src/foo');

// foo is a mock function
foo.mockImplementation(() => 42);

const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call')
  // .mockName('add42')

test('foo', () => {
  expect(foo()).toBe(42)
  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
})