require('dotenv').config();     //引入.env文件（放置在项目根目录）中定义的环境变量
const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //将css单独打包成一个文件的插件，它为每个包含css的js文件都创建一个css文件。它支持css和sourceMaps的按需加载。
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');  //用于优化、压缩CSS文件的webpack插件。
const CopyWebpackPlugin = require('copy-webpack-plugin'); //将单个文件或整个目录复制到生成目录（dist）。
const webpack =require('webpack');
const TerserPlugin = require('terser-webpack-plugin');  //这个插件使用terser压缩JavaScript。

const rm = require('rimraf');  //引入rimraf包，用于每次构建时先删除dist目录。

//先删除dist目录再构建
rm(path.join(__dirname, './dist'), (err) => {
    if (err) throw err;
});

module.exports={
    devtool:'source-map',      //源代码映射，source-map方便开发环境调试。 none 用于生产环境
    context:path.resolve(__dirname,'src'),   //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    mode:"development", // production：生产模式； development：开发模式  
    entry:{      //JavaScript执行入口文件
        index:'./main.js',  
        demo:'./demo.js'
    },
    output:{   
      path:path.resolve(__dirname,'./dist'),   //将输出文件都放到dist目录下 
      filename:"js/[name].bundle.js",   //将所有依赖的模块合并输出到一个bundle.js文件     'js/index.js' 
      library:'myLibrary',    //library规定了组件库返回值的名字，也就是对外暴露的模块名称
      libraryTarget: 'umd',   //libraryTarget就是配置webpack打包内容的模块方式的参数：umd: 将你的library暴露为所有的模块定义下都可运行的方式。
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
                        publicPath:'../',  //给提取后的目标.css文件中的url路径最前面添加../（解决css文件构建后图片路径url引用错误问题。url路径由加载器url-loader设置决定）
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
                    presets: ['@babel/preset-env'],
                    cacheDirectory:true,   //可以通过使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。 这会将转译的结果缓存到文件系统中。
                    plugins: ['@babel/plugin-transform-runtime'],  //babel引入 babel runtime 作为一个独立模块，来避免重复引入。
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
            //配置html-loader：将HTML格式文件导出为字符串。当编译器需要时，可以对其进行压缩使HTML被最小化。
            {
                  test: /\.(html)$/,
                  use: {
                    loader: 'html-loader',
                    options: {
                        // 标签+属性
                        attrs: ['img:src', 'audio:src', 'video:src']
                    }
                  }
            },
            //配置EJS模板引擎
            {
                test: /\.(tpl|ejs)$/,
                loader: 'ejs-loader'
            },
            //把jquery暴露全局变量名'$'和'jQuery'。之后你可以在以main.js作为入口文件的任意.js文件里面调用$ jQuery
            {
              test: require.resolve('jquery'),
              use: [
                {
                  loader: 'expose-loader',
                  options: 'jQuery'
                },
                {
                  loader: 'expose-loader',
                  options: '$'
                },
              ]
            },
        ]
    },
    resolve: {
        // 设置别名
        alias:{
            '@': path.resolve(__dirname,'src')
        }  
    },
    //优化-----------------------
    optimization:{
        usedExports: true, // 哪些导出的模块被使用了，再做打包(Tree shaking摇树功能，在开发模式要配置，在生产模式已默认，不需要配置）。注意配置package.json文件中的项"sideEffects": ["*.css"]。
        //分割代码块,提取被重复引入的文件，单独生成一个或多个文件，这样避免在多入口重复打包文件
        splitChunks: {
            chunks: "async",        //chunks属性用来选择分割哪些代码块，可选值有：'all'（所有代码块），'async'（按需加载的代码块），'initial'（初始化代码块）。
            minSize:30000,         // 模块的最小体积30kb
            minChunks: 1,           // 模块的最小被引用次数
            maxAsyncRequests: 5,    // 按需加载的最大并行请求数
            maxInitialRequests: 3,       // 一个入口最大并行请求数
            automaticNameDelimiter: '~', // 文件名的连接符
            name: true,                 //使用name选项设置要控制分割块的块名称
            cacheGroups: { // 缓存组
                //缓存组名称vendors，可以自定义。
                vendors: {  // split `node_modules`目录下被打包的代码到 `js/vendor.js`没找到可打包文件的话，则没有。
                    test: /[\\/]node_modules[\\/]/,  //控制此缓存组选择的模块。忽略它将选择所有模块。它可以是正则表达式（RegExp）、字符串或函数。
                    name:'js/chunk-vendors',  //打包后的路径与名称
                    priority: -10,     //设置优先级别
                },
                //默认缓存组
                default: {
                    minChunks: 2,
                    priority: -20,            //设置优先级别
                    reuseExistingChunk: true  //允许在模块匹配准确的时候创建一个新的模块。
                }
            }
        },
        //minimizer: [],
        minimize: true,    //生产环境默认压缩，不需要进行配（开发环境需要配置）
        minimizer: [       //生产环境默认压缩，不需要进行配 （开发环境需要配置）
                new TerserPlugin({  //这个插件使用terser压缩JavaScript。
                  cache: true,
                  parallel: true,
                  sourceMap: true, // Must be set to true if using source-maps in production
                  terserOptions: {
                    compress: {
                      arrows: false,
                      collapse_vars: false,
                      comparisons: false,
                      computed_props: false,
                      hoist_funs: false,
                      hoist_props: false,
                      hoist_vars: false,
                      inline: false,
                      loops: false,
                      negate_iife: false,
                      properties: false,
                      reduce_funcs: false,
                      reduce_vars: false,
                      switches: false,
                      toplevel: false,
                      typeofs: false,
                      booleans: true,
                      if_return: true,
                      sequences: true,
                      unused: true,
                      conditionals: true,
                      dead_code: true,
                      evaluate: true
                    },
                    mangle: {
                      safari10: true
                    }
                  },
                }),
                new OptimizeCssAssetsPlugin(), //用于优化、压缩CSS文件的webpack插件。
        ],
    },
    //配置插件---------------
    plugins: [
        //new OptimizeCssAssetsPlugin(), //用于优化、压缩CSS文件的webpack插件。
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
            chunks: ['index'],        
            template: path.join(__dirname, './public/index.ejs'),   // 模板源html或ejs文件路径
            minify:{  //代码压缩
                    removeRedundantAttributes:true, // 删除多余的属性
                    collapseWhitespace:true, // 折叠空白区域
                    removeAttributeQuotes: true, // 移除属性的引号
                    removeComments: true, // 移除注释
                    collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
        }),
        new HtmlWebpackPlugin({            
            filename: 'demo.html', // 生成的html文件名，该文件将被放置在输出目录
            chunks: ['demo'],            
            template: path.join(__dirname, './public/demo.ejs'),    // 模板源html或ejs文件路径
            minify:{  //代码压缩
                    removeRedundantAttributes:true, // 删除多余的属性
                    collapseWhitespace:true, // 折叠空白区域
                    removeAttributeQuotes: true, // 移除属性的引号
                    removeComments: true, // 移除注释
                    collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            },
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
                ignore: ['*.html','*.jpg','*.ejs']      //忽略.html和.jpj后缀的文件，注意构建生成所用文件不需要拷贝。
            },
        ]),
        //new InlineManifestWebpackPlugin('vendor01'),   // 将运行代码直接插入html文件中，因为这段代码非常少且时常改动，这样做可以避免一次请求的开销
    ],
    

};
