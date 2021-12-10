https://cloud.tencent.com/developer/news/588770
# 缓存
## 刷新和访问行为
1. 在URL输入栏中输入然后回车/通过书签访问
2. F5/点击工具栏中的刷新按钮/右键菜单重新加载
3. Ctrl+F5 (完全不使用HTTP缓存)

## 强制缓存
1. Expires（已经不再用了）
2. Cache-Control    
> max-age   
> public  响应可以被任何缓存区缓存    
> preivate 只能针对个人用户，而不能被代理服务器缓存 
> no-cache 强制客户端向服务器发送请求  
> no-store 禁止一切缓存    
http状态 200 disk cache
## 对比缓存
1. Last-Modified / If-Modified-Since
2. Etag / If-None-Match
