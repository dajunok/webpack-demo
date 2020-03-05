<template>
  <div>
    <h1 id='global'># HTML 全局属性</h1>  
    <p>HTML 中的全局属性对任何 HTML 元素有效！</p>
    <p>1、accesskey属性：设置访问元素的键盘快捷键(元素的click 点击事件会被触发)。注意： 在不同操作系统中不同的浏览器中访问快捷键的方式不同：<span class="italic">[Alt] + accesskey 、[Control] [Alt] + accesskey 、[Alt]+[Shift] + accesskey 或者[Shift] + accesskey</span>
        <br><a href="/web/index.html" target='_blank' accesskey="h">快捷键[h]触发超链接</a><br>
    </p>
    <p>2、contenteditable 属性：指定元素内容是否可编辑的。注意： 当元素中没有设置 contenteditable 属性时，元素将从父元素继承。
        <br><div class='italic' contenteditable="true">点击内容可编辑。</div>
    </p>
    <h1 id='maodian'># &lt;a&gt;标签</h1>  
    <p class='important'>1、download属性与href属性配合实现静态资源下载功能：    
        <a :href="url+'xc-4.jpg'" download="清凉夏天">点击下载图片</a>
    </p> 
    <p class='important'>2、href属性：用于指定超链接目标的URL，如果&lt;a&gt;标签没有 href 属性将不是一个链接, 它将是一个占位符的超链接。
        <br><a href="https://www.ctrip.com/" target='_blank'>绝对 URL----指向另一个站点</a>
        <br><a href="/web/index.html" target='_blank'>相对 URL----指向站点内的某个文件</a>
        <br><a href="#top">锚 URL----指向页面顶部的锚</a>
        <br><a href="#maodian">锚 URL----定位页面具体元素位置----指定元素ID</a>
        <br><a href="/web/demo.html#app3" target='_blank'>锚 URL----定位其他页面中某个位置</a>
    </p>
    <p>3、hreflang属性：指定被链接文档的语言
        <br><a href="https://www.ctrip.com/" hreflang="en" target='_blank'>链接文档的语言:英语</a>
        <br><a href="https://www.ctrip.com/" hreflang="zh" target='_blank'>链接文档的语言:中文</a>
    </p>
    <p>4、media 属性：规定被链接文档将显示在什么设备上。。
        <br><a href="https://www.ctrip.com/?output=print" media="screen and (min-width: 200px) and (max-width: 300px)">可打印的媒体属性页</a>
    </p>
    <p class='important'>5、target 属性：规定在何处打开链接文档
        <br><a href="https://www.ctrip.com/" target='_blank'>在新窗口中打开被链接文档</a>
        <br><a href="https://www.ctrip.com/" target='_self'>（默认）在相同的框架中打开被链接文档</a>
        <br><a href="https://www.ctrip.com/" target='_parent'>在父框架集中打开被链接文档</a>
        <br><a href="https://www.ctrip.com/" target='_top'>在整个窗口中打开被链接文档</a>
        <br><a href="https://www.ctrip.com/" target='myPage'>在指定的框架中打开被链接文档</a>
    </p>
    <p>5、type 属性：规定链接中指向的文档的 MIME 类型。只能在 href 属性存在时使用。
        <br><a href="https://www.ctrip.com/" target='_blank' type="text/html">MIME 类型"text/html"</a>
    </p>
    <p>6、 rel 属性：用于指定当前文档与被链接文档的关系，只有在使用了 href 属性才能使用 rel属性。。注意：尽管浏览器不会以任何方式使用该属性，不过搜索引擎可以利用该属性获得更多有关链接的信息。
        <br><a href="https://fanyi.baidu.com/" target='_blank' re="alternate">alternate----文档的可选版本（例如打印页、翻译页或镜像）</a>
        <br><a href="/web/css/index.css" target='_blank' re="stylesheet">stylesheet----文档的外部样式表。</a>
        <br><a href="/web/index.html"  target='_blank' re="start">start---- 集合中的第一个文档。</a>
        <br><a href="/web/index.html"  target='_blank' re="next">next---- 集合中的下一个文档。</a>
        <br><a href="/web/router.html" target='_blank' re="prev">prev---- 集合中的前一个文档。</a>
        <br><a href="/web/index.html"  re="contents">contents---- 文档目录。</a>
        <br><a href="/web/index.html"  re="index">index---- 文档索引。</a>
        <br><a href="/web/index.html"  re="glossary">glossary---- 文档中所用字词的术语表或解释。</a>
        <br><a href="/web/index.html"  re="copyright">copyright---- 包含版权信息的文档。</a>
        <br><a href="/web/index.html"  re="chapter">chapter---- 文档的章。</a>
        <br><a href="/web/index.html"  re="help">help---- 帮助文档。</a>
        <br><a href="/web/index.html"  re="bookmark">bookmark---- 相关文档。</a>
        <br><a href="/web/index.html"  re="nofollow">nofollow---- Google 使用 "nofollow"，用于指定 Google 搜索引擎不要跟踪链接。</a>
        <br><a href="/web/index.html"  re="licence">licence---- 链接到文档的版权信息。</a>
        <br><a href="/web/index.html"  re="tag">tag---- 当前文档标签（关键词）。</a>
        <br><a href="/web/index.html"  re="friend">tag---- 赞助。</a>
    </p>
    <h1 id='maodian'># &lt;abbr&gt;标签</h1>
    <p>简介：
        <br><span>&lt;abbr&gt;</span>标签用来表示一个缩写词或者首字母缩略词，如"WWW"或者"NATO"。
        <br>通过对缩写词语进行标记，您就能够为浏览器、拼写检查程序、翻译系统以及搜索引擎分度器提供有用的信息。
        <br>提示：在某些浏览器中，当您把鼠标移至带有<span>&lt;abbr&gt;</span>标签的缩写词/首字母缩略词上时，<span>&lt;abbr&gt;</span>标签的 title 属性可被用来展示缩写词/首字母缩略词的完整版本。
    </p>
    <p>The <abbr title="World Health Organization">缩写形式----WHO</abbr> was founded in 1948.</p>
    
    

    <br><br><br><br><br><br><br>


  </div>
  
</template>

<script type="text/javascript">

export default{
    name:'label',
    props:{
        url:String,
    },
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        
      }; 
    },
    computed:{},
    methods:{},
    watch:{},
    components:{},
    // 生命周期钩子
    beforeCreate:function(){},
    created:function(){},
    beforeMount:function(){},
    mounted:function(){},
    beforeUpdate:function(){},
    updated:function(){},
    activated:function(){},
    deactivated:function(){},
    beforeDestroy:function(){},
    destroyed:function(){},
    errorCaptured:function(){},

}


</script>


<style>
p{ 
    font: 16px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;    
}
a{
    font: italic 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
}
.important{
    font-weight:bold;   
    color:red;
}
span{
    font-weight:bold; 
    color:red;
}
abbr{
    font-style:italic;
    color:green;
}
.italic{
    font-style:italic;
    color:green;
}

</style>