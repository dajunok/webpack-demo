require('dotenv').config();     //引入.env文件（放置在项目根目录）中定义的环境变量
const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
const CopyWebpackPlugin = require('copy-webpack-plugin'); //将单个文件或整个目录复制到生成目录（dist）。
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
                  { 
                    loader: MiniCssExtractPlugin.loader,
                  },
                  { loader: "css-loader" },
                ]
            },
            //配置加载器less-loader
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
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
            //配置文件加载器url-loader
            {
                // 对下列资源文件使用loader
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    esModule: false,    //esModule指你的模块是否采用ES modules。如果你的JS采用的是CommonJS模块语法，则此处应该设置为false，否则图片不能正常显示。
                    limit: 10240,       // 小于10kb将会转换成base64
                    name: 'img/[name].[hash:8].[ext]',   // 大于10kb的资源输出地址，[name]是名字，[ext]后缀  
                    fallback: 'file-loader'    // 大于10kb的资源采用file-loader加载器。file-loader是默认值可以不设置      
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    esModule: false,  //esModule指你的模块是否采用ES modules。如果你的JS采用的是CommonJS模块语法，则此处应该设置为false，否则图片不能正常显示。
                    limit: 10240,
                    name: 'media/[name].[hash:8].[ext]',
                    fallback: 'file-loader' // 大于10kb的资源采用file-loader加载器。file-loader是默认值可以不设置
                }
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
                  'BASE_URL': './',  //覆盖模板中使用的对应参数（即对模板中使用的BASE_URL参数进行赋值）
                  'author':"vue-webpack",
                };
            },
            //favicon:'../public/favicon.ico',
            title: 'webpack-ok',            
            filename: 'index.html', // 生成的html文件名，该文件将被放置在输出目录        
            template: path.join(__dirname, './public/index.html')   // 源html文件路径
        }),
        new webpack.DefinePlugin({       //用于定义全局变量，它可以对HtmlWebpackPlugin插件中的模板参数进行赋值（即模板参数可以使用全局变量）。
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
            host: JSON.stringify(process.env.DB_HOST),          //使用Node.js模块：process.env 属性返回包含用户环境的对象。
        }),
        //配置MiniCssExtractPlugin插件：提取与压缩.css文件。
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',    //指定提取的CSS文件路径与名称
          chunkFilename: 'css/[id].css',
        }),
        //配置CopyWebpackPlugin插件：将单个文件或整个目录复制到生成目录（dist）。
        new CopyWebpackPlugin([
            {
                from:__dirname+'/public',
                to:__dirname+'/dist',
                toType: 'dir',
                ignore: ['*.html','*.jpg']      //忽略.html和.jpj后缀的文件，注意构建生成所用文件不需要拷贝。
            },
        ]),
    ],


};
