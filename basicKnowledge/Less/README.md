一、简介：
    Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
    Less 可以运行在 Node 或浏览器端。
二、安装：
    npm install -g less     
    npm install less-plugin-clean-css -g  //安装插件
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

    3、通过Sublime Text3安装LESS。
        1、Sublime Text3利用Package Control安装LESS插件、LESS2CSS插件
        2、安装完后，创建LESS文件，保存即可自动生成CSS文件。
        3、配置LESS编译后的.css文件效果，例如指定生成文件的路径（默认是当前文件夹）、是否压缩、是否保留注释等等。
           在Sublime中根据下面菜单按顺序点击。
            Preferences → Package Settings → Less2Css → Settings-Default
           如果不能直接修改里面的参数，则复制里面的所有内容如下：
           {
              "autoCompile": true,
              "createCssSourceMaps": false,
              "ignorePrefixedFiles": false,
              "lessBaseDir": "./",
              "lesscCommand": false,
              "main_file": false,
              "minify": true,
              "minName": false,
              "outputDir": "./",    
              "outputFile": "",     //[example.css] if left blank uses same name of .less file
              "showErrorWithWindow": true,
              "autoprefix": false,
              "disableVerbose":false,
              "silent":false
            }
            然后按顺序点击：Preferences → Package Settings → Less2Css → Settings-User
            接着将上面复制的内容粘贴到此处。（即用用户配置文件）
            最后按自己需求修改配置参数。例如：
            {
              "autoCompile": true,             
              "createCssSourceMaps": false,   //不创建映射文件
              "ignorePrefixedFiles": false,
              "lessBaseDir": "./",
              "lesscCommand": true,     //保留注释
              "main_file": false,       //不进行压缩
              "minify": false,
              "minName": false,
              "outputDir": "./",  //指定css文件生成路径 
              "outputFile": "",    //[example.css] if left blank uses same name of .less file
              "showErrorWithWindow": true,
              "autoprefix": false,
              "disableVerbose":false,
              "silent":false
            }

