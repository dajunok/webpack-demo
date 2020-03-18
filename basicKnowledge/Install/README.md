一、webpack常用安装包
------------------自身安装相关包

npm install --save-dev  webpack-cli

------------------babel文件转换(ES6转ES2005)相关包【webpack 4.x | babel-loader 8.x | babel 7.x】
npm install -D html-webpack-plugin
npm install -D babel-loader @babel/core @babel/preset-env webpack
npm install -D @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties
npm install -D @babel/runtime


------------------Vue相关安装包：
npm install vue 
npm install -D vue-loader vue-template-compiler 
npm install vue-router
npm install vuex --save

-----------------url相关文件、图片、CSS样式文件加载相关包
npm install -D css-loader  style-loader vue-style-loader  url-loader
npm install -D sass-loader node-sass
npm install -D less less-loader
npm install -D stylus stylus-loader
npm i -D postcss-loader autoprefixer
npm install -g cnpm --registry=https://registry.npm.taobao.org   //这个采用淘宝镜像网站加快安装node-sass
-----------------常用
npm install -D mini-css-extract-plugin
npm install rimraf --save-dev
npm install --save-dev optimize-css-assets-webpack-plugin

-----------------其他
npm install dotenv

npm install terser-webpack-plugin --save-dev
npm install copy-webpack-plugin --save-dev
npm install --save-dev preload-webpack-plugin@next    //^3.0.0-beta.4

-----------------安装bootstrap前端CSS框架
npm install bootstrap@3
npm install jquery


//////////////////////案例
"devDependencies": {
    "@babel/core": "^7.8.6",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.8.3",
    "@babel/preset-env": "^7.8.6",
    "@babel/runtime": "^7.8.4",
    "autoprefixer": "^9.7.4",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.4.2",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.11.1",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.13.1",
    "postcss-loader": "^3.0.0",
    "rimraf": "^3.0.2",
    "sass-loader": "^8.0.2",
    "style-loader": "^1.1.3",
    "stylus": "^0.54.7",
    "stylus-loader": "^3.0.2",
    "url-loader": "^3.0.0",
    "vue-loader": "^15.9.0",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.11",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11"
  },
  "dependencies": {
    "vue": "^2.6.11",
    "vue-router": "^3.1.6",
    "vuex": "^3.1.2"
  }

  /////////====================================================================webpack配置案例一
  const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
const webpack =require('webpack');


const rm = require('rimraf');  //引入rimraf包，用于每次构建时先删除dist目录。

//先删除dist目录再构建
rm(path.join(__dirname, './dist'), (err) => {
    if (err) throw err;
});

module.exports={

    devtool:'source-map',      //源代码映射，'source-map'方便开发环境调试。 none 用于生产环境
    context:path.resolve(__dirname,'src'),   //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    mode:"development", // production：生产模式； development：开发模式  
    entry:{      //JavaScript执行入口文件
        main:'./main.js',        
    },
    output:{   
      path:path.resolve(__dirname,'./dist'),   //将输出文件都放到dist目录下 
      filename:"js/[name].js",   //决定了每个入口(entry) 输出 bundle 的名称。
      chunkFilename: 'js/[name].[chunkhash:8].js', //决定了非入口(non-entry) chunk 文件的名称。
      library:'myLibrary',    //library规定了组件库返回值的名字，也就是对外暴露的模块名称
      libraryTarget: 'umd',   //libraryTarget就是配置webpack打包内容的模块方式的参数：umd: 将你的library暴露为所有的模块定义下都可运行的方式。
      publicPath:'/myvue/',
    },
    module:{
        rules:[
            {
                test: /\.(css|less|sass|scss)$/,
                use: [
                  { loader: "vue-style-loader" },
                  { 
                    loader: MiniCssExtractPlugin.loader,  //提取.css文件
                    options:{
                        publicPath:'/myvue/',  //给提取后的目标.css文件中的url路径最前面添加../（解决css文件构建后图片路径url引用错误问题。url路径由加载器url-loader设置决定）
                    },
                  },
                  { loader: "css-loader" },     // translates CSS into CommonJS
                  { loader: "postcss-loader" }, // 为css样式自动加入浏览器前缀
                  { loader: "less-loader" },    // compiles Less to CSS
                  {
                    loader: "sass-loader", 
                    options: {  sourceMap: false },
                  },
                ]
            },
            //Vue-Loader是一个webpack的加载器，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            //配置babel-loader，Babel 是一个 JavaScript 编译器，可以把ES6的语法转为兼容浏览器的ES5语法
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {  
                    presets: [['@babel/preset-env',{
                      useBuiltIns:'usage',  //解决360浏览器、IE浏览器不兼容问题（需安装"babel-polyfill"插件,）
                    }]],
                    cacheDirectory:true,   //可以通过使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。 这会将转译的结果缓存到文件系统中。
                    //"sourceMaps": "inline",   //"inline"：生成内联源码映射表（inline source maps）。
                    plugins: ['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties'],  //babel引入 babel runtime 作为一个独立模块，来避免重复引入。
                }
              }
            },            
            //配置文件加载器url-loader
            {
                //url-loader加载器处理图片文件
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    esModule: false,    //esModule指你的模块是否采用ES modules。如果你的JS采用的是CommonJS模块语法，则此处应该设置为false，否则图片不能正常显示。
                    limit: 10240,       // 小于10kb将会转换成base64
                    name: 'img/[name].[hash:8].[ext]',   // 大于10kb的资源输出地址，[name]是名字，[ext]后缀  
                    fallback: 'file-loader'    // 大于10kb的资源采用file-loader加载器。file-loader是默认值可以不设置      
                }
            },
            {   //url-loader加载器处理视频文件
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    esModule: false,  //esModule指你的模块是否采用ES modules。如果你的JS采用的是CommonJS模块语法，则此处应该设置为false，否则图片不能正常显示。
                    limit: 10240,
                    name: 'media/[name].[hash:8].[ext]',
                    fallback: 'file-loader' // 大于10kb的资源采用file-loader加载器。file-loader是默认值可以不设置
                }
            },
        ]
    },
    resolve: {
        // 设置别名
        alias:{
            '@': path.resolve(__dirname,'src')
        }  
    }, 
    //配置插件---------------
    plugins: [
        new VueLoaderPlugin(),  //创建Vue-Loader实例
        new HtmlWebpackPlugin({
            templateParameters: (compilation, assets, assetTags, options) => {
                return {
                  'BASE_URL': './',  //覆盖模板中使用的对应参数（即对模板中使用的BASE_URL参数进行赋值）
                  'author':"vue-webpack",
                };
            },
            //favicon:'../public/favicon.ico',
            title: 'webpack-ok',            
            filename: 'index.html', // 生成的html文件名，该文件将被放置在输出目录 
            chunks: ['main'],        
            template: path.join(__dirname, './public/index.ejs'),   // 模板源html或ejs文件路径
            minify:{  //代码压缩
                    removeRedundantAttributes:true, // 删除多余的属性
                    collapseWhitespace:true, // 折叠空白区域
                    removeAttributeQuotes: true, // 移除属性的引号
                    removeComments: true, // 移除注释
                    collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
        }),
        //配置MiniCssExtractPlugin插件：提取与压缩.css文件。
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',    //指定提取的CSS文件路径与名称
          chunkFilename: 'css/[id].css',
        }),

        //new InlineManifestWebpackPlugin('vendor01'),   // 将运行代码直接插入html文件中，因为这段代码非常少且时常改动，这样做可以避免一次请求的开销
    ],
    

};
