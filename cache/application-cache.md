# Application Cache
⚠️ 注意：application-cache是已经被web标准废弃的功能     
Application Cache 是 HTML5引入的应用程序缓存功能，可以实现离线浏览网站的功能。    
## HTML配置
提供带有 cache manifest 的HTML文档，每个制定了manifest的页面在用户对其方位时都会被缓存
```html
<!DOCTYPE HTML>
<html manifest="demo.appcache">

<body>
文档内容......
</body>

</html>
```
## Manifest 文件
mnifest 告知浏览器被缓存的内容，以及不被缓存的内容，分为三个部分
1. CACHE MANIFEST - 在此标题下列出的文件在首次下载后进行缓存
2. NETWORK - 在此标题下列出的文件需要与服务器连接，且不会被缓存
3. FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如404页面）

```
CACHE MANIFEST
# 2022-03-17 v1.0.0 
/theme.css
/logo.gif
/main.js

NETWORK:
*

FALLBACK:
/html/ /offline.html
```

## 更新缓存
以下情况会更新缓存：
1. 用户晴空浏览器缓存
2. manifest文件被修改 （更新注释中的日期和版本号，可以使浏览器重新缓存文件）
3. 由程序来更新缓存

https://alistapart.com/article/application-cache-is-a-douchebag/

陷阱 #1：文件始终来自 APPLICATIONCACHE，即使您在线
陷阱 #2：APPLICATIONCACHE 仅在清单本身的内容发生变化时更新
陷阱 #3：APPLICATIONCACHE 是一个额外的缓存，而不是替代缓存
陷阱 #4：永远不要在遥远的未来缓存清单
陷阱 #5：非缓存资源不会加载到缓存页面上
