import axios from 'axios'
import { getTestMiniProgram } from '../src/get-data'

import defaultExport, {bar, foo} from '../src/foo-bar-baz';

// 模拟模块
jest.mock('axios')
test('should fetch users', async () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  const data = await getTestMiniProgram()
  expect(data).toEqual(users)
})
// 模拟部分模块
jest.mock('../src/foo-bar-baz', () => {
  const originalModule = jest.requireActual('../src/foo-bar-baz');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});