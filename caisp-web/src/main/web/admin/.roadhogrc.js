const path = require('path')
const { version } = require('./package.json')

export default {
  entry: 'src/index.js',
  theme: "./theme.config.js",
  publicPath: `/signboard/dist/admin/${version}/`,
  outputPath: `./dist/${version}`,
  // 接口代理示例
  proxy: {
    "/signboard": {
      "target": "http://localhost:8028/signboard/",
      "changeOrigin": true,
      "pathRewrite": { "^/signboard" : "" }
    }
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    }
  },
  dllPlugin: {
    exclude: ["babel-runtime", "roadhog", "cross-env"],
    include: ["dva/router", "dva/saga", "dva/fetch"]
  }
}
