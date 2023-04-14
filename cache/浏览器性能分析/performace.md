# performance.timing
## 总的执行顺序和节点
1. 上一个页面卸载
* navigationStart（前一个网页unload）
* unloadEventStart/unloadEventEnd（同域的前一个网页unload）
2. 重定向
* redirectStart/redirectEnd
* fetchStart
3. DNS解析
* domainLookupStart/domainLookupEnd
4. TCP三次握手
* connectStart/connectEnd
* secureConnectionStart
5. 请求数据
* requestStart
* responseStart/responseEnd
6. JS执行、DOM渲染
* domLoading
* domInteractive
* domContentLoadedEventStart/domContentLoadedEventEnd
* domComplete
7. load事件
* loadEventStart/loadEventEnd

## 相关的时间点
1. navigationStart
* 同一个浏览器上下文的**上一个文档卸载**（unload）结束时的时间戳
* 如果没有上一个文档，这个值会和 fetchStart 相同
2. unloadEventStart
* **unload事件**抛出时的时间戳
* 如果没有上一个文档，会返回0
3. unloadEventEnd
* **unload事件**处理完成时的时间戳
* 如果没有上一个文档，会返回0
4. redirectStart
* 第一个HTTP重定向开始时的时间戳
* 如果没有重定向，或者重定向中的一个不同源，这个值会返回0
5. redirectEnd
* 第一个HTTP重定向完成时的时间戳
* 如果没有重定向，或者重定向中的一个不同源，这个值会返回0
6. fetchStart
* 浏览器准备好使用HTTP请求来获取文档的时间戳
7. domainLookupStart
* 域名查询开始的时间戳
* 如果使用了持续链接，或者缓存了域名信息，则这个值将会和 fetchStart 相同
8. domainLookupEnd
* 域名查询结束的时间戳
* 如果使用了持续链接，或者缓存了域名信息，则这个值将会和 fetchStart 相同
9. connectStart
* 返回 HTTP 请求开始向服务器发送时的时间戳
* 如果使用了持久连接，则返回值等同于 fetchStart 属性的值
10. connectEnd
* 返回浏览器与服务器之间的连接建立时的时间戳
* 如果使用了持久连接，则返回值等同于 fetchStart 属性的值
11. secureConnectionStart
* 返回浏览器与服务器开始安全链接的握手时的时间戳
* 如果当前网页不要求安全连接，则返回 0
12. requestStart
* 返回浏览器向服务器发出 HTTP 请求时的时间戳
13. responseStart
* 返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的时间戳
14. responseEnd
* 返回浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）最后一个字节时时间戳。
15. domLoading
* 返回当前网页 DOM 结构开始解析时的时间戳
* 即Document.readyState 属性变为loading
16. domInteractive
* 返回当前网页 DOM 结构结束解析、开始加载内嵌资源时的时间戳
* 即Document.readyState 属性变为 interactive
17. domContentLoadedEventStart
* 所有需要被执行的脚本已经被**解析**时的时间戳
* 即解析器发送 DOMContentLoaded 事件
18. domContentLoadedEventEnd
* 返回当所有需要立即执行的脚本已经被**执行**（不论执行顺序）时的时间戳
19. domComplete
* 当前文档解析完成时的时间戳
* 即Document.readyState 属性变为 complete
20. loadEventStart
* load事件被发送时的时间戳
21. loadEventEnd
* 当load事件结束，即加载事件完成时的时间戳
