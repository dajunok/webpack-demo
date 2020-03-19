一、简介：
    Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
    Less 可以运行在 Node 或浏览器端。
二、安装：
    npm install -g less
    npm install less-plugin-clean-css      //安装插件
三、使用：
    1、命令行用法：
        $ lessc styles.less styles.css


    2、在package.json文件中配置及执行方法
        配置：
            "scripts": {
            ...
            "lessc":"D:\\Java\\FrontendProjects\\Nodejs\\node_global\\lessc  D:\\Java\\FrontendProjects\\webpack-demo\\basicKnowledge\\Less\\style.less  D:\\Java\\FrontendProjects\\webpack-demo\\basicKnowledge\\Less\\style.css"
            }
        执行方法：
        npm run lessc

