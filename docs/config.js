module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  base: "/duziteng.github/",
  title: 'Test', // 网站的标题
  description: '测试页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: '/headers.png' }]
   ] // 需要被注入到当前页面的 HTML <head> 中的标签
}