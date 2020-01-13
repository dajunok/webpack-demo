const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack =require('webpack');

module.exports={
    context:path.resolve(__dirname,'src'),   //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    mode:"development", // production：生产模式； development：开发模式  
    entry:'./main.js',  //JavaScript执行入口文件
    output:{   
      path:path.resolve(__dirname,'./dist'),   //将输出文件都放到dist目录下 
      filename:'index.js',   //将所有依赖的模块合并输出到一个bundle.js文件      
      library:'myLibrary',    //library规定了组件库返回值的名字，也就是对外暴露的模块名称
      libraryTarget: 'umd',   //libraryTarget就是配置webpack打包内容的模块方式的参数：umd: 将你的library暴露为所有的模块定义下都可运行的方式。
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                  { loader: "vue-style-loader" },
                  { loader: "css-loader" },
                ]
            },
            //配置加载器less-loader
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            //Vue-Loader是一个webpack的loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件
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
                    presets: ['@babel/preset-env'],
                    cacheDirectory:true,   //可以通过使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。 这会将转译的结果缓存到文件系统中。
                    plugins: ['@babel/plugin-transform-runtime'],  //babel引入 babel runtime 作为一个独立模块，来避免重复引入。
                }
              }
            },
            //配置文件加载器file-loader
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: '/img/'
                    }
                  }
                ]
            },
            //配置EJS模板引擎
            {
                test: /\.(tpl|ejs)$/,
                loader: 'ejs-loader'
            },
        ]
    },
    resolve: {
        // 设置别名
        alias:{
            '@': path.resolve(__dirname,'src')
        }  
    },
    plugins: [
        new VueLoaderPlugin(),  //创建Vue-Loader实例
        new HtmlWebpackPlugin({
            templateParameters: (compilation, assets, assetTags, options) => {
                return {
                  compilation,
                  webpackConfig: compilation.options,
                  htmlWebpackPlugin: {
                    tags: assetTags,
                    files: assets,
                    options
                  },
                  'BASE_URL': '/',
                  'author':"vue-webpack",
                };
            },
            //favicon:'../public/favicon.ico',
            title: 'webpack-ok',            
            filename: 'index.html', // 生成的html文件名，该文件将被放置在输出目录        
            template: path.join(__dirname, './public/index.html')   // 源html文件路径
        }),
        new webpack.DefinePlugin({
            host: JSON.stringify(process.env.DB_HOST),          //使用Node.js模块：process.env 属性返回包含用户环境的对象。
        }),
    ],


};
