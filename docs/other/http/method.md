## GET

请求指定的页面信息，并返回实体主体。

## HEAD

类似于 get 请求，只不过返回的响应中没有具体的内容，用于获取报头

## POST

向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。

## PUT

从客户端向服务器传送的数据取代指定的文档的内容。

## DELETE

请求服务器删除指定的页面。

## CONNECT

HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。

## OPTIONS

允许客户端查看服务器的性能。 一般用于 CORS 预检请求。

## GET 与 POST 区别

- get 请求的参数一般是放在 url 中的 querystring，可以直接在网址中看到。post 既可以使用 querystring，也可以放在 requestbody 中。
- get 请求会被缓存，post 一般不会被缓存。
- get 请求参数有大小限制，post 没有限制。
- GET 书签可收藏，POST 为书签不可收藏。
- GET 后退按钮/刷新无害，POST 数据会被重新提交（浏览器应该告知用户数据会被重新提交）。
- GET 只允许 ASCII 字符。POST 没有限制。也允许二进制数据。
- get 应该是幂等，post 一般不是幂等的。