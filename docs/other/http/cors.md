## 功能概述

跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。

CORS 请求失败会产生错误，但是为了安全，在 JavaScript 代码层面是无法获知到底具体是哪里出了问题。你只能查看浏览器的控制台以得知具体是哪里出现了错误。

接下来的内容将讨论相关场景，并剖析该机制所涉及的 HTTP 首部字段。

## 使用场景

规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。

### 简单请求

某些请求不会触发 CORS 预检请求。本文称这样的请求为“简单请求”，请注意，该术语并不属于 Fetch （其中定义了 CORS）规范。若请求满足所有下述条件，则该请求可视为“简单请求”：

#### 以下条件下属于简单请求

##### 使用下列方法之一：

GET，HEAD，POST

##### Fetch 规范定义了对 CORS 安全的首部字段集合，不得人为设置该集合之外的其他首部字段。该集合为：

- Accept
- Accept-Language
- Content-Language
- Content-Type （需要注意额外的限制）
- DPR
- Downlink
- Save-Data
- Viewport-Width
- Width

##### Content-Type 的值仅限于下列三者之一：

- text/plain
- multipart/form-data
- application/x-www-form-urlencoded
- 请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器；XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问。
- 请求中没有使用 ReadableStream 对象。

#### 客户端和服务器之间使用 CORS 首部字段来处理权限

![](/img/other/easycors.png)

响应头需要有

`Access-Control-Allow-Origin: http://origin.xx`

### 预检请求

与前述简单请求不同，“需预检的请求”要求必须首先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

#### 当请求满足下述任一条件时，即应首先发送预检请求：

##### 使用了下面任一 HTTP 方法：

PUT, DELETE, CONNECT, OPTIONS, TRACE,PATCH

#### 人为设置了对 CORS 安全的首部字段集合之外的其他首部字段。该集合为：

- Accept
- Accept-Language
- Content-Language
- Content-Type (需要注意额外的限制)
- DPR
- Downlink
- Save-Data
- Viewport-Width
- Width

#### Content-Type 的值不属于下列之一:

- application/x-www-form-urlencoded
- multipart/form-data
- text/plain
- 请求中的 XMLHttpRequestUpload 对象注册了任意多个事件监听器。
- 请求中使用了 ReadableStream 对象。

![](/img/other/precors.png)

预检请求头:  
`Access-Control-Request-Method: POST`
`Access-Control-Request-Headers: X-PINGOTHER Content-Type`  
预检响应头:  
`Access-Control-Request-Method: POST`  
`Access-Control-Request-Headers: X-PINGOTHER, Content-Type`

### 附带身份凭证的请求

Fetch 与 CORS 的一个有趣的特性是，可以基于 HTTP cookies 和 HTTP 认证信息发送身份凭证。一般而言，对于跨域 XMLHttpRequest 或 Fetch 请求，浏览器不会发送身份凭证信息。如果要发送凭证信息，需要设置 XMLHttpRequest 的某个特殊标志位。

```js
xhr.withCredentials = true
```

修改了这个属性，请求就会携带 cookie
并且响应头必须要有  
 `Access-Control-Allow-Credentials: true`  
对于附带身份凭证的请求，服务器不得设置  
 `Access-Control-Allow-Origin` 的值为“\*”。

## 参考资料

[MDN: 跨源资源共享（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
