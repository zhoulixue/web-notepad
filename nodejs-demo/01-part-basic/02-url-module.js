// base 验证input的origin是否符合预期
let myUrl = new URL('test/index.html', 'https://example.com')
console.log(myUrl)
/**
 * 
  URL {
  href: 'https://example.com/test/index.html',
  origin: 'https://example.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'example.com',
  hostname: 'example.com',
  port: '',
  pathname: '/test/index.html',
  search: '',
  searchParams: URLSearchParams {},
  hash: '' }
 */
myUrl = new URL('http://Example.com.test/index.html', 'https://example.com')
console.log(myUrl)
/**
  URL {
  href: 'http://example.com.test/index.html',
  origin: 'http://example.com.test',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'example.com.test',
  hostname: 'example.com.test',
  port: '',
  pathname: '/index.html',
  search: '',
  searchParams: URLSearchParams {},
  hash: '' }
 */
let params
params = new URLSearchParams('user=abc&query=xyz')
params = new URLSearchParams('?user=abc&query=xyz')
params = new URLSearchParams({ user: 'abc', query: ['first', 'second'] })
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second']
])

params.append('xxx', 123)
params.delete('user')
params.forEach((value, key) => {
  console.log(value, key)
})
params.get('user')
params.getAll('query') // [ 'first', 'second' ]
params.has('user')
params.keys()
params.set('user', 'def')
console.log(params)
params.set('query', 'aaa')
console.log(params)
params.sort()
console.log(params)
params.values()
console.log(params.toString())

