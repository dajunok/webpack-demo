module.exports = function (api) {
  api.cache(true);
  //配置预设================================
  const presets = [ 
      ["@babel/preset-env", {
            "targets": { //指定要转译到哪个环境
                //浏览器环境
                "browsers": ["last 2 versions", "safari >= 7"],
                //node环境
                "node": "current", //"current"  使用当前版本的node  "6.10"
                
            },
            "modules": 'commonjs',  //是否将ES6的模块化语法转译成其他类型。参数："amd" | "umd" | "systemjs" | "commonjs" | false，默认为'commonjs'
            "debug": false,         //是否进行debug操作，会在控制台打印出所有插件中的log，已经插件的版本
            "include": [],          //强制开启某些模块，默认为[]
            "exclude": [],           //禁用某些模块，默认为[]
            "useBuiltIns": 'usage'    //babel / preset-env处理polyfill的方式。参数：usage | entry | false，默认为false.
     }]
 ];
 
 //配置插件===================================================
  const plugins = [ 
        "@babel/transform-arrow-functions", //使用箭头函数
        ];  

  //返回======================
  return {
    "sourceMaps": "inline",   //"inline"：生成内联源码映射表（inline source maps）。
    presets,
    plugins
  };
}