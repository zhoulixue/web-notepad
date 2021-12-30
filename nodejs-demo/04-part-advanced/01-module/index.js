/**
 * 模块在首次加载后，将缓存在内存缓存区中
 * 对于相同模块的多次引用得到的都是同一个模块
 * 对于相同模块的多次引用，不会引起模块内代码的多次执行
 */
require('./testModule')
require('./testModule')

// 主模块判断
if (module === require.main) {
  console.log('This is the main module of application')
}
// 查询完成模块名
require.resolve('./testModule')
// 已加载模块的缓存区
require.cache[require.resolve('./testModule')]
// 删除缓存区模块
delete require.cache[require.resolve('./testModule')]
require('./testModule')

// __filename __dirname
console.log(__filename)
console.log(__dirname)