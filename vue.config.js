module.exports = {
  configureWebpack: {
    resolve: {
      alias: {/* 别名 */
        components: '@/components', /* @表示src */
        content: 'components/content',
        common: 'components/common',
        assets: '@/assets',
        network: '@/network',
        views: '@/views'
      }
    }
  }
  // outputDir: 'dist', // build输出目录
  // assetsDir: 'assets', // 静态资源目录（js, css, img）
  // lintOnSave: false, //是否开启eslint
  // devServer: {
  //   open: true, // 是否自动弹出浏览器页面
  //   host: 'localhost',
  //   port: '8080',
  //   https: false, // 是否使用https协议
  //   hotOnly: false, // 是否开启热更新
  //   proxy: {
  //     '/api': {
  //       target: 'http://122.51.97.136:82', // API服务器的地址
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
/* router 和 store不用配置别名，不需要在其他地方引用，
所有(.vue)文件里可以通过 this.$router 和 this.$router 拿到 router 和 store 对象 */
