module.exports = [
  {
    title: 'RPC',
    path: '/other/rpc/base',
    collapsable: true,
    sidebarDepth: 1,
    children: [['/other/rpc/base.md', '基础概念']],
  },
  // {
  //   title: '浏览器',
  //   path: '/other/browser/browserframework',
  //   collapsable: true,
  //   sidebarDepth: 1,
  //   children: [
  //     ['/other/browser/browserframework.md', '现代浏览器架构'],
  //     [
  //       '/other/browser/open.md',
  //       '浏览器的工作原理: 从输入 URL 到页面展示经历过什么',
  //     ],
  //     ['/other/browser/reflow.md', '回流/重绘'],
  //     [
  //       '/other/browser/requestidlecallback.md',
  //       'requestAnimationFrame / requestIdleCallback',
  //     ],
  //     ['/other/browser/cache.md', '浏览器缓存'],
  //     ['/other/browser/storage.md', 'Web Storage'],
  //     ['/other/browser/priority.md', '浏览器资源加载优先级'],
  //   ],
  // },
  // {
  //   title: 'Web 性能优化',
  //   path: '/other/optimization/rail',
  //   collapsable: true,
  //   sidebarDepth: 1,
  //   children: [
  //     ['/other/optimization/rail.md', 'RAIL 用户性能评价模型'],
  //     ['/other/optimization/quota.md', '性能优化的指标'],
  //     ['/other/optimization/api.md', 'Web 性能检测 API'],
  //     [
  //       '/other/optimization/Critical_rendering_path.md',
  //       '渲染优化理论基础：关键渲染路径',
  //     ],
  //     ['/other/optimization/render.md', '渲染优化'],
  //     ['/other/optimization/resources.md', '资源优化'],
  //     ['/other/optimization/transport.md', '传输优化'],
  //     ['/other/optimization/lazy.md', '异步加载/预加载'],
  //   ],
  // },
  // {
  //   title: '计算机网络',
  //   path: '/other/network/',
  //   collapsable: true,
  //   sidebarDepth: 1,
  //   children: [
  //     ['/other/network/transport.md', 'TCP/IP'],
  //     ['/other/network/tcp.md', 'TCP 链接建立与释放'],
  //     ['/other/network/reliable.md', 'TCP 可靠传输工作原理'],
  //     ['/other/network/flowControl.md', 'TCP 流量控制'],
  //     ['/other/network/congestion.md', 'TCP 拥塞控制'],
  //     ['/other/network/dns.md', 'DNS'],
  //     ['/other/network/cdn.md', 'CDN'],
  //   ],
  // },
  {
    title: 'HTTP',
    path: '/other/http/url',
    collapsable: true,
    sidebarDepth: 1,
    children: [
      // ['/other/http/url.md', 'URL / URI'],
      // ['/other/http/message.md', 'HTTP 报文'],
      // ['/other/http/code.md', 'HTTP 状态码'],
      // ['/other/http/301.md', 'HTTP 重定向'],
      // ['/other/http/method.md', 'HTTP 请求方法'],
      // ['/other/http/cookie.md', 'HTTP cookie'],
      // ['/other/http/history.md', 'HTTP 发展历史'],
      // ['/other/http/connection.md', 'HTTP 1.x 链接管理'],
      // ['/other/http/http2.md', 'HTTP 2 更多新特新'],
      // ['/other/http/http3.md', 'HTTP 3'],
      // ['/other/http/cryptography.md', 'HTTPS 加密原理'],
      // ['/other/http/tls.md', 'HTTPS 加密过程'],
      // ['/other/http/hsts.md', 'HSTS'],
      // ['/other/http/cross.md', '跨域'],
      // ['/other/http/cors.md', 'HTTP CORS'],
      // ['/other/http/session.md', 'HTTP 会话管理：Session'],
      // ['/other/http/token.md', 'HTTP 会话管理：Token'],
    ],
  },
  // {
  //   title: 'Web 安全',
  //   path: '/other/security/xss',
  //   collapsable: true,
  //   sidebarDepth: 1,
  //   children: [
  //     ['/other/security/xss.md', 'XSS 攻击'],
  //     ['/other/security/xsrf.md', 'XSRF 攻击'],
  //     ['/other/security/ddos.md', 'DDOS 攻击'],
  //     ['/other/security/clickjacking.md', '点击劫持'],
  //     ['/other/security/sql.md', 'SQL 注入攻击'],
  //     ['/other/security/hijack.md', 'DNS / HTTP 劫持'],
  //     ['/other/security/ssl.md', 'SSL 剥离攻击'],
  //   ],
  // },
  // {
  //   title: '设计模式',
  //   path: '/other/design/coupling',
  //   collapsable: true,
  //   sidebarDepth: 1,
  //   children: [
  //     ['/other/design/coupling.md', '耦合性'],
  //     ['/other/design/privilege.md', '设计原则之最小权限原则'],
  //     ['/other/design/closed.md', '设计原则之开放-封闭原则'],
  //     ['/other/design/mvc.md', 'MVC/MVVM'],
  //     ['/other/design/mvcweb.md', 'MVC'],
  //     ['/other/design/factory.md', '创建模式之工厂模式'],
  //     ['/other/design/singleton.md', '创建模式之单例模式'],
  //     ['/other/design/observer.md', '行为模式之观察者模式/发布-订阅模式'],
  //     ['/other/design/iterator.md', '行为模式之迭代器模式'],
  //   ],
  // },
  // {
  //   title: 'Webpack 高级设置',
  //   path: '/other/webpack2/',
  //   collapsable: true,
  //   sidebarDepth: 2,
  //   children: [
  //     ['/other/webpack2/hmr.md', 'hot module replacement'],
  //     ['/other/webpack2/treeShaking.md', 'tree shaking'],
  //     ,
  //     ['/other/webpack2/codeSplitting.md', 'code splitting'],
  //     ['/other/webpack2/SplitChunksPlugin.md', 'SplitChunksPlugin'],
  //     ['/other/webpack2/MiniCssExtractPlugin.md', 'MiniCssExtractPlugin'],
  //     ['/other/webpack2/lazyLoading.md', 'LazyLoading'],
  //     ['/other/webpack2/prefetching.md', 'prefetch & preload'],
  //     ['/other/webpack2/shimming.md', 'shimming'],
  //   ],
  // },
  // {
  //   title: 'VSCode',
  //   path: '/other/vscode/',
  //   collapsable: true,
  //   sidebarDepth: 2,
  //   children: [['/other/vscode/settings.md', '配置文件']],
  // },
];
