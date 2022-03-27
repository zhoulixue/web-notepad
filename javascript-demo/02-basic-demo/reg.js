// 正则表达式
// 1. 字符类
var reg1 = /[a-zA-Z0-9]/
var reg2 = /^[a-zA-Z0-9]/
var reg3 = /[.]/
var reg4 = /[\w]/ // 等价于 /[a-zA-Z0-9]/
var reg5 = /[\W]/ // 等价于 /[^A-Za-z0-9]/
var reg6 = /[\s]/
var reg7 = /[\S]/
var reg8 = /[\d]/ // 等价于 /[0-9]/
var reg9 = /[\D]/ // 等价于 /[^0-9]/
var reg10 = /[\b]/ // 单词边界, 及位于 \w 和 \W 间的边界
var reg11 = /[\B]/ // 非单词边界

// 2. 重复
var reg21 = /[\s]{1,3}/ // 至少1次，不超过3次
var reg22 = /[\s]{1,}/ // 1次或更多
var reg23 = /[\s]{1}/ // 1次
var reg24 = /[\s]?/ // 等价于 {0,1}
var reg25 = /[\s]+/ // 等价于 {1,}
var reg26 = /[\s]*/ // 等价于 {0,}
// 3. 非贪婪的重复
var reg27 = /a+?/ // 只匹配一个a

// 4. 选择、分组和引用
var reg41 = /ab|cd|ef/ // 选择
var reg42 = /(ab|cd)+|ef/ // 分组
var reg43 = /(['"])[^'"]*\1/ // 引用
var reg44 = /([Jj]ava(?:[Ss]cript?))\sis\s(fun\w*)/ // 只分组

// 5. 指定匹配的位置
var reg51 = /\b[Jj]ava\b/ // 匹配 java
var reg52 = /\B[Ss]cript\B/ // 匹配 javascript
var reg53 = /[Jj]ava([Ss]cript)?(?=\:)/ // 先行断言
var reg54 = /[Jj]ava(?!Script)([A-Z]\w*)/ // 负向先行断言
// 6. 修饰符
var reg61 = /[Jj]ava/igm

// 7. String的模式匹配方法
'JavaScript'.search(/script/i) // search不支持全局搜索，会忽略g
'javascript'.replace(/javascript/ig, 'JavaScript') // replace支持全局，支持索引
`"abcd"`.replace(/"([^"]*)"/g, '$1')
'1 plus 2 equals 3'.match(/\d/g) // 有g，返回所有匹配的数组
'visit my blog at http://www.example.com/~david'.match(/(\w+):\/\/([\w.]+)\/(\S*)/) // 没有g, match[0]是匹配的字符串 match[n]存放的是$n
'1, 2, 3, 4'.split(/\s*, \s*/) // split

// 8. 正则的 exec
var s = 'JavaScript is more fun than Java'
var reg81 = /Java/g
var result;
while ((result = reg81.exec(s)) !== null) { // 没有g时，返回匹配的数组，有g时，重复执行exec会返回所有符合条件的数组
  console.log(result[0], resul[1])
}
/java/i.test('Java') // test的行为和exec一样，只不过会返回true，false