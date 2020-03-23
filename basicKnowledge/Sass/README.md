一、简介：
    Sass (英文全称：Syntactically Awesome Stylesheets) 是一个最初由 Hampton Catlin 
    设计并由 Natalie Weizenbaum 开发的层叠样式表语言。
    Sass 是一个 CSS 预处理器。
    Sass 是 CSS 扩展语言，可以帮助我们减少 CSS 重复的代码，节省开发时间。
    Sass 完全兼容所有版本的 CSS。
    Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承、内置函数等等特性。
    Sass 生成良好格式化的 CSS 代码，易于组织和维护。
    Sass 文件后缀为 .scss。
二、安装：
    npm install -g sass
三、使用：
    1、命令行用法：
        $ sass styles.scss styles.css


    2、在package.json文件中配置及执行方法
        配置：
            "scripts": {
            ...
            "sass":"F:\\FrontendProjects\\Nodejs\\node_global\\sass --no-source-map .\\basicKnowledge\\Sass-Scss\\style.scss .\\basicKnowledge\\Sass-Scss\\sass.css"
            }
        执行方法：
        npm run sass

    3、通过Sublime Text3安装sass/scss。
       1、安装sass和sass build插件。Sass Build 使用 Ctrl + B 快捷键编译
       2、安装SublimeOnSaveBuild 用于 Ctrl + S 保存文件的时候自动编译
       3、安装ruby环境,不然会编译失败，在这里下载ruby（https://rubyinstaller.org/downloads/） ，安装的时候选择第二项。
       4、在cmd中输入gem -v 显示版本号说明ruby安装成功
