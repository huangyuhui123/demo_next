const withLess = require("@zeit/next-less");
const lessToJS = require('less-vars-to-js')
const fs = require('fs');
const path = require('path');

if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => { }
  }

module.exports = withLess({
  cssModules: true,   //变量名也更改为哈希值
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: lessToJS(
      fs.readFileSync(path.resolve(__dirname, './assets/antd.less'), 'utf8')
    ),
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"   //变量名称不变,后面只添加hash值
  }
})