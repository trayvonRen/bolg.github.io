## DNS 劫持

域名劫持是互联网攻击的一种方式，通过攻击域名解析服务器（DNS），或伪造域名解析服务器（DNS）的方法，把目标网站域名解析到错误的 IP 地址从而实现用户无法访问目标网站的目的或者蓄意或恶意要求用户访问指定 IP 地址（网站）的目的。

### DNS 劫持的方法

- 本机 DNS 劫持  
  攻击者通过某些手段使用户的计算机感染上木马病毒，或者恶意软件之后，恶意修改本地 DNS 配置，比如修改本地 hosts 文件，缓存等
- 路由 DNS 劫持  
  很多用户默认路由器的默认密码，攻击者可以侵入到路由管理员账号中，修改路由器的默认配置
- 攻击 DNS 服务器  
  直接攻击 DNS 服务器，例如对 DNS 服务器进行 DDOS 攻击，可以是 DNS 服务器宕机，出现异常请求，还可以利用某些手段感染 dns 服务器的缓存，使给用户返回来的是恶意的 ip 地址

### 解法方法

- 确保电脑没有被注入木马，篡改 host 文件，dns 缓存等
- 联系路由器，dns 服务器运维人员，一般来说是运营商，让他们解决

## HTTP 劫持

- 标识 HTTP 连接。在天上飞的很多连接中，有许多种协议，第一步做的就是在 TCP 连接中，找出应用层采用了 HTTP 协议的连接，进行标识
- 篡改 HTTP 响应体，可以通过网关来获取数据包进行内容的篡改
- 抢先回包，将篡改后的数据包抢先正常站点返回的数据包先到达用户侧，这样后面正常的数据包在到达之后会被直接丢弃

![](/img/other/hijack.jpg)

### 解决方法

- 传输前加密

最简单就是使用 HTTP, 当然也可以自己定义加密的规则

- 对于 iframe 的方式劫持

检查到网页在 iframe 中则自动重新加载一次

```html
<script type="text/javascript">
  try {
    if (self != top) {
      //alert("广告跳转");
      top.location = self.location
    }
  } catch (e) {}
</script>
```

- 针对注入 dom 节点的情况

初始化时做检查，而且后续 dom 注入也做检查。可以检查 dom 中是否含有白名单以外的 http 链接，如果有，就可以判定为 http 劫持。
