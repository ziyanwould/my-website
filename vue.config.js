const { defineConfig } = require("@vue/cli-service");
const PrerenderSPAPlugin = require("prerender-spa-plugin-next");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/app.scss";`,
      },
    },
  },
  lintOnSave: false,
  // eslint-disable-next-line no-dupe-keys
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        routes: ["/"], // 需要预渲染的页面，要与router路由一致
      }),
    ],
  },
});
