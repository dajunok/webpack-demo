<template>
  <div>
    <!-- ----------------------------HTML 全局属性(start) ---------------------------->
    <h1 id='global' style="text-align:center;"># HTML 全局属性</h1>  
    <p>HTML 中的全局属性对任何 HTML 元素有效！</p>
    <p>1、accesskey属性：设置访问元素的键盘快捷键(元素的click 点击事件会被触发)。注意： 在不同操作系统中不同的浏览器中访问快捷键的方式不同：<span class="italic">[Alt] + accesskey 、[Control] [Alt] + accesskey 、[Alt]+[Shift] + accesskey 或者[Shift] + accesskey</span>
        <br><a href="/web/index.html" target='_blank' accesskey="h">快捷键[h]触发超链接</a><br>
    </p>
    <p>2、contenteditable 属性：指定元素内容是否可编辑的。注意： 当元素中没有设置 contenteditable 属性时，元素将从父元素继承。
        <br><div class='italic' contenteditable="true">点击内容可编辑。</div>
    </p>
    <p>3、contextmenu 属性：当用户右击元素时将显示上下文菜单，注意：目前只有 Firefox 浏览器支持 contextmenu 属性。
        <div class='italic' contextmenu="supermenu">右键弹出菜单  
            <menu type="context" id="supermenu">
              <menuitem label="Refresh" @click="doSomething()"></menuitem>
              <menuitem label="Twitter" @click="doSomethingElse()"></menuitem>
            </menu>
        </div>
    </p>
    <p>4、data-* 属性：用于存储私有页面后应用的自定义数据。自定义的数据可以让页面拥有更好的交互体验（不需要使用 Ajax 或去服务端查询数据）。
        <ul>
          <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
          <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
          <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
        </ul>
    </p>
    <p>5、dir 属性：规定元素内容的文本方向。
            <p dir="rtl">rtl----文本方向从右到左!</p>
            <p dir="ltr">ltr----正常从左到右!</p>
    </p>
    <p>6、draggable属性：规定元素是否可拖动。提示： 链接和图像默认是可拖动的。提示： draggable 属性经常用于拖放操作。
        <div id="div2" ondrop="other(event)" ondragover="other1(event)">凑热闹</div>
        <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <br />
        <p id="drag1" draggable="true" ondragstart="drag(event)" ondragleave="other2(event)">这是一段可移动的段落。请把该段落拖入上面的矩形。</p>
    </p>
    <p>7、hidden 属性：规定对元素进行隐藏。所有主流浏览器都支持 hidden 属性，除了 Internet Explorer。
        <div hidden>我是隐藏的，您看不到我！</div>
    </p>
    <p>8、spellcheck 属性：规定是否对元素内容进行拼写检查。<br>
        可对以下文本进行拼写检查：<br>
        ◆ 类型为 text 的 input 元素中的值（非密码）<br>
        ◆ textarea 元素中的值<br>
        ◆ 可编辑元素中的值<br>
        First name: <input type="text" name="fname" spellcheck="true">
    </p>
    <p>9、lang 属性：规定元素内容的语言。
        <p lang="fr" spellcheck="true">这是一个段落。</p>
    </p>
    <p>10、style 属性规定元素的行内样式（inline style）。style 属性将覆盖任何全局的样式设定，例如在 &lt;style&gt; 标签或在外部样式表中规定的样式。
        <h3 style="color:blue;text-align:left">这是一个标题</h3>        
    </p>
    <p>11、tabindex 属性：规定当使用 "tab" 键进行导航时元素的顺序。<br />
        <a href="http://www.w3cschool.cn/" tabindex="2">W3CSchoolW3Cschool教程</a><br />
        <a href="http://www.google.com/" tabindex="1">Google</a><br />
        <a href="http://www.microsoft.com/" tabindex="3">Microsoft</a>        
    </p>
    <p>12、title 属性：规定元素内容的文本方向。规定关于元素的额外信息。这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）。
        <p><abbr title="世界卫生组织">WHO</abbr> 成立于 1948。</p>
    </p>
    <p>13、translate 属性：规定元素内容是否要翻译。目前没有主流浏览器支持 translate 属性。
        <p style="color:green;" translate="yes">这个段落需要翻译。</p>
        <p translate="no">这个段落不能翻译。</p>
    </p><!-- ------------------HTML 全局属性(end) ------------------------>   
    
    <!-- ----------------------------HTML基础标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML基础标签</h1>
    <!-- !DOCTYPE标签 -->
    <h2 style="text-align:center;"># &lt;!DOCTYPE&gt;标签</h2>
    <p> 简介：
        <br>&lt;!DOCTYPE&gt;声明位于文档中的最前面的位置，处于&lt;html&gt;标签之前。
        <br>&lt;!DOCTYPE&gt;声明不是一个 HTML 标签；它是用来告知 Web 浏览器页面使用了哪种 HTML 版本。
        <br>（Standard Generalized Markup Language 标准通用标记语言）。DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容。
        <br>HTML5 不是基于 SGML，因此不要求引用 DTD。
        <br><span>提示：</span>总是给您的 HTML 文档添加&lt;!DOCTYPE&gt;声明，确保浏览器能够预先知道文档类型。
        <br><span>提示和注释：</span>
        <br>注释：&lt;!DOCTYPE&gt;标签没有结束标签。
        <br>提示：&lt;!DOCTYPE&gt;声明不区分大小写。
        <br>提示：使用 W3C 的验证 检查您是否编写了一个带有正确 DTD 的合法的 HTML / XHTML 文档！
        <hr>
    </p>
    <!-- html 标签 -->
    <h2 style="text-align:center;"># &lt;html&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;html&gt; 标签告知浏览器这是一个 HTML 文档。
        <br>&lt;html&gt; 标签是 HTML 文档中最外层的元素。
        <br>&lt;html&gt; 标签是所有其他 HTML 元素（除了 &lt;!DOCTYPE&gt; 标签）的容器。
        <br>HTML 4.01 与 HTML5之间的差异
        <br>HTML5 中，增加了一个新属性：manifest。 
        <br><br>1、manifest 属性：规定文档的缓存 manifest 的位置。 HTML5 引入了应用程序缓存，这意味着 Web 应用程序可以被缓存，然后在无互联网连接的时候进行访问。
        <br> <span>语法：</span>&lt;html manifest="\web\js\label.appcache"&gt;
        <br>请注意，manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。
        <br><br>2、xmlns 属性：在 XHTML 中是必需的，但在 HTML中不是。
    </p>
    <hr>
    <!-- title 标签 -->
    <h2 style="text-align:center;"># &lt;title&gt;标签</h2>
    <p>简介：
        <br>&lt;title&gt; 标签定义HTML文档的标题，通常体现了网页的主题内容，浏览器会以特殊的方式来使用标题，并且通常它显示在浏览器窗口的标题栏或状态栏上。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;title&gt; 标签定义文档的标题，在所有 HTML 文档中是必需的。
        <br>&lt;title&gt;元素：
        <br>◆ 定义浏览器工具栏中的标题
        <br>◆ 提供页面被添加到收藏夹时的标题
        <br>◆ 显示在搜索引擎结果中的页面标题
        <br><span>提示和注释：</span>
        <br>注释：一个 HTML 文档中不能有一个以上的 &lt;title&gt; 元素。
        <br>提示：如果您遗漏了 &lt;title&gt; 标签，文档作为 HTML 是无效的。
        <br>提示：当把文档加入用户的链接列表或者收藏夹或书签列表时，&lt;title&gt; 标签的内容将成为该文档链接的默认名称。
    </p>
    <hr>
    <!-- body 标签 -->
    <h2 style="text-align:center;"># &lt;body&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br> &lt;body&gt; 标签定义文档的主体。
        <br> &lt;body&gt; 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等）。
    </p>
    <hr>
    <!-- HTML <h1 – h6> 标签 -->
    <h2 style="text-align:center;"># &lt;h1 – h6&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;h1&gt; - &lt;h6&gt; 标签被用来定义 HTML 标题。
        <br>&lt;h1&gt; 定义重要等级最高的标题。&lt;h6&gt; 定义重要等级最低的标题。
    </p>
    <hr>
    <!-- HTML <p> 标签 -->
    <h2 style="text-align:center;"># &lt;p&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;p&gt; 标签定义段落。
        <br>&lt;p&gt; 元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。
        <br>注意：&lt;p&gt; 标签与 &lt;br&gt; 标签都有换行的意思，不同的是 &lt;p&gt; 标签是大换行（分段），&lt;br&gt; 标签是小换行。
    </p>
    <hr>
    <!-- HTML <br> 标签 -->
    <h2 style="text-align:center;"># &lt;br&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;br&gt; 标签插入一个简单的换行符。
        <br>&lt;br&gt; 标签是一个空标签，意味着它没有结束标签。
        <br>&lt;br&gt; 标签只是简单地开始新的一行，而当浏览器遇到 &lt;p&gt; 标签时，通常会在相邻的段落之间插入一些垂直的间距。
        <br><span>提示和注释：</span>
        <br>提示：在写地址信息或者写诗词时 &lt;br&gt; 标签非常有用。
        <br>注释： 请使用 &lt;br&gt; 标签来输入空行，而不是分割段落。
    </p>
    <hr>
    <!-- HTML <hr> 标签 -->
    <h2 style="text-align:center;"># &lt;hr&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br> &lt;hr&gt;标签定义HTML页面中的主题变化（比如话题的转移），并显示为一条水平线。
        <br>元素被用来分隔HTML页面中的内容（或者定义一个变化）。
    </p>
    <hr><!-- ----------------------------HTML基础标签(end) ---------------------------->


    <!-- ----------------------------HTML 格式标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML 格式标签</h1>
    <!-- HTML <abbr> 标签 -->
    <h2 id='maodian' style='text-align:center;'># &lt;abbr&gt;标签</h2>
    <p>简介：
        <br><span>&lt;abbr&gt;</span>标签用来表示一个缩写词或者首字母缩略词，如"WWW"或者"NATO"。
        <br>通过对缩写词语进行标记，您就能够为浏览器、拼写检查程序、翻译系统以及搜索引擎分度器提供有用的信息。
        <br>提示：在某些浏览器中，当您把鼠标移至带有<span>&lt;abbr&gt;</span>标签的缩写词/首字母缩略词上时，
        <br><span>&lt;abbr&gt;</span>标签的 title 属性可被用来展示缩写词/首字母缩略词的完整版本。
        <br><span>实例：</span>
        <p>The <abbr title="World Health Organization">缩写形式----WHO</abbr> was founded in 1948.</p>
    </p>
    <hr>
    <!-- HTML <address> 标签 -->
    <h2 style="text-align:center;"># &lt;address&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br>标签定义文档作者/所有者的联系信息。
        <br>如果 &lt;address&gt; 元素位于 &lt;body&gt; 元素内部，则它表示该文档作者/所有者的联系信息。
        <br>如果 &lt;address&gt; 元素位于 &lt;article&gt; 元素内部，则它表示该文章作者/所有者的联系信息。
        <br>&lt;address&gt; 元素的文本通常呈现为斜体。大多数浏览器会在该元素的前后添加换行。
        <br><span>提示和注释：</span>
        <br>提示：不应该使用 &lt;address&gt; 标签来描述邮政地址，除非这些信息是联系信息的组成部分。
        <br>提示： &lt;address&gt; 元素通常被包含在 &lt;address&gt; 元素的其他信息中。
        <br><span>实例：</span>
        <address>
            Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> 
            Visit us at:<br>
            Example.com<br>
            Box 564, Disneyland<br>
            USA
        </address>
    </p>
    <hr>
    <!-- HTML <b> 标签 -->
    <h2 style="text-align:center;"># &lt;b&gt;标签</h2>
    <p>简介：
        <br>这 &lt;b&gt; 元素以粗体标记要强调的文本。对于所有浏览器来说，这意味着要把这段文字以加粗（粗体）样式方式显示。
        <br><span>提示和注释：</span>
        <br>注释：根据 HTML 5 的规范， &lt;b&gt; 标签应该做为最后的选择，只有在没有其他标记比较合适时才使用它。HTML 5 规范声明：标题应该用标签&lt;h1&gt; - &lt;h6&gt;
        <br>表示，被强调的文本应该用 &lt;em&gt; 标签表示，重要的文本应该用 &lt;strong&gt; 标签表示，被标记的或者高亮显示的文本应该用 &lt;mark&gt; 标签表示。
        <br>提示：您也可以使用 CSS 的 "font-weight" 属性设置粗体文本。
        <br><span>实例：</span>
        <p>这是一个普通的文本- <b>这是一个加粗文本。</b></p>
    </p>
    <hr>
    <!-- HTML <bdi> 标签 -->
    <h2 style="text-align:center;"># &lt;bdi&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br>bdi 指的是 bidi 隔离（Bi-directional Isolation）。
        <br>&lt;bdi&gt; 标签允许您设置一段文本，使其脱离其父元素的文本方向设置。
        <br>在发布用户评论或其他您无法完全控制的内容时，该标签很有用。
        <br>提示：尽管同样的显示效果可以通过使用 CSS 规则：unicode-bidi 隔离文本格式化元素，但语义信息只能通过 &lt;bdi&gt; 元素传递。
        <br><span>实例：</span>
        <ul>
         <li>数学成绩 <bdi dir="ltr">张三</bdi>: 60 分</li>
         <li>体育运动成绩 <bdi dir="rtl">李四</bdi>: 80 分</li>
         <li>体育全国高强度运动成绩 <bdi>王五</bdi>: 90 分</li>
        </ul>        
    </p>
    <hr>
    <!-- HTML <bdo> 标签 -->
    <h2 style="text-align:center;"># &lt;bdo&gt;标签</h2>
    <p>简介：&lt;bdo&gt;
        <br>标签定义页面中文本排序的显示方向，用于想要改变排序的文本。
        <br><span>标签定义及使用说明：</span>
        <br>bdo 指的是 bidi 覆盖（Bi-Directional Override）。
        <br>&lt;bdo&gt; 标签用来覆盖默认的文本方向。
        <br>&lt;bdo&gt; 标签必须配合 dir 属性使用。
        <br>&lt;bdo&gt; 标签有 ltr 和 rtl 两个属性值，分别表示：从左到右显示文本和从右到左显示文本。
        <br><span>实例：</span>
        <p dir="ltr">该段落文字从左到右显示。</p>
        <p><bdo dir="rtl">该段落文字从右到左显示。</bdo></p>         
    </p>
    <hr>
    <!-- HTML <blockquote> 标签 -->
    <h2 style="text-align:center;"># &lt;blockquote&gt;标签</h2>
    <p>简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;blockquote&gt; 标签定义摘自另一个源的块引用。
        <br>浏览器通常会对 &lt;blockquote&gt; 元素进行缩进。
        <br><span>提示和注释：</span>
        <br>提示：如果标记是不需要段落分隔的短引用，请使用&lt;q&gt;。
        <br>1、cite 属性：规定引用的来源。主流浏览器均不支持 cite 属性。不过，搜索引擎可能会使用该属性获得更多有关引用的信息。     
        <br><span>实例：</span>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
            For 50 years, WWF has been protecting the future of nature. The worlds leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
        </blockquote>
    </p>
    <hr>
    <!-- HTML <cite> 标签 -->
    <h2 style="text-align:center;"># &lt;cite&gt;标签</h2>
    <p>简介：表示它所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。&lt;cite&gt; 标签中的文本将会以斜体显示。        
        <br>所有主流浏览器都支持 &lt;cite&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;cite&gt; 标签定义作品（比如书籍、歌曲、电影、电视节目、绘画、雕塑等等）的标题。
        <br>注释：人名不属于作品的标题。
        <br>提示：&lt;cite&gt; 标签还有一个不为人知的功能：使用该标签，您或其他人可以从文档中自动摘录参考书目。例如：浏览器能够自动整理引用表格，并把它们作为脚注或者独立的文档来显示。也就是说，文档的内容可以通过浏览器以不同的方式展示给用户。
        <br><span>实例：</span>
        <br><img src="../assets/img_the_scream.jpg" width="220" height="277" alt="The Scream">
        <p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
    </p>
    <hr>
    <!-- HTML <code> 标签 -->
    <h2 style="text-align:center;"># &lt;code&gt;标签</h2>
    <p>简介：
        <br>&lt;code&gt; 标签的功能有：将文本变成等宽字体以及提示这段文本是源程序代码。
        <br>所有主流浏览器都支持 &lt;code&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;code&gt; 标签是一个短语标签，用来定义计算机代码文本。
        <br>提示：我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。
        <br><span>实例：</span>
        <br>常见短语标签：<br>
        <em>&lt;em&gt;----强调文本</em><br>
        <strong>&lt;strong&gt;----加粗文本</strong><br>
        <dfn>&lt;dfn&gt;----定义项目</dfn><br>
        <code>&lt;code&gt;----一段电脑代码</code><br>
        <samp>&lt;samp&gt;----计算机样本</samp><br>
        <kbd>&lt;kbd&gt;----键盘输入</kbd><br>
        <var>&lt;var&gt;----变量</var>
    </p>
    <hr>
    <!-- HTML <del> 标签 -->
    <h2 style="text-align:center;"># &lt;del&gt;标签</h2>
    <p>简介：
        <br>所有主流浏览器都支持 &lt;del&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        &lt;del&gt; 标签定义文档中已删除的文本。
        <br><span>提示和注释：</span>
        <br>提示：您也可以看看 &lt;ins&gt; 标签如何标记先插入的文本。
        <br>提示：&lt;del&gt; 和 &lt;ins&gt; 一起使用，描述文档中的更新和修正。浏览器通常会在已删除文本上添加一条删除线，在新插入文本下添加一条下划线。
        <br><span>属性：</span>
        <br>1、cite 属性：将指向一个URL，该URL会解释为什么文本被删除，请参考下述示例。
        <br><span>实例：</span>
        <p>My favorite color is <del>blue</del> <ins>red</ins>!</p>
        <p><del cite="del_demo_cite.htm">这是一个被删除了的文本</del></p>
        <br><span>实例：</span>
        <br>2、datetime 属性：规定文本被删除的日期和时间。当HTML页面中有使用 &lt;del&gt; 标签删除的文本的时候，可以使用 datetime 属性设置文本删除的日期与时间。
        <p><del datetime="2011-11-15T22:55:03Z">这是一个被删除了的文本</del></p>        
    </p>
    <hr>
    <!-- HTML <dfn> 标签 -->
    <h2 style="text-align:center;"># &lt;dfn&gt;标签</h2>
    <p>简介：
        <br>&lt;dfn&gt; 标签可标记那些对特殊术语或短语的定义。
        <br>&lt;dfn&gt; 元素是一个内嵌元素。
        <br>所有主流浏览器都支持 &lt;dfn&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;dfn&gt; 标签是一个短语标签，用来定义特殊术语或短语。
        <br>提示：我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。      
        <br><span>实例：</span>
        <br>常见短语标签：<br>
        <em>&lt;em&gt;----强调文本</em><br>
        <strong>&lt;strong&gt;----加粗文本</strong><br>
        <dfn>&lt;dfn&gt;----定义项目</dfn><br>
        <code>&lt;code&gt;----一段电脑代码</code><br>
        <samp>&lt;samp&gt;----计算机样本</samp><br>
        <kbd>&lt;kbd&gt;----键盘输入</kbd><br>
        <var>&lt;var&gt;----变量</var>
    </p>
    <hr>
    <!-- HTML <em> 标签 -->
    <h2 style="text-align:center;"># &lt;em&gt;标签</h2>
    <p>简介：
        <br>&lt;em&gt; 标签用于标记重点强调的文本，您可以对该标签进行嵌套，每个嵌套级别表示更大程度的强调。
        <br>所有主流浏览器都支持 &lt;em&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;em&gt; 标签是一个短语标签，用来呈现为被强调的文本。
        <br>&lt;em&gt; 标签中的文本以斜体显示，但最后不要仅仅为了斜体效果而使用 &lt;em&gt; 标签。
        <br>提示：我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。
        <br><span>实例：</span>
        <br>常见短语标签：<br>
        <em>&lt;em&gt;----强调文本</em><br>
        <strong>&lt;strong&gt;----加粗文本</strong><br>
        <dfn>&lt;dfn&gt;----定义项目</dfn><br>
        <code>&lt;code&gt;----一段电脑代码</code><br>
        <samp>&lt;samp&gt;----计算机样本</samp><br>
        <kbd>&lt;kbd&gt;----键盘输入</kbd><br>
        <var>&lt;var&gt;----变量</var>
    </p>
    <hr>
    <!-- HTML <i> 标签 -->
    <h2 style="text-align:center;"># &lt;i&gt;标签</h2>
    <p>简介：
        <br>&lt;i&gt; 标签中的文本显示为斜体，代表一定范围的文本具有特别的语义。
        <br>所有主流浏览器都支持 &lt;i&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;i&gt; 定义与文本中其余部分不同的部分，并把这部分文本呈现为斜体文本。
        <br>&lt;i&gt; 标签被用来表示科技术语、其他语种的成语俗语、想法、宇宙飞船的名字等等。
        <br>在没有其他适当语义的元素可以使用时，请使用 &lt;i&gt; 元素。其他语义的元素如下：
        <br>&lt;em&gt; （被强调的文本）
        <br>&lt;strong&gt; （重要的文本）
        <br>&lt;mark&gt;（被标记的/高亮显示的文本）
        <br>&lt;cite&gt; （作品的标题）
        <br>&lt;dfn&gt; （一个定义项目）
        <br>提示：&lt;i&gt; 标签一定要和结束标签 &lt;/i&gt; 一起使用。
        <br><span>实例：</span>
        <p>He named his car <i>The lightning</i>, because it was very fast.</p>
    </p>
    <hr>
    <!-- HTML <ins> 标签 -->
    <h2 style="text-align:center;"># &lt;ins&gt;标签</h2>
    <p>简介：
        <br>&lt;ins&gt; 标签表示范围内的文本已经被添加到文档中（通常是文档中更新和修正的部分）。
        <br>所有主流浏览器都支持 &lt;ins&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;ins&gt; 标签定义已经被插入文档中的文本。
        <br><span>提示和注释：</span>
        <br>提示：您也可以看看标记已删除文本的 &lt;del&gt; 标签。
        <br>提示：&lt;del&gt; 和 &lt;ins&gt; 一起使用，描述文档中的更新和修正。浏览器通常会在已删除文本上添加一条删除线，在新插入文本下添加一条下划线。
        <br>提示：&lt;del&gt; 和 &lt;ins&gt; 不能同时既是块级元素又是内联元素。
        <br><span>属性：</span>
        <br>1、cite 属性：规定指向一个文档的 URL，该文档解释了文本被插入或修改的原因。cite 属性在普通的 Web 浏览器中没有视觉效果，但可以通过屏幕阅读器使用。
        <br><span>实例：</span>
        <p>这是一个文本。<ins cite="why_inserted.htm">cite-----这是一段插入文本。</ins></p>
        2、datetime 属性：规定文本被插入或修改的日期和时间。datetime 属性在普通的 Web 浏览器中没有视觉效果，但可以通过屏幕阅读器使用。
        <br><span>实例：</span>
        <p>这是一个文本。<ins datetime="2012-09-15T22:55:03Z">datetime-----这是一段插入文本。</ins></p>
    </p>
    <hr>
    <!-- HTML <kbd> 标签 -->
    <h2 style="text-align:center;"># &lt;kbd&gt;标签</h2>
    <p>简介：
        <br>&lt;kbd&gt; 标签表示用户从键盘上输入的文本，可以通过下面的这个例子认识 &lt;kbd&gt; 标签：
        <br>目前大多数浏览器支持 &lt;kbd&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;kbd&gt; 标签定义键盘文本。
        <br>&lt;kbd&gt; 标签为内嵌元素。
        <br>提示: &lt;kbd&gt; 标签已废弃，不推荐使用，但是可以通过CSS实现丰富的效果。
        <br><span>实例：</span>
        <br>常见短语标签：<br>
        <em>&lt;em&gt;----强调文本</em><br>
        <strong>&lt;strong&gt;----加粗文本</strong><br>
        <dfn>&lt;dfn&gt;----定义项目</dfn><br>
        <code>&lt;code&gt;----一段电脑代码</code><br>
        <samp>&lt;samp&gt;----计算机样本</samp><br>
        <kbd>&lt;kbd&gt;----键盘输入</kbd><br>
        <var>&lt;var&gt;----变量</var>
    </p>
    <hr>
    <!-- HTML <mark> 标签 -->
    <h2 style="text-align:center;"># &lt;mark&gt;标签</h2>
    <p>简介：
        <br>Internet Explorer 9+、Firefox、Opera、Chrome 和 Safari 支持 &lt;mark&gt; 标签。
        <br>注意：Internet Explorer 8 及更早版本不支持 &lt;mark&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;mark&gt; 标签定义带有记号的文本。
        <br>请在需要突出显示文本时使用 &lt;mark&gt; 标签。
        <br>提示： 虽然使用 &lt;strong&gt; 标签、&lt;em&gt; 标签同样能达到这样的效果，但是它们的作用是强调文本，并非仅仅是高亮显示文本，因此我们不推荐使用。
        <br><span>实例：</span>
        <p>今天别忘了买<mark>牛奶</mark>。</p>
    </p>
    <hr>
    <!-- HTML <meter> 标签 -->
    <h2 style="text-align:center;"># &lt;meter&gt;标签</h2>
    <p>简介：
        <br>在 HTML 中给定一个具体的范围（包括最大值与最小值），然后使用 &lt;meter&gt; 标签来显示该给定范围内的数据。
        <br>Firefox、Opera、Chrome 和 Safari 6 支持 &lt;meter&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;meter&gt; 标签定义度量衡。仅用于已知最大和最小值的度量。
        <br>比如：磁盘使用情况，查询结果的相关性等。
        <br>注意： &lt;meter&gt; 不能作为一个进度条来使用， 进度条 &lt;progress&gt; 标签。
        <br><span>实例：</span><br>
        <meter value="2" min="0" max="10">2 out of 10</meter><br>
        <meter value="0.8">60%</meter><br>
        <br>1、form 属性：规定 &lt;meter&gt; 元素所属的一个或多个表单。几乎没有主流浏览器支持 &lt;meter&gt; 标签的 form 属性。
        <br>2、high 属性：规定被界定为高的值的范围。high 属性的值必须小于 max 属性的值，且必须大于 low 和 min 属性的值。浏览器会用不同的颜色区分偏高、中等和偏低的值得颜色。
        <br>3、low 属性：规定被界定为低的值的范围。low 属性的值必须大于 min 属性的值，且必须小于 high 和 max 属性的值。浏览器会用不同的颜色区分偏高、中等和偏低的值得颜色。
        <br>4、max 属性：规定范围的最大值。max 属性的值必须大于 min 属性的值。如果没有规定 max 属性的值，则默认值是 1。提示：max 属性与 min 属性一起规定了度量的完整范围。
        <br>5、min 属性：规定范围的最小值。min 属性的值必须小于 max 属性的值。如果没有规定 min 属性的值，则默认值是 0。提示：min 属性与 max 属性一起规定了度量的完整范围。
        <br>6、optimum 属性：规定度量值被界定为最优值的范围。
        <br>7、value 属性：是必需的，规定度量的当前值。value 属性的值必须介于 min 和 max 属性的值中间。
        <br><span>实例：</span><br>
        <p>Anna's score: <meter min="0" low="40" high="90" max="100" value="95"></meter></p>
        <p>Peter's score: <meter min="0" low="40" high="90" max="100" value="65"></meter></p>
        <p>Linda's score: <meter min="0" low="40" high="90" max="100" value="35"></meter></p>
        <p><meter value="0.6" high="0.9" low="0.1" optimum="0.5"></meter></p>
    </p>
    <hr>
    <!-- HTML <pre> 标签 -->
    <h2 style="text-align:center;"># &lt;pre&gt;标签</h2>
    <p>简介：
        <br>&lt;pre&gt; 标签可以保留您需要的文本格式，比如不会取消换行和空格，并且所示文本是等宽的。
        <br>目前大多数浏览器支持 &lt;pre&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;pre&gt; 标签可定义预格式化的文本。
        <br>被包围在 &lt;pre&gt; 标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。
        <br>注意：&lt;pre&gt; 元素是块级元素，但是只能包含文本或行内元素，任何块级元素（常见为可以导致段落断开的标签：例如&lt;title&gt;、&lt;p&gt; 和&lt;address&gt; 标签）都不能位于 &lt;pre&gt; 元素中。
        <br><span>提示和注释：</span>
        <br>提示: &lt;pre&gt; 标签的一个常见应用就是用来表示计算机的源代码。
        <br>提示：&lt;pre&gt; 标签与 &lt;code&gt; 标签结合起来使用，可以获得更加精确的语义。
        <br><span>实例：</span><br>
        <pre>
                此例演示如何使用 pre 标签
                对空行和    空格
                进行控制
        </pre>
    </p>
    <hr>
    <!-- HTML <progress> 标签 -->
    <h2 style="text-align:center;"># &lt;progress&gt;标签</h2>
    <p>简介：
        <br>&lt;progress&gt; 标签定义运行中的任务进度（进程）。
        <br>IE 10、Firefox、Opera、Chrome 和 Safari 6 支持 &lt;progress&gt; 标签。
        <br>注释：IE 9 或者更早版本的 IE 浏览器不支持 &lt;progress&gt; 标签。
        <br><span>标签定义及使用说明：</span>      
        <br>&lt;progress&gt; 标签定义运行中的任务进度（进程）。
        <br><span>提示和注释：</span> 
        <br>提示：请将 &lt;progress&gt; 标签与 JavaScript 一起使用来显示任务的进度。
        <br>注释：&lt;progress&gt; 标签不适合用来表示度量衡（例如，磁盘空间使用情况或相关的查询结果）。表示度量衡，请使用 &lt;meter&gt; 标签代替。
        <br><span>属性：</span>
        <br>1、max 属性：规定任务总共需要多少工作。注意：Internet Explorer 9 及之前的版本不支持 &lt;progress&gt; 标签的 max 属性。
        <br>2、value 属性：规定已经完成多少任务。
        <br><span>实例：</span>
        <br>下载进度:
        <progress value="22" max="100"></progress>
    </p>
    <hr>
    <!-- HTML <q> 标签 -->
    <h2 style="text-align:center;"># &lt;q&gt;标签</h2>
    <p>简介：
        <br>&lt;q&gt; 标签用来表示包含的文本是一个短的引用，它是一个行内元素，在浏览器中显示为使用引号包含的内容。
        <br>所有主流浏览器都支持 &lt;q&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;q&gt; 标签定义一个短的引用。
        <br>浏览器经常会在这种引用的周围插入引号。
        <br><span>提示和注释：</span>
        <br>提示：&lt;q&gt; 标签表示短的引用，而 &lt;blockquote&gt; 标签表示引用一段长文本。
        <br>提示：请使用 &lt;blockquote&gt; 标签来标记摘自另一个源的块引用。
        <br><span>属性：</span>
        <br>1、cite 属性规定引用的来源 URL。cite 属性在普通的 Web 浏览器中没有视觉效果，但可以通过屏幕阅读器使用。提示：该属性的值是一个包含在引号中并指向联机文档的 URL，以及（如果有可能的话）引用在该文档中的确切位置。
        <br><span>实例：</span>
        <p>WWF's goal is to:
        <q cite="http://www.wwf.org">Build a future where people live in harmony with nature.</q>
        We hope they succeed.
        </p>       
    </p>
    <hr>
    <!-- HTML <rp> 标签 -->
    <h2 style="text-align:center;"># &lt;rp&gt;标签</h2>
    <p>简介：
        <br>&lt;rp&gt; 标签需要在 &lt;ruby&gt; 标签中使用，用于防止那些不支持 &lt;ruby&gt; 标签的浏览器，主要用来放置括弧。
        <br>IE 9+、Firefox、Opera、Chrome 和 Safari 支持 &lt;rp&gt; 标签。
        <br>注释：IE 8 或更早版本的 IE 浏览器不支持 &lt;rp&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;rp&gt; 标签在 ruby 注释中使用，以定义不支持 ruby 元素的浏览器所显示的内容。
        <br>ruby 注释是中文注音或字符。在东亚使用，显示的是东亚字符的发音。
        <br>将 &lt;rp&gt; 标签与 &lt;ruby&gt; 和 &lt;rt&gt; 标签一起使用： 
        <br>&lt;ruby&gt; 元素由一个或多个需要解释/发音的字符和一个提供该信息的 &lt;rt&gt; 元素组成，还包括可选的 &lt;rp&gt; 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。
        <br>提示：支持 "ruby" 元素的浏览器不会显示 "rp" 元素的内容。
        <br><span>实例：</span><br>
        <ruby>
          汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
          字 <rp>(</rp><rt>Zi</rt><rp>)</rp>
        </ruby>
    </p>
    <hr>
    <!-- HTML <rt> 标签 -->
    <h2 style="text-align:center;"># &lt;rt&gt;标签</h2>
    <p>简介：
        <br>如果在 &lt;ruby&gt; 元素中需要多某些字符作出解释或者标记其发音，那么请使用 &lt;rt&gt; 标签来提供相关的信息。
        <br>&lt;rt&gt; 元素必须始终包含在 &lt;ruby&gt; 元素中。
        <br>IE 9+、Firefox、Opera、Chrome 和 Safari 支持 &lt;rt&gt; 标签。
        <br>注释：IE 8 或更早版本的 IE 浏览器不支持 &lt;rt&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;rt&gt; 标签定义字符（中文注音或字符）的解释或发音。
        <br>将 &lt;rt&gt; 标签与 &lt;ruby&gt; 和 &lt;rp&gt; 标签一起使用： 
        <br>&lt;ruby&gt; 元素由一个或多个需要解释/发音的字符和一个提供该信息的 &lt;rt&gt; 元素组成，还包括可选的 &lt;rp&gt; 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。
        <br><span>实例：</span><br>
        <ruby>
          汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
          字 <rp>(</rp><rt>Zi</rt><rp>)</rp>
        </ruby>
    </p>
    <hr>
    <!-- HTML <ruby> 标签 -->
    <h2 style="text-align:center;"># &lt;ruby&gt;标签</h2>
    <p>简介：
        <br>&lt;ruby&gt; 标签是当作注释标签使用的，可以对文本进行注音或者字符。
        <br>IE 9+、Firefox、Opera、Chrome 和 Safari 支持 &lt;ruby&gt; 标签。
        <br>注释：IE 8 或更早版本的 IE 浏览器不支持 &lt;ruby&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;ruby&gt; 标签定义 ruby 注释（中文注音或字符）。
        <br>在东亚使用，显示的是东亚字符的发音。
        <br>将 &lt;ruby&gt; 标签与 &lt;rt&gt; 和 &lt;rp&gt; 标签一起使用： 
        <br>&lt;ruby&gt; 元素由一个或多个需要解释/发音的字符和一个提供该信息的 &lt;rt&gt; 元素组成，还包括可选的 &lt;rp&gt; 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。      
        <br><span>实例：</span><br>
        <ruby>
          汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
          字 <rp>(</rp><rt>Zi</rt><rp>)</rp>
        </ruby>
    </p>
    <hr>
    <!-- HTML <s> 标签 -->
    <h2 style="text-align:center;"># &lt;s&gt;标签</h2>
    <p>简介：
        <br>&lt;s&gt; 标签中的文本会以贯穿一条线呈现给用户，表示该处的内容是不相关或不准确的，即，可以用作删除线。
        <br>所有主流浏览器都支持 &lt;s&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;s&gt; 标签对那些不正确、不准确或者没有用的文本进行标识。
        <br>&lt;s&gt; 标签不应该用来定义替换的或者删除的文本。如果要定义替换的或者删除的文本，请使用 &lt;del&gt;标签。
        <br><span>实例：</span>
        <p><s>我的车是蓝色的。</s></p>
    </p>
    <hr>
    <!-- HTML <samp> 标签 -->
    <h2 style="text-align:center;"># &lt;samp&gt;标签</h2>
    <p>简介：
        <br>&lt;samp&gt; 标签用于标识计算机程序输出，使用该标签定义的文本会以特殊的样式显示，通常使用浏览器默认的 monotype 字体。
        <br>所有主流浏览器都支持 &lt;samp&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;samp&gt; 标签是一个短语标签，用来定义计算机程序的样本文本。
        <br>提示：我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。
        <br><span>实例：</span>
        <br>常见短语标签：<br>
        <em>&lt;em&gt;----强调文本</em><br>
        <strong>&lt;strong&gt;----加粗文本</strong><br>
        <dfn>&lt;dfn&gt;----定义项目</dfn><br>
        <code>&lt;code&gt;----一段电脑代码</code><br>
        <samp>&lt;samp&gt;----计算机样本</samp><br>
        <kbd>&lt;kbd&gt;----键盘输入</kbd><br>
        <var>&lt;var&gt;----变量</var>
    </p>
    <hr>
    <!-- HTML <strong> 标签 -->
    <h2 style="text-align:center;"># &lt;strong&gt;标签</h2>
    <p>简介：
        <br>&lt;strong&gt; 标签用来强调某些文本的重要性，这意味着这些文本会以加粗的形式呈现在浏览器中。
        <br>所有主流浏览器都支持 &lt;strong&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;strong&gt; 标签是一个短语标签，用来定义计算机程序的样本重要的文本。
        <br>提示：我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。
        <br><span>实例：</span>
        <br>常见短语标签：<br>
        <em>&lt;em&gt;----强调文本</em><br>
        <strong>&lt;strong&gt;----加粗文本</strong><br>
        <dfn>&lt;dfn&gt;----定义项目</dfn><br>
        <code>&lt;code&gt;----一段电脑代码</code><br>
        <samp>&lt;samp&gt;----计算机样本</samp><br>
        <kbd>&lt;kbd&gt;----键盘输入</kbd><br>
        <var>&lt;var&gt;----变量</var>
    </p>
    <hr>
    <!-- HTML <sub> 标签 -->
    <h2 style="text-align:center;"># &lt;sub&gt;标签</h2>
    <p>简介：
        <br>包含在 &lt;sub&gt; 标签和其结束标签 &lt;sub&gt; 中的内容会以正常内容的一半的高度显示在下方，而且通常较小。
        <br>所有主流浏览器都支持 &lt;sub&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;sub&gt; 标签定义下标文本。下标文本将会显示在当前文本流中字符高度的一半为基准线的下方，但是与当前文本流中文字的字体和字号都是一样的。下标文本能用来表示化学公式，比如 H2O。
        <br>提示：请使用 &lt;sub&gt; 标签定义上标文本。
        <br><span>实例：</span>
        <p>这个文本包含 <sub>下标</sub>文本。</p>
        <p>这个文本包含 <sup>上标</sup> 文本。</p>
    </p>
    <hr>
    <!-- HTML <sup> 标签 -->
    <h2 style="text-align:center;"># &lt;sup&gt;标签</h2>
    <p>简介：
        <br>&lt;sup&gt; 标签与 &lt;sub&gt; 标签显示的大小相同，不同的是它显示在正常字符一半基准线的上方。
        <br>所有主流浏览器都支持 &lt;sup&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;sup&gt; 标签定义上标文本。上标文本将会显示在当前文本流中字符高度的一半为基准线的上方，但是与当前文本流中文字的字体和字号都是一样的。上标文本能用来添加脚注，比如 WWW[1]。
        <br>提示：请使用 &lt;sub&gt; 标签定义下标文本。
        <br>提示：这个标签在向文档添加脚注以及表示方程式中的指数值时非常有用。
        <br><span>实例：</span>
        <p>这个文本包含 <sub>下标</sub>文本。</p>
        <p>这个文本包含 <sup>上标</sup> 文本。</p>
    </p>
    <hr>
    <!-- HTML <time> 标签 -->
    <h2 style="text-align:center;"># &lt;time&gt;标签</h2>
    <p>简介：
        <br>&lt;time&gt; 标签用来表示HTML网页中出现的日期和时间，目的是让搜索引擎等其它程序更容易的提取这些信息。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;time&gt; 标签定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。
        <br>该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。
        <br>提示：&lt;time&gt; 标签不会在任何浏览器中呈现任何特殊效果，只是用来给机器识别的。
        <br><span>属性：</span>
        <br>1、datetime 属性规定日期或时间。在该元素的内容中未指定日期或时间时，使用该属性。datetime 属性在所有浏览器中不会渲染任何特殊的效果。
        <br><span>实例：</span>
        <p>我们在每天早上<time>9:00</time>开始营业。</p>
        <p>我在<time datetime="2017-02-14">情人节</time>有个约会。</p>
    </p>
    <hr>
    <!-- HTML <u> 标签 -->
    <h2 style="text-align:center;"># &lt;u&gt;标签</h2>
    <p>简介：
        <br>&lt;u&gt; 标签可以用来对标签内的文本实现下划线样式，请参考下述示例。
        <br>所有主流浏览器都支持 &lt;u&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;u&gt; 标签定义与常规文本风格不同的文本，像拼写错误的单词或者汉语中的专有名词。
        <br><span>提示和注释：</span>
        <br>提示：请尽量避免使用 &lt;u&gt; 为文本加下划线，用户会把它混淆为一个超链接。
        <br>注释：HTML5 规范建议开发者尽量使用其他元素替代 &lt;u&gt; 元素。
        <br><span>实例：</span>
        <p>This is a <u>parragraph</u>.</p>
    </p>
    <hr>
    <!-- HTML <var> 标签 -->
    <h2 style="text-align:center;"># &lt;var&gt;标签</h2>
    <p>简介：
        <br>&lt;var&gt; 标签表示数学表达式或编程上下文中的变量，&lt;var&gt; 标签定义的内容会呈现为斜体。
        <br>所有主流浏览器都支持 &lt;var&gt; 标签
        <br><span>标签定义及使用说明：</span>
        <br>&lt;var&gt; 标签是一个短语标签，用来定义变量。
        <br>提示：我们并不反对使用这个标签，但是如果您只是为了达到某种视觉效果而使用这个标签的话，我们建议您使用 CSS ，这样可能会取得更丰富的效果。
        <br><span>实例：</span>
        <br>常见短语标签：<br>
        <em>&lt;em&gt;----强调文本</em><br>
        <strong>&lt;strong&gt;----加粗文本</strong><br>
        <dfn>&lt;dfn&gt;----定义项目</dfn><br>
        <code>&lt;code&gt;----一段电脑代码</code><br>
        <samp>&lt;samp&gt;----计算机样本</samp><br>
        <kbd>&lt;kbd&gt;----键盘输入</kbd><br>
        <var>&lt;var&gt;----变量</var>
    </p>
    <hr>
    <!-- HTML <wbr> 标签 -->
    <h2 style="text-align:center;"># &lt;wbr&gt;标签</h2>
    <p>简介：
        <br>&lt;wbr&gt; 标签可以用来定义HTML文档中需要进行换行的位置，与&lt;br&gt;标签不同，如果浏览器窗口的宽度足够，则不换行；反之，则在添加了 &lt;wbr&gt; 标签的位置进行换行
        <br>所有主流浏览器都支持 &lt;wbr&gt; 标签，除了 Internet Explorer。
        <br><span>标签定义及使用说明：</span> 
        <br>&lt;wbr&gt; (Word Break Opportunity) 标签规定在文本中的何处适合添加换行符。
        <br>提示：如果单词太长，或者您担心浏览器会在错误的位置换行，那么您可以使用 &lt;wbr&gt; 元素来添加 Word Break Opportunity（单词换行时机）。 
        <br><span>实例：</span>  
        <p contenteditable="true">学习 AJAX ,您必须熟悉 <wbr>Http<wbr>Request 对象。</p> 
    </p>
    <hr><!-- ----------------------------HTML 格式标签(end) ---------------------------->


    <!-- ----------------------------HTML 表单标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML表单标签</h1>
    <!-- HTML <form> 标签 -->
    <h2 style="text-align:center;"># &lt;form&gt;标签</h2>
    <p id="form">简介：
        <br>使用 &lt;form&gt; 标签可以向服务器传输数据。
        <br>所有主流浏览器都支持 &lt;form&gt; 标签。
        <br><span>标签定义及使用说明：</span>  
        <br>&lt;form&gt; 标签用于创建供用户输入的 HTML 表单。
        <br>&lt;form&gt; 元素包含一个或多个如下的表单元素：
        <br>&lt;input&gt;
        <br>&lt;textarea&gt;
        <br>&lt;button&gt;
        <br>&lt;select&gt;
        <br>&lt;option&gt;
        <br>&lt;optgroup&gt;
        <br>&lt;fieldset&gt;
        <br>&lt;label&gt;
        <br><span>实例：</span>
        <form action="/statics/demosource/demo-form.php" method="post">
        First name: <input type="text" name="FirstName" value="Mickey"><br>
        Last name: <input type="text" name="LastName" value="Mouse"><br>
        <input type="submit" value="提交">
        </form>
        <br><span>属性：</span>
        <br>1、<mark>accept-charset</mark> 属性：规定表单提交时使用的字符编码。默认值是保留字符串 "UNKNOWN"（表示编码为包含 &lt;form&gt; 元素的文档的编码）。
        <br><span>实例：</span>
        <form action="/web/index.html" accept-charset="utf-8">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit" value="提交">
        </form>
        <br>2、<mark>action</mark> 属性：规定当提交表单时，向何处发送表单数据。
        <br>3、<mark>autocomplete</mark> 属性：规定表单是否应该启用自动完成功能。自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。提示：autocomplete "on" 默认。规定启用自动完成功能。浏览器会基于用户之前键入的值自动完成值。，"off" 规定禁用自动完成功能。用户必须在每次使用时输入值到每个字段中，浏览器不会自动完成输入。
        <br>4、<mark>enctype</mark> 属性：规定在将表单数据发送到服务器之前如何对其进行编码。注意：只有 method="post" 时才使用 enctype 属性。
        <br>enctype="application/x-www-form-urlencoded"----------默认。在发送前对所有字符进行编码（将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值）。     
        <br>enctype="multipart/form-data"----------不对字符编码。当使用有文件上传控件的表单时，该值是必需的。
        <br>enctype="text/plain"----------将空格转换为 "+" 符号，但不编码特殊字符。
        <br><span>实例：</span>
        <form action="/web/demo.html" method="post" enctype="multipart/form-data">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit" value="提交">
        </form>
        <br>5、<mark>method</mark> 方法：规定如何发送表单数据（form-data）（表单数据会被发送到在 action 属性中规定的页面中）。表单数据可被作为 URL 变量的形式来发送（method="get"）或者作为 HTTP post 事务的形式来发送（method="post"）。
        <br>6、<mark>name</mark> 属性：规定表单的名称。name 属性用于在 JavaScript 中引用元素，或者在表单提交之后引用表单数据。
        <br><span>实例：</span>
        <form name="myForm" action="/web/index.html" method="get">
        First name: <input type="text" name="fname"><br>
        Last name: <input type="text" name="lname"><br><br>
        <input type="button" onclick="formSubmit()" value="发送表单数据！">
        </form>
        <br>7、<mark>novalidate</mark> 属性：规定当提交表单时不对表单数据（输入）进行验证。novalidate 属性是一个布尔属性。
        <br><span>实例：</span>
        <form action="/web/index.html" novalidate>
        E-mail: <input type="email" name="user_email">
        <input type="submit">
        </form>
        <br>8、<mark>target</mark> 属性：规定一个名称或一个关键词，指示在何处打开 action URL，即在何处显示提交表单后接收到的响应。语法：&lt;form target="_blank|_self|_parent|_top|framename"&gt;
        <br><span>实例：</span>
        <form action="/web/index.html" method="get" target="_blank">  <!-- "_blank"在新窗口/选项卡中打开。 -->
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit" value="提交">
        </form>
    </p>
    <hr>
    <!-- HTML <input> 标签 -->
    <h2 style="text-align:center;"># &lt;input&gt;标签</h2>
    <p id="input">简介：
        <br>&lt;input&gt; 标签用于创建交互式控件，这类控件是基于 web 表单的，它可以接收用户的数据、信息。
        <br>目前大多数浏览器支持 &lt;input&gt;标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;input&gt; 标签规定了用户可以在其中输入数据的输入字段。
        <br>&lt;input&gt; 元素在 &lt;form&gt; 元素中使用，用来声明允许用户输入数据的 input 控件。
        <br>输入字段可通过多种方式改变，取决于 type 属性。它可以是文本字段、复选框、掩码后的文本控件、单选按钮、按钮等等。
        <br><span>提示和注释：</span>
        <br>注意: &lt;input&gt; 元素是空的,它只包含标签属性。
        <br>提示: 你可以使用 &lt;label&gt; 元素来定义 &lt;input&gt; 元素的标注。
        <br><span>属性：</span>
        <br>1、accept 属性：规定了可通过文件上传提交的服务器接受的文件类型。注意：accept 属性仅适用于 &lt;input type="file"&gt;。提示：请不要将该属性作为您的验证工具。应该在服务器上对文件上传进行验证。
        <br><span>实例：</span>
        <form action="/web/index.html">
          <input type="file" name="pic" accept="image/*" multiple>
          <input type="submit">
        </form>
        <br>2、alt 属性：为用户由于某些原因（比如网速太慢、src 属性中的错误、浏览器禁用图像、用户使用的是屏幕阅读器）无法查看图像时提供了替代文本。注意：alt 属性只能与 <input type="image"> 配合使用。
        <br><span>实例：</span>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          <input type="image" src="/statics/images/submit.gif" alt="Submit" width="48" height="48">
        </form>
        <br>3、autocomplete 属性：规定输入字段是否应该启用自动完成功能。自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。注意：autocomplete 属性适用于下面的 &lt;input&gt; 类型：text、search、url、tel、email、password、datepickers、range 和 color。
        <br><span>实例：</span>
        <form action="/web/index.html" autocomplete="on">
          First name:<input type="text" name="fname" value="你好"><br>
          Last name: <input type="text" name="lname"><br>
          E-mail: <input type="email" name="email" autocomplete="off" placehder="nihao"><br>
          <input type="submit">
        </form>
        <br>4、autofocus 属性：规定当页面加载时 &lt;input&gt; 元素应该自动获得焦点。autofocus 属性是一个布尔属性。
        <br><span>实例：</span>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit">
        </form>
        <br>5、checked 属性：规定在页面加载时应该被预先选定的 &lt;input&gt; 元素。checked 属性是一个布尔属性。checked 属性适用于 &lt;input type="checkbox"&gt; 和 &lt;input type="radio"&gt;。checked 属性也可以在页面加载后，通过 JavaScript 代码进行设置。
        <br><span>实例：</span>
        <form action="/web/index.html" method="get">
          <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br>
          <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br>
          <input type="submit" value="提交">
        </form>  
        <br>6、disabled 属性：规定应该禁用的 &lt;input&gt; 元素。disabled 属性是一个布尔属性。被禁用的 input 元素是无法使用和无法点击的。disabled 属性进行设置，使用户在满足某些条件时（比如选中复选框，等等）才能使用 &lt;input&gt; 元素。然后，可使用 JavaScript 来删除 disabled 值，使该&lt;input&gt; 元素变为可用的状态。提示：表单中被禁用的 &lt;input&gt; 元素不会被提交。注意：disabled 属性不适用于 &lt;input type="hidden"&gt;。
        <br><span>实例：</span>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname" disabled><br>
          <input type="submit" value="提交">
        </form>   
        <br> 7、form 属性：规定 &lt;input&gt; 元素所属的一个或多个表单。
        <br><span>实例：</span>
        <form action="/web/index.html" id="form1">
        First name: <input type="text" name="fname"><br>
        <input type="submit" value="提交">
        </form>   
        <p> "Last name" 字段没有在form表单之内，但它也是form表单的一部分。</p>
        Last name: <input type="text" name="lname" form="form1">
        <br>8、formaction 属性：规定当表单提交时处理输入控件的文件的 URL。formaction 属性覆盖 &lt;form&gt; 元素的 action 属性。注释：formaction 属性适用于 type="submit" 和 type="image"。
        <br><span>实例：</span>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit" value="提交"><br>
          <input type="submit" formaction="/web/vuex.html" value="以管理员提交">
        </form>
        <br>9、formenctype 属性：规定当表单数据提交到服务器时如何编码（仅适用于 method="post" 的表单）。formenctype 属性覆盖 &lt;form&gt; 元素的 enctype 属性。注释：formenctype 属性与 type="submit" 和 type="image" 配合使用。
        <br><span>实例：</span>
        <form action="/web/index.html" method="post">
          First name: <input type="text" name="fname"><br>
          <input type="submit" value="提交">
          <input type="submit" formenctype="multipart/form-data" value="以Multipart/form-data提交">
        </form>
        <br>10、formmethod 属性：定义发送表单数据到 action URL 的 HTTP 方法。formmethod 属性覆盖 &lt;form&gt; 元素的 method 属性。注意：formmethod 属性与 type="submit" 和 type="image" 配合使用。表单数据可被作为 URL 变量的形式来发送（method="get"）或者作为 HTTP post 事务的形式来发送（method="post"）。表单数据可被作为 URL 变量的形式来发送（method="get"）或者作为 HTTP post 事务的形式来发送（method="post"）。     
        <br><span>实例：</span>
        <form action="/web/vuex.html" method="get">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit" value="提交">
          <input type="submit" formmethod="post" formaction="/web/index.html" value="使用 POST 提交">
        </form>
        <br>11、novalidate 属性：规定当表单提交时 &lt;input&gt; 元素不进行验证。novalidate 属性是一个布尔属性。formnovalidate 属性覆盖 &lt;form&gt; 元素的 novalidate 属性。注意：formnovalidate 属性可与 type="submit" 配合使用。  
        <br><span>实例：</span>
        <form action="/web/index.html">
          E-mail: <input type="email" name="userid"><br>
          <input type="submit" value="提交"><br>
          <input type="submit" formnovalidate="formnovalidate" value="不验证提交">
        </form>
        <br>12、formtarget 属性：规定表示提交表单后在哪里显示接收到响应的名称或关键词。formtarget 属性覆盖 &lt;form&gt; 元素的 target 属性。注意：formtarget 属性可以与 type="submit" 和 type="image" 配合使用。
        <br><span>实例：</span>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit" value="正常提交">
          <input type="submit" formtarget="_blank" value="提交到一个新的页面上">
        </form> 
        <br>13、height 属性规定 &lt;input&gt; 元素的高度。注意：height 属性只适用于 &lt;input type="image"&gt;。提示：为图片指定 height 和 width 属性是一个好习惯。如果设置了这些属性，当页面加载时会为图片预留需要的空间。而如果没有这些属性，则浏览器就无法了解图像的尺寸，也就无法为其预留合适的空间。情况是当页面和图片加载时，页面布局会发生变化。
        <br><span>实例：</span>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="image" src="/web/resources/168-monkey.png"  alt="Submit" width="48" height="48">
        </form>
        <br>14、list 属性：引用 &lt;datalist&gt; 元素，其中包含 &lt;input&gt; 元素的预定义选项。注意：Safari 或者 Internet Explorer 9 及之前的版本不支持 &lt;input&gt; 标签的 list 属性。
        <br><span>实例：</span>
        <form action="/web/index.html" method="get">
        <input list="browsers" name="browser">
        <datalist id="browsers">
          <option value="Internet Explorer"/>
          <option value="Firefox"/>
          <option value="Chrome"/>
          <option value="Opera"/>
          <option value="Safari"/>
        </datalist>
        <input type="submit">
        </form>  
        <br>15、max 属性：规定 &lt;input&gt; 元素的最大值。 提示：max 属性与 min 属性配合使用，可创建合法值范围。注意：max 和 min 属性适用于以下 input 类型：number、range、date、datetime、datetime-local、month、time 和 week。
        <br><span>实例：</span>
        <form action="/web/index.html">
         输入 1980-01-01 之前的日期:
          <input type="date" name="bday" max="1979-12-31" value="1979-12-31"><br>
         输入 2000-01-01 之后的日期:
          <input type="date" name="lday" min="2000-01-02" value="2001-01-01"><br>
          数量 (在1和5之间):
          <input type="number" name="quantity" min="1" max="5"><br>
          <input type="submit">
        </form> 
        <br>16、maxlength 属性：规定 &lt;input&gt; 元素中允许的最大字符数。
        <br><span>实例：</span>
        <form action="/web/index.html">
          Username: <input type="text" name="usrname" maxlength="10"><br>
          <input type="submit" value="提交">
        </form>
        <br>17、min 属性规定 &lt;input&gt; 元素的最小值。提示：min 属性与 max 属性配合使用，可创建合法值范围。注意：max 和 min 属性适用于以下 input 类型：number、range、date、datetime、datetime-local、month、time 和 week。
        <br><span>实例：</span>
        <form action="/web/index.html">
         输入 1980-01-01 之前的日期:
          <input type="date" name="bday" max="1979-12-31" value="1979-12-31"><br>
         输入 2000-01-01 之后的日期:
          <input type="date" name="lday" min="2000-01-02" value="2001-01-01"><br>
          数量 (在1和5之间):
          <input type="number" name="quantity" min="1" max="5"><br>
          <input type="submit">
        </form>
        <br>18、multiple 属性：规定允许用户输入到 &lt;input&gt; 元素的多个值。multiple 属性是一个布尔属性。注意：multiple 属性适用于以下 input 类型：email 和 file。
        <br><span>实例：</span>
        <form action="/web/index.html">
          选择图片: <input type="file" name="img" multiple>
          <input type="submit">
        </form>
        <br>19、name 属性：规定 &lt;input&gt; 元素的名称。name 属性用于在 JavaScript 中引用元素，或者在表单提交后引用表单数据。注意：只有设置了 name 属性的表单元素才能在提交表单时传递它们的值。
        <br><span>实例：</span>
        <form action="/web/index.html">
          Name: <input type="text" name="fullname"><br>
          Email: <input type="text" name="email"><br>
          <input type="submit" value="提交">
        </form>
        <br>20、pattern 属性：规定用于验证 &lt;input&gt; 元素的值的正则表达式。注意：pattern 属性适用于下面的 input 类型：text、search、url、tel、email 和 password。提示：请使用全局的 title 属性来描述模式以帮助用户。
        <br><span>实例：</span>
        <form action="/web/index.html">
          Country code: <input type="text" name="country_code" pattern="[A-Za-z]{3}" title="3个字母表示的国家代码">
          <input type="submit">
        </form>
        <br>21、readonly 属性：规定输入字段是只读的。readonly 属性是一个布尔属性。只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本。readonly 属性可以防止用户对值进行修改，直到满足某些条件为止（比如选中了一个复选框）。然后，需要使用 JavaScript 消除 readonly 值，将输入字段切换到可编辑状态。
        <br><span>实例：</span>
        <form action="/statics/demosource/demo-form.php">
          Email: <input type="text" name="email"><br>
          Country: <input type="text" name="country" value="中国" readonly><br>
          <input type="submit" value="提交">
        </form>
        <br>22、required 属性：规定必需在提交表单之前填写输入字段。required 属性是一个布尔属性。注意：required 属性适用于下面的 input 类型：text、search、url、tel、email、password、date pickers、number、checkbox、radio 和 file。
        <br><span>实例：</span>
        <form action="/web/index.html">
          Username: <input type="text" name="usrname" required>
          <input type="submit">
        </form>
        <br>23、size 属性：规定以字符数计的 &lt;input&gt; 元素的<mark>可见</mark>宽度（类似CSS的width）。注意：size 属性适用于下面的 input 类型：text、search、tel、url、email 和 password。提示：如需规定 &lt;input&gt; 元素中允许的最大字符数，请使用 maxlength 属性。
        <br><span>实例：</span>
        <form action="/statics/demosource/demo-form.php">
          Email: <input type="text" name="email" size="35"><br>
          PIN: <input type="text" name="pin" maxlength="10" size="8"><br>
          <input type="submit" value="提交">
        </form> 
        <br>24、src 属性：规定显示为提交按钮的图像的 URL。注意：src 属性对于 &lt;input type="image"&gt; 是必需的属性，且只能与 &lt;input type="image"&gt; 配合使用。     
        <br><span>实例：</span>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          <input type="image" src="/web/img/favicon.ico" alt="Submit" width="48" height="48">
        </form> 
        <br>25、step 属性：规定 &lt;input&gt; 元素的合法数字间隔。实例：如果 step="3"，则合法数字应该是 -3、0、3、6，以此类推。提示：step 属性可以与 max 和 min 属性配合使用，以创建合法值的范围。注意：step 属性适用于下面的 input 类型：number、range、date、datetime、datetime-local、month、time 和 week。
        <br><span>实例：</span>
        <form action="/web/index.html">
          <input type="number" name="points" step="3">
          <input type="submit">
        </form>  
        <br>26、type 属性：规定要显示的 &lt;input&gt; 元素的类型。默认类型是：text。提示：该属性不是必需的，但是我们认为您应该始终使用它。
        <br><span>属性值：</span>
        <pre style="color:green;">
            ● button              定义可点击的按钮（通常与 JavaScript 一起使用来启动脚本）。
            ● checkbox            定义复选框。
            ● color               定义拾色器。
            ● date                定义 date 控件（包括年、月、日，不包括时间）。
            ● datetime            定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，基于 UTC 时区）。
            ● datetime-local      定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，不带时区）。
            ● email               定义用于 e-mail 地址的字段。
            ● file                定义文件选择字段和 "浏览..." 按钮，供文件上传。
            ● hidden              定义隐藏输入字段。
            ● image               定义图像作为提交按钮。
            ● month               定义 month 和 year 控件（不带时区）。
            ● number              定义用于输入数字的字段。
            ● password            定义密码字段（字段中的字符会被遮蔽）。
            ● radio               定义单选按钮。
            ● range               定义用于精确值不重要的输入数字的控件（比如 slider 控件）。
            ● reset               定义重置按钮（重置所有的表单值为默认值）。
            ● search              定义用于输入搜索字符串的文本字段。
            ● submit              定义提交按钮。
            ● tel                 定义用于输入电话号码的字段。
            ● text                默认。定义一个单行的文本字段（默认宽度为 20 个字符）。
            ● time                定义用于输入时间的控件（不带时区）。
            ● url                 定义用于输入 URL 的字段。
            ● week                定义 week 和 year 控件（不带时区）。            
        </pre>
        <br><span>实例：</span>定义可点击的按钮（通常与 JavaScript 一起使用来启动脚本）。<br>
        <form>
        <input type="button" value="点我" @click="msg()">
        </form>
        <br><span>实例：</span>定义复选框。<br>
        <form action="/web/index.html">
          <input type="checkbox" name="vehicle[]" value="Bike"> 我有一辆自行车<br>
          <input type="checkbox" name="vehicle[]" value="Car"> 我有一辆小轿车<br>
          <input type="checkbox" name="vehicle[]" value="Boat"> 我有一艘船<br>
          <input type="submit" value="提交">
        </form>
        <br><span>实例：</span>定义拾色器。<br>
        <form action="/web/index.html">
          选择你喜欢的颜色: <input type="color" name="favcolor"><br>
          <input type="submit">
        </form>
        <br><span>实例：</span>定义 date 控件（包括年、月、日，不包括时间）。<br>
        <form action="/web/index.html">
          生日: <input type="date" name="bday">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，基于 UTC 时区）。<br>
        <form action="/web/index.html">
          生日 (日期和时间): <input type="datetime" name="bdaytime">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，不带时区）。<br>
        <form action="/web/index.html">
          生日 (日期和时间): <input type="datetime-local" name="bdaytime">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义用于 e-mail 地址的字段。<br>
        <form action="/web/index.html">
          E-mail: <input type="email" name="usremail">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义文件选择字段和 "浏览..." 按钮，供文件上传。<br>
        <form action="/web/index.html">
          选择一个文件: <input type="file" name="img">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义隐藏输入字段。<br>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          <input type="hidden" name="country" value="中国">
          <input type="submit" value="提交">
        </form>
        <p>注意隐藏字段用户是看不到的。</p>
        <br><span>实例：</span>定义图像作为提交按钮。<br>
        <form action="/web/index.html">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="image" src="/web/img/monkey.ico" alt="Submit" width="48" height="48">
        </form>
        <p><b>注意:</b> 点击激活图片按钮 input type="image" 会发送  X 和 Y 坐标到服务端。</p>
        <br><span>实例：</span>定义 month 和 year 控件（不带时区）。<br>
        <form action="/web/index.html">
          生日 ( 月和年 ): <input type="month" name="bdaymonth">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义用于输入数字的字段。<br>
        <form action="/web/index.html">
          数量 ( 1 到 5 之间): <input type="number" name="quantity" min="1" max="5">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义密码字段（字段中的字符会被遮蔽）。<br>
        <form action="/web/index.html">
          Email: <input type="text" name="email"><br>
          Password: <input type="password" name="pwd" maxlength="8"><br>
          <input type="submit">
        </form>
        <br><span>实例：</span>定义单选按钮。<br>
        <form action="/web/index.html">
          <input type="radio" name="gender" value="男">男 
          <input type="radio" name="gender" value="女">女<br>
          <input type="submit" value="提交">
        </form>
        <br><span>实例：</span>定义用于精确值不重要的输入数字的控件（比如 slider 控件）。<br>
        <form action="/web/index.html" method="get">
        Points: <input type="range" name="points" min="1" max="10">
        <input type="submit">
        </form>
        <br><span>实例：</span>定义重置按钮（重置所有的表单值为默认值）。<br>
        <form action="/web/index.html">
          Email: <input type="text" name="email"><br>
          Pin: <input type="text" name="pin" maxlength="4"><br>
          <input type="reset" value="重置">
          <input type="submit" value="提交">
        </form>
        <br><span>实例：</span>定义用于输入搜索字符串的文本字段。<br>
        <form action="/web/index.html">
          Search Google: <input type="search" name="googlesearch"><br>
          <input type="submit">
        </form>
        <br><span>实例：</span>定义用于输入时间的控件（不带时区）。<br>
        <form action="/web/index.html">
          选择时间: <input type="time" name="usr_time">
          <input type="submit">
        </form>
        <br><span>实例：</span>定义用于输入 URL 的字段。<br>
        <form action="/web/index.html">
          添加你的主页: <input type="url" name="homepage"><br>
          <input type="submit">
        </form>
        <br><span>实例：</span>定义 week 和 year 控件（不带时区）。<br>
        <form action="/web/index.html">
          选择周: <input type="week" name="year_week">
          <input type="submit">
        </form>

    </p>
    <hr>
    <!-- HTML <textarea> 标签 -->
    <h2 style="text-align:center;"># &lt;textarea&gt;标签</h2>
    <p id="textarea">简介：
        <br>&lt;textarea&gt; 标签表示多行纯文本编辑控件，用户可在其文本区域中写入文本。 
        <br><span>标签定义及使用说明：</span>
        <br>&lt;textarea&gt; 标签定义一个多行的文本输入控件。
        <br>文本区域中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier）。
        <br>可以通过 cols 和 rows 属性来规定 textarea 的尺寸大小，不过更好的办法是使用 CSS 的 height 和 width 属性。
        <br>提示：可以通过 &lt;textarea&gt; 标签的 wrap 属性设置文本输入区内的换行模式。  
        <br><span>实例：</span><br>
        <textarea rows="10" cols="30">
        我是一个文本框。
        </textarea>
        <br><span>属性：</span>
        <br>1、autofocus 属性：规定文本区域应该在页面加载时自动获得焦点。autofocus 属性是一个布尔属性。
        <br><span>实例：</span><br>
        <textarea rows="4" cols="50">
        在 w3cschool.cn 你将学会如何制作网站。我们提供了最全的web技术教程。
        </textarea>
        <br>2、cols 属性：规定文本区域的可见宽度。注意： textarea 的尺寸大小也可以通过 CSS 的 height 和 width 属性设置。
        <br><span>实例：</span><br>
        <textarea rows="4" cols="50">
        在w3cschool.cn您将学习如何制作一个网站。我们提供了所有Web开发免费教程。
        </textarea>
        <br>3、disabled 属性：规定文本区域应该被禁用。disabled 属性是一个布尔属性。被禁用的文本区域既不可用，文本也不可选择（不能被复制）。可以设置 disabled 属性，直到满足某些条件（比如选择一个复选框），才恢复用户对该文本区域的使用。然后，可以使用 JavaScript 来移除 disabled 属性的值，以使文本区域变为可用状态。
        <br><span>实例：</span><br>
        <textarea disabled>
        在 w3cschool.cn 你将学会如何制作网站。我们提供了最全的web技术教程。
        </textarea>
        <br>4、form 属性：规定文本区域所属的一个或多个表单。
        <br><span>实例：</span><br>
        <form action="/web/index.html" id="usrform">
          Name: <input type="text" name="usrname">
          <input type="submit">
        </form>
        <br>
        <textarea rows="4" cols="50" name="comment" form="usrform">
        输入内容...
        </textarea>
        <p>以上的表单在文本框之外，但是它仍是表单中的一部分。</p>
        <br>5、maxlength 属性规定文本区域的最大长度（以字符计）。
        <br><span>实例：</span><br>
        <textarea rows="4" cols="50" maxlength="50">
        输入内容...
        </textarea>
        <br>6、name 属性为文本区域规定名称。name 属性用于在 JavaScript 中对元素进行引用，或者在表单提交之后，对表单数据进行引用。
        <br><span>实例：</span><br>
        <form action="demo-form.php">
        <textarea rows="4" cols="50" name="comment">
        输入内容...</textarea>
        <input type="submit">
        </form>
        <br>7、placeholder 属性（占位符）：规定一个简短的提示，它描述了文本区域的期望值。当文本区域为空，且当字段获得焦点后又失去焦点时，文本区域中显示该提示。
        <br><span>实例：</span><br>
        <textarea rows="4" cols="50" placeholder="描述信息..."></textarea>
        <br>8、readonly 属性规定文本区域为只读。readonly 属性是一个布尔属性。在只读的文本区域中，无法对内容进行修改，但用户可以通过 tab 键切换到该控件，选取或复制其中的内容。可以设置 readonly 属性，直到满足某些条件（比如选择一个复选框），才恢复用户对该文本区域的使用。然后，可以使用 JavaScript 来移除 readonly 属性的值，以使文本区域变为可编辑状态。
        <br><span>实例：</span><br>
        <textarea rows="4" cols="50" readonly>
        在 w3cschool.cn 你将学会如何制作网站。我们提供了最全的web技术教程。
        </textarea>
        <br>9、required 属性规定一个文本区域是必需的/必须填写（以提交表单）。required 属性是一个布尔属性。
        <br><span>实例：</span><br>
        <form action="/web/index.html">
        <textarea rows="4" cols="50" name="comment" required='required'  :autofocus='isFocus'></textarea>
        <input type="submit">
        </form>
        <br>10、rows 属性规定文本区域的可见高度，以行数计。注意： textarea 的尺寸大小也可以通过 CSS 的 height 和 width 属性设置。
        <br><span>实例：</span><br>
        <textarea rows="4" cols="50">
        在w3cschool.cn您将学习如何制作一个网站。我们提供了所有Web开发免费教程。
        </textarea>
        <br>11、wrap 属性规定在表单提交时文本区域中的文本是如何换行的。带有 wrap="hard" 的文本区域将在表单提交时包含换行符（如果有换行符）。wrap="soft" 在表单提交时，textarea 中的文本不换行。默认。
        <br><span>实例：</span><br>
        <form action="/web/index.html">
        <textarea rows="2" cols="20" name="usrtxt" wrap="hard">
        w3cschoolW3Cschool教程提供了最全的web技术教程。
        </textarea>
        <input type="submit">
        </form>
    </p>
    <hr>
    <!-- HTML <button> 标签 -->
    <h2 style="text-align:center;"># &lt;button&gt;标签</h2>
    <p id="button">简介：
        <br><&lt;button&gt; 标签用来设置 HTML 中的按钮。
        <br><span>标签定义及使用说明：</span>
        <br><&lt;button&gt; 标签定义一个按钮。
        <br><在 &lt;button&gt; 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 &lt;input&gt; 元素创建的按钮之间的不同之处。
        <br><提示：请始终为 &lt;button&gt; 元素规定 type 属性。不同的浏览器对 &lt;button&gt; 元素的 type 属性使用不同的默认值。
        <br><span>提示和注释：</span>
        <br>提示：与 &lt;input type="button"&gt; 相比，&lt;button&gt; 标签提供了更为强大的功能和更丰富的内容。
        <br>注释：如果在 HTML 表单中使用 &lt;button&gt; 元素，不同的浏览器可能会提交不同的按钮值。IE 浏览器将提交 &lt;button&gt; 标签之间的文本，而其他浏览器将提交 value 属性的内容。请使用 &lt;input&gt; 在 HTML 表单中创建按钮。
        <br><span>属性：</span>
        <br>1、autofocus 属性：规定当页面加载时按钮应当自动地获得焦点。autofocus 属性是一个 boolean(布尔) 属性。 
        <br><span>实例：</span><br>
        <button type="button"  onclick="alert('Hello world!')">点我</button> 
        <br>2、disabled 属性：用来控制HTML文档中的按钮是否可交互，它是boolean类型的值如果使用该属性，则会禁用按钮。disabled 属性是一个 boolean(布尔) 属性。被禁用的按钮是无法使用和无法点击的。可以对 disabled 属性进行设置，使用户在满足某些条件时（比如选中复选框，等等）才能点击按钮。然后，可使用 JavaScript 来删除 disabled 属性，使该按钮变为可用的状态。
        <br><span>实例：</span><br>
        <button type="button" disabled>点我</button>
        <br>3、form 属性：规定按钮属于一个或多个表单。提示：form 属性的值必须是按钮所属表单&lt;form&gt;的 id。提示：如需引用一个以上的表单，请使用空格分隔的列表。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get" id="nameform">
        First name: <input type="text" name="fname" /><br>
        Last name: <input type="text" name="lname" /><br>
        </form>
        <p>下面的按钮是在表单元素外,但仍是表单的一部分。</p>
        <button type="submit" form="nameform" value="提交">提交</button>
        <br>4、formaction 属性：覆盖 form 元素的 action 属性。该属性与 type="submit" 配合使用。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
        First name: <input type="text" name="fname" /><br>
        Last name: <input type="text" name="lname" /><br>
        <button type="submit">提交</button><br>
        <button type="submit" formaction="/statics/demosource/demo-admin.php" method="get">提交</button>
        </form>
        <br>5、formenctype 属性：覆盖 form 元素的 enctype 属性。该属性与 type="submit" 配合使用。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="post">
        Name: <input type="text" name="fname" value="Ståle Refsnes" /><br>
        <button type="submit" >使用默认编码提交</button>
        <button type="submit" formenctype="multipart/form-data">使用multipart/form-data编码提交</button>
        </form>
        <br>6、formmethod 属性制定发送表单数据使用的 HTTP 方法。formmethod 属性覆盖 form 元素的 method 属性。formmethod 属性需与 type="submit" 配合使用。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
        First name: <input type="text" name="fname" /><br>
        Last name: <input type="text" name="lname" /><br>
        <button type="submit" >提交</button>
        <button type="submit" formmethod="post" formaction="/web/demo.html">使用 POST 提交</button>
        </form>
        <br>7、formnovalidate 属性是一个 boolean（布尔） 属性。如果使用该属性，则提交表单时按钮不会执行验证过程。formnovalidate 属性覆盖表单的 novalidate 属性。该属性与 type="submit" 配合使用。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
        E-mail: <input type="email" name="userid" /><br>
        <button type="submit" >提交</button><br>
        <button type="submit" formnovalidate>不验证提交</button>
        </form>
        <br>8、formtarget 属性：指定在提交表单后在哪里显示响应。formtarget 属性覆盖表单元素的 target 属性。该属性与 type="submit" 配合使用。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
          First name: <input type="text" name="fname" /><br>
          Last name: <input type="text" name="lname" /><br>
        <button type="submit" >提交</button>
        <button type="submit" formtarget="_blank">提交到一个新窗口或选项卡</button>
        </form>
        <br>9、name 属性为按钮规定名称。name 属性用于在 JavaScript 中对元素进行引用，或者在表单提交之后，对表单数据进行引用。提示： 不同的 button 元素可以共享相同的名称。这就允许您标记带有相同名称的若干按钮，以便在表单中使用时能够提交不同的值。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
        Choose your favorite subject:
        <button name="subject" type="submit" value="HTML">HTML</button>
        <button name="subject" type="submit" value="CSS">CSS</button>
        </form>
        <br>10、type 属性规定按钮的类型。提示： 请始终为按钮规定 type 属性。Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit"。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
        First name: <input type="text" name="fname"><br>
        Last name: <input type="text" name="lname"><br>
        <button type="submit" value="提交">提交</button>
        <button type="reset" value="重置">重置</button>
        </form>
        <br>11、value 属性规定了 &lt;form&gt; 中 &lt;button&gt; 的初始值。注意： 在表单中，如果按钮作为表单数据提交，只有表单的value值会被提交。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
        Choose your favorite subject:
        <button name="subject" type="submit" value="fav_HTML">HTML</button>
        <button name="subject" type="submit" value="fav_CSS">CSS</button>
        </form>
    </p>
    <hr>
    <!-- HTML <select> 标签 -->
    <h2 style="text-align:center;"># &lt;select&gt;标签</h2>
    <p id="select">简介：
        <br>&lt;select&gt; 元素用来创建下拉列表。
        <br>&lt;select&gt; 元素中的 &lt;option&gt; 标签定义了列表中的可用选项。
        <br>select 元素可创建单选或多选菜单。当提交表单时，浏览器会提交选定的项目，或者收集用逗号分隔的多个选项，将其合成一个单独的参数列表，并且在将 &lt;select&gt; 表单数据提交给服务器时包括 name 属性。
        <br><span>提示和注释：</span>
        <br>提示：&lt;select&gt; 元素是一种表单控件，可用于在表单中接受用户输入。
        <br><span>属性：</span>
        <br>1、autofocus 属性规定下拉列表在页面加载时自动获得焦点。autofocus 属性是一个布尔属性。
        <br><span>实例：</span><br>
        <select>
        <option value="volvo" style="display:none">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        </select>
        <br>2、disabled 属性规定下拉列表应该被禁用。disabled 属性是一个布尔属性。被禁用的下拉列表既不可用，也不可点击。可以设置 disabled 属性，直到满足某些条件（比如选择一个复选框），才恢复用户对该下拉列表的使用。然后，可以使用 JavaScript 来移除 disabled 属性的值，以使下拉列表变为可用状态。
        <br><span>实例：</span><br>
        <select disabled>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br>3、form 属性规定下拉列表所属的一个或多个表单。
        <br><span>实例：</span><br>
        <form action="/web/index.html" id="carform">
          Firstname:<input type="text" name="fname">
          <input type="submit">
        </form>
        <br>
        <select name="carlist" form="carform">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <br>4、multiple 属性规定可同时选择多个选项。multiple 属性是一个布尔属性。在不同操作系统和浏览器中，选择多个选项的差异：对于 windows：按住 Ctrl 按钮来选择多个选项；对于 Mac：按住 command 按钮来选择多个选项
        <br><span>实例：</span><br>
        <form action="/web/index.html">
        <select name="cars[]" multiple>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit">
        </form>
        <p>按住 Ctrl (windows) / Command (Mac) 按钮来选择多个选项。</p>
        <br>5、name 属性规定下拉列表的名称。name 属性用于在 JavaScript 中引用元素，或者在表单提交后引用表单数据。
        <br><span>实例：</span><br>
        <form action="/web/index.html">
        <select name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit">
        </form>
        <br>6、required 属性规定用户在提交表单前必须选择一个值。required 属性是一个布尔属性。
        <br><span>实例：</span><br>
        <form action="/web/index.html">
        <select required>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
        <input type="submit">
        </form>
        <br>7、size 属性规定下拉列表中可见选项的数目。如果 size 属性的值大于 1，但是小于列表中选项的总数目，浏览器会显示出滚动条，表示可以查看更多选项。
        <br><span>实例：</span><br>
        <select size="3">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
    </p>
    <hr>
    <!-- HTML <optgroup> 标签 -->
    <h2 style="text-align:center;"># &lt;optgroup&gt;标签</h2>
    <p id="optgroup">简介：
        <br>&lt;optgroup&gt; 标签用于对 &lt;select&gt; 元素所提供的选项进行分组。当您使用一个较长的选项列表时，对相关的选项进行组合会使处理更加容易。 
        <br><span>标签定义及使用说明：</span>
        <br>&lt;optgroup&gt; 标签经常用于把相关的选项组合在一起。
        <br>如果你有很多的选项组合, 你可以使用&lt;optgroup&gt; 标签能够很简单的将相关选项组合在一起。
        <br><span>实例：</span><br>
        <select>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        <br><span>属性：</span>
        <br>1、disabled 属性规定选项组应该被禁用。disabled 属性是一个布尔属性。被禁用的选项组既不可用，也不可点击。可以设置 disabled 属性，直到满足某些条件（比如选择一个复选框），才恢复用户对该选项组的使用。然后，可以使用 JavaScript 来移除 disabled 属性的值，以使选项组变为可用状态。
        <br><span>实例：</span><br>
        <select>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars" disabled>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        <br>2、label 属性为选项组规定描述标签。
        <br><span>实例：</span><br>
        <select>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
    </p>
    <hr> 
    <!-- HTML <option> 标签 -->
    <h2 style="text-align:center;"># &lt;option&gt;标签</h2>
    <p id="option">简介：
        <br>&lt;option&gt; 标签用于定义包含在&lt;select&gt;、&lt;optgroup&gt; 或 &lt;datalist&gt; 元素中的项。
        <br>&lt;option&gt; 标签可以表示 HTML 文档中弹出窗口中的菜单项和其他项目列表。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;option&gt; 标签定义下拉列表中的一个选项（一个条目）。
        <br>&lt;option&gt; 标签中的内容作为 &lt;select&gt; 或者&lt;datalist&gt; 一个元素使用。
        <br><span>提示和注释：</span>
        <br>注释：&lt;option&gt; 标签可以在不带有任何属性的情况下使用，但是您通常需要使用 value 属性，此属性会指示出被送往服务器的内容。
        <br>注释：请与 select 元素配合使用此标签，否则这个标签是没有意义的。
        <br>提示：如果列表选项很多，可以使用 &lt;optgroup&gt; 标签对相关选项进行组合。
        <br><span>实例：</span><br>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <br><span>属性：</span>
        <br>1、disabled 属性规定某个选项应该被禁用。disabled 属性是一个布尔属性。被禁用的选项既不可用，也不可点击。可以设置 disabled 属性，直到满足某些条件（比如选择一个复选框），才恢复用户对该选项的使用。然后，可以使用 JavaScript 来清除 disabled 属性，以使选项变为可用状态。
        <br><span>实例：</span><br>
        <select>
          <option value="volvo" disabled>Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi">Audi</option>
        </select>
        <br>2、label 属性规定更短版本的选项。下拉列表中会显示出所规定的更短版本。
        <br><span>实例：</span><br>
        <select>
          <option label="Volvo">Volvo (Latin for "I roll")</option>
          <option label="Saab">Saab (Swedish Aeroplane AB)</option>
          <option label="Mercedes">Mercedes (Mercedes-Benz)</option>
          <option label="Audi">Audi (Auto Union Deutschland Ingolstadt)</option>
        </select>
        <br>3、selected 属性规定在页面加载时预先选定该选项。selected 属性是一个布尔属性。被预选的选项会显示在下拉列表最前面的位置。提示：也可以在页面加载后通过 JavaScript 设置 selected 属性。
        <br><span>实例：</span><br>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi" selected>Audi</option>
        </select>
        <br>4、value 属性规定在表单被提交时被发送到服务器的值。开始标签 &lt;option&gt; 与结束标签 &lt;/option&gt; 之间的内容是浏览器显示在下拉列表中的内容，而 value 属性中的值是表单提交时被发送到服务器的值。注意：如果没有规定 value 属性，选项的值将设置为 &lt;option&gt; 标签中的内容。
        <br><span>实例：</span><br>
        <form action="/web/index.html">
        <select name="cars">
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <input type="submit" value="提交">
        </form>
    </p>
    <hr>
    <!-- HTML <label> 标签 -->
    <h2 style="text-align:center;"># &lt;label&gt;标签</h2>
    <p id="label">简介：
        <br>&lt;label&gt; 标签是一种常见的表单控件，触发对应表单控件功能，让用户在使用表单的时候能够有更好的体验。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;label&gt; 标签为 input 元素定义标注（标记）。
        <br>label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。
        <br>&lt;label&gt; 标签的 for 属性应当与相关元素的 id 属性相同。
        <br><span>提示和注释：</span>
        <br>提示:"for" 属性可把 label 绑定到另外一个元素。请把 "for" 属性的值设置为相关元素的 id 属性的值。
        <br><span>实例：</span><br>
        <form action="#">
          <label for="male">Male</label>
          <input type="radio" name="sex" id="male" value="male"><br>
          <label for="female">Female</label>
          <input type="radio" name="sex" id="female" value="female"><br><br>
          <input type="submit" value="提交" autofocus>
        </form>
        <br><span>属性：</span>
        <br>1、for 属性：规定 label 绑定的表单元素。        
        <br><span>实例：</span><br>
        <form action="#">
          <label for="male">Male</label>
          <input type="radio" name="sex" id="male" value="male"><br>
          <label for="female">Female</label>
          <input type="radio" name="sex" id="female" value="female"><br><br>
          <input type="submit" value="提交">
        </form>
        <br>2、form 属性：规定 &lt;label&gt; 元素所属的一个或多个表单。
        <br><span>实例：</span>
        <p>第一个单选按钮在表单之外,但它仍属于该表单的一部分。尝试点击文本标签切换单选按钮。</p>
        <form action="#" id="form1">
          <input type="radio" name="sex" id="male" value="male">
          <label for="male" form="form1">Male</label><br>
          <input type="radio" name="sex" id="female" value="female">
          <label for="female">Female</label><br>
          <input type="submit" value="提交">
        </form>
    </p>
    <hr>
    <!-- HTML <fieldset> 标签 -->
    <h2 style="text-align:center;"># &lt;fieldset&gt;标签</h2>
    <p id="fieldset">简介：
        <br>&lt;fieldset&gt; 标签内的一组表单元素会在 WEB 浏览器中以特殊的方式显示，比如不同样式的边界、3D效果等。
        <br>&lt;fieldset&gt; 标签可以将表单内的相关元素分组。
        <br>&lt;fieldset&gt; 标签会在相关表单元素周围绘制边框。
        <br><span>提示和注释：</span>
        <br>提示：&lt;legend&gt; 标签为 &lt;fieldset&gt; 元素定义标题。
        <br>提示：&lt;legend&gt; 必须是 &lt;fieldset&gt; 元素的一个子元素
        <br><span>实例：</span><br>
        <form>
         <fieldset>
          <legend>个人信息:</legend>
          姓名: <input type="text"><br>
          邮箱: <input type="text"><br>
          生日: <input type="text">
         </fieldset>
        </form>
        <br><span>属性：</span>
        <br>1、disabled 属性：规定应该禁用一组表单元素（一个 fieldset）。disabled 属性是一个布尔属性。被禁用的 fieldset 不可用，也不可点击。可以对 disabled 属性进行设置，使用户在满足某些条件时（比如选中复选框，等等）才能使用输入字段。然后，可使用 JavaScript 来删除 disabled 值，使该 fieldset 变为可用的状态。
        <br><span>实例：</span><br>
        <form>
          <fieldset disabled>
            <legend>个人信息:</legend>
            姓名: <input type="text"><br>
            邮箱: <input type="text"><br>
            生日: <input type="text">
          </fieldset>
        </form>
        <br>2、form 属性规定 fieldset 所属的一个或多个表单。提示：form 属性的值必须是所属表单的 id。提示：如需引用一个以上的表单，请使用空格分隔的列表。
        <br><span>实例：</span><br>
        <form action="#" method="get" id="form1">
        你喜欢的颜色是什么？<input type="text" name="fav_color"><br>
        <input type="submit">
        </form>
        <p>下面的自定义字段在表单外,但仍是表单的一部分。</p>
        <fieldset form="form1">
          <legend>个人信息:</legend>
          姓名: <input type="text" name="username"><br>
          邮箱: <input type="text" name="usermail"><br>
        </fieldset>
        <p><b>注意：</b>目前，只有 Opera 支持 form 属性。</p>
        <br>3、name 属性规定 fieldset 的名称。name 属性用于在 JavaScript 中引用元素，或者在表单提交之后引用表单数据。
        <br><span>实例：</span><br>
        <form action="#" method="get">
        <fieldset name="personalia">
          姓名: <input type="text" name="username"><br>
          邮箱: <input type="text" name="usermail"><br>
        </fieldset>
        <button type="button" onclick="form.personalia.style.backgroundColor='yellow'">改变控件的背景颜色</button>
        <input type="submit">
        </form>
    </p>
    <hr>
    <!-- HTML <legend> 标签 -->
    <h2 style="text-align:center;"># &lt;legend&gt;标签</h2>
    <p id="legend">简介：
        在 HTML 中我们可以对表单的信息进行分组归类，而&lt;legend&gt; 标签就可以用来组合表单的相关元素，表示了其父级 &lt;fieldset&gt; 内容的标题。
        <br><span>标签定义及使用说明：</span>
        <br>The &lt;legend&gt; 元素为 &lt;fieldset&gt;元素定义标题。
        <br><span>实例：</span><br>
        <form>
         <fieldset>
          <legend>个人信息:</legend>
          姓名: <input type="text"><br>
          邮箱: <input type="text"><br>
          生日: <input type="text">
         </fieldset>
        </form>
    </p>
    <hr>   
    <!-- HTML <datalist> 标签 -->
    <h2 style="text-align:center;"># &lt;datalist&gt;标签</h2>
    <p id="datalist">简介：
        <br>&lt;datalist&gt; 标签需要与 &lt;input&gt; 标签配合使用，用来表示可选的列表。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;datalist&gt; 标签规定了 &lt;input&gt; 元素可能的选项列表。
        <br>&lt;datalist&gt; 标签被用来在为 &lt;input&gt; 元素提供"自动完成"的特性。用户能看到一个下拉列表，里边的选项是预先定义好的，将作为用户的输入数据。
        <br>请使用 &lt;input&gt; 元素的 list 属性来绑定 <&lt;datalist&gt; 元素。
        <br>提示：不能控制 datalist 的位置，并且不能将其与服务器的数据进行绑定。
        <br><span>实例：</span><br>
        <form action="#" method="get">
        <input list="browsers" name="browser">
        <datalist id="browsers">
          <option value="Internet Explorer"/>
          <option value="Firefox"/>
          <option value="Chrome"/>
          <option value="Opera"/>
          <option value="Safari"/>
        </datalist>
        <input type="submit">
        </form>
    </p>
    <hr>  
    <!-- HTML <keygen> 标签 -->
    <h2 style="text-align:center;"># &lt;keygen&gt;标签</h2>
    <p id="keygen">简介：
        <br>&lt;keygen&gt; 标签已经从 Web 标准中删除。您可以通过下述的实例来大致了解该标签的使用。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;keygen&gt; 标签规定用于表单的密钥对生成器字段。
        <br>当提交表单时，私钥存储在本地，公钥发送到服务器。
        <br><span>实例：</span><br>
        <form action="#" method="get">
          用户名: <input type="text" name="usr_name">
          加密: <keygen name="security">
          <input type="submit">
        </form>
        <br><span>属性：</span>
        <br>1、autofocus 属性规定当页面加载时，&lt;keygen&gt; 元素会自动获得焦点。autofocus 属性是一个布尔属性。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
        用户名: <input type="text" name="usr_name">
        加密: <keygen name="security">
        <input type="submit">
        </form>
        <p><strong>注意:</strong> IE 浏览器不支持 keygen 标签。</p>
        <p><strong>注意:</strong>火狐浏览器不支持 keygen 标签的 autofocus 属性。</p>
        <br>2、challenge 属性：如果使用，则将 keygen 的值设置为在提交时询问。
        <br>3、disabled 属性规定应该禁用 &lt;keygen&gt; 元素。被禁用的字段不可用，也不可编辑。disabled 属性是一个布尔属性。可以对 disabled 属性进行设置，使用户在满足某些条件时（比如选中复选框，等等）才能使用字段。然后，可使用 JavaScript 来删除 disabled 值，使该字段变为可用的状态。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
          用户名: <input type="text" name="usr_name">
          加密: <keygen name="security" disabled>
          <input type="submit">
        </form>
        <br>4、form 属性规定 &lt;keygen&gt; 元素所属的一个或多个表单。
        <form action="/web/index.html" method="get" id="secureform">
          用户名: <input type="text" name="usr_name">
          <input type="submit">
        </form>
        <p>下面的注册机领域在表单之外,但它仍属于该表单的一部分。</p>
        加密: <keygen name="security" form="secureform">
        <br>5、keytype 属性规定应该使用哪种密钥生成算法。不同的浏览器对密钥生成算法的支持会有所变化。"rsa"(默认)规定 RSA 安全算法。RSA 密钥强度可由用户选择。"dsa"规定 DSA 安全算法。DSA 密钥长度可由用户选择。"ec"规定 EC 安全算法。EC 密钥强度可由用户选择。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
          用户名: <input type="text" name="usr_name">
          加密: <keygen name="security" keytype="rsa">
          <input type="submit">
        </form>
        <br>6、name 属性规定 &lt;keygen&gt; 元素的名称。&lt;keygen&gt; 元素的 name 属性用于在提交表单后引用表单数据。
        <br><span>实例：</span><br>
        <form action="/web/index.html" method="get">
          用户名: <input type="text" name="usr_name">
          加密: <keygen name="security">
          <input type="submit" autofocus>
        </form>
    </p>
    <hr>
    <!-- HTML <output> 标签 -->
    <h2 style="text-align:center;"># &lt;output&gt;标签</h2>
    <p id="output">简介：
        <br>&lt;output&gt; 标签显示计算或用户操作的结果，该标签是 HTML5 中的新标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;output&gt; 标签作为计算结果输出显示(比如执行脚本的输出)。
        <br><span>实例：</span><br>
        <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
        <input type="range" id="a" value="50">100
        +<input type="number" id="b" value="50">
        =<output name="x" for="a b"></output>
        </form>
        <br><span>属性：</span>
        <br>1、for 属性：规定计算中使用的元素与计算结果之间的关系。
        <br><span>实例：</span><br>
        <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
        <input type="range" id="a" value="50">100
        +<input type="number" id="b" value="50">
        =<output name="x" for="a b"></output>
        </form>
        <br>2、form 属性规定 &lt;output&gt; 元素所属的一个或多个表单。几乎所有的主流浏览器都不支持 form 属性。formmethod
        <br>3、name 属性规定 &lt;output&gt; 元素的名称。name 属性用于在表单提交后引用表单数据，或者用于在 JavaScript 中引用元素。
        <br><span>实例：</span><br>
        <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
        <input type="range" id="a" value="50">100
        +<input type="number" id="b" value="50">
        =<output name="x" for="a b"></output>
        </form>
    </p>
    <hr><!-- ----------------------------HTML 表单标签(end) ---------------------------->


    <!-- ----------------------------HTML 框架标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML 框架标签</h1>
    <!-- HTML <abbr> 标签 -->
    <h2 style='text-align:center;'># &lt;iframe&gt;标签</h2>
    <p id="iframe">简介：
        <br>&lt;iframe&gt; 标签会创建包含另外一个文档的内联框架，有效地将另一个 HTML 页面嵌入到当前页中。
        <br>&lt;iframe&gt; 标签规定一个内联框架。一个内联框架被用来在当前 HTML 文档中嵌入另一个文档。
        <br><span>提示和注释：</span>
        <br>提示：您可以把需要的文本放置在 &lt;iframe&gt; 和 &lt;iframe&gt; 之间，这样就可以应对不支持 &lt;iframe&gt; 的浏览器。
        <br>提示：使用 CSS 为 &lt;iframe&gt; （包括滚动条）定义样式。
        <br>提示：&lt;iframe&gt; 标签主要用于那些多个网页的共有部分，如导航栏、广告栏等。
        <br><span>实例：</span><br>
        <iframe src="/web/index.html">
          <p>您的浏览器不支持  iframe 标签。</p>
        </iframe>
        <br><span>属性：</span>
        <br>1、height 属性规定 &lt;iframe&gt; 的高度，以像素计。
        <br><span>实例：</span><br>
        <iframe src="/web" width="200" height="200">
        <p>您的浏览器不支持  iframe 标签。</p>
        </iframe>
        <br>2、name 属性规定 &lt;iframe&gt; 的名称。name 元素的 name 属性用于在 JavaScript 中引用元素，或者作为 &lt;a&gt; 或 &lt;form&gt; 元素的 target 属性的值，或者作为 &lt;input&gt; 或 &lt;button&gt; 的 formtarget 属性的值。
        <br><span>实例：</span><br>
        <iframe src="/web/index.html" name="iframe_a">
         <p>您的浏览器不支持  iframe 标签。</p>
        </iframe>
        <a href="http://www.w3cschool.cn" target="iframe_a">W3Cschool.cn</a>
        <p><b>注意：</b> 因为连接的 target 属性匹配了 ifrme 的name属性，所以链接点击后将显示在 ifram 中。</p>
        <br>3、sandbox 属性：如果指定了空字符串（sandbox=""），该属性对呈现在iframe框架中的内容启用一些额外的限制条件。sandbox 属性的值既可以是一个空字符串（将会启用所有的限制），也可以是用空格分隔的一系列指定的字符串。
        <br><span>实例：</span>sandbox=""---------启用所有限制条件<br>
        <iframe src="/web/index.html" sandbox="">
          <p>您的浏览器不支持 iframes.</p>
        </iframe>
        <br><span>实例：</span>sandbox="allow-same-origin"---------允许将内容作为普通来源对待。如果未使用该关键字，嵌入的内容将被视为一个独立的源。<br>
        <iframe src="/web/index.html" sandbox="allow-same-origin">
          <p>您的浏览器不支持 iframes.</p>
        </iframe>
        <br><span>实例：</span>sandbox="allow-top-navigation"---------嵌入的页面的上下文可以导航（加载）内容到顶级的浏览上下文环境（browsing context）。如果未使用该关键字，这个操作将不可用。<br>
        <iframe src="/web/index.html" sandbox="allow-top-navigation">
          <p>您的浏览器不支持 iframes.</p>
        </iframe>
        <br><span>实例：</span>sandbox="allow-forms"---------允许表单提交。<br>
        <iframe src="/web/index.html" sandbox="allow-forms">
          <p>您的浏览器不支持 iframes.</p>
        </iframe>
        <br><span>实例：</span>sandbox="allow-scripts"---------允许脚本执行。<br>
        <iframe src="/web/index.html" sandbox="allow-scripts">
          <p>您的浏览器不支持 iframes.</p>
        </iframe>
        <br>4、seamless 属性规定 &lt;iframe&gt; 看起来像是包含的文档的一部分（没有边框和滚动条）。seamless 属性是一个布尔属性。注意：只有 Chrome 和 Safari 6 支持 &lt;iframe&gt; 标签的 seamless 属性。
        <br><span>实例：</span><br>
        <p>这是一个段落。</p>
        <iframe src="/web/index.html" seamless></iframe>
        <br>5、src 属性规定嵌入在 &lt;iframe&gt; 中的文档的地址。
        <br><span>实例：</span><br>
        <iframe src="//www.w3cschool.cn">
          <p>您的浏览器不支持  iframe 标签。</p>
        </iframe>
        <br>6、srcdoc 属性规定要显示在内联框架中的页面的 HTML 内容。提示：该属性应该与 sandbox 和 seamless 属性一起使用。如果浏览器支持 srcdoc 属性，且指定了 srcdoc 属性，它将覆盖在 src 属性中规定的内容。如果浏览器不支持 srcdoc 属性，且指定了 srcdoc 属性，它将显示在 src 属性中规定的文件。注意：只有 Chrome 和 Safari 6 支持 &lt;iframe&gt; 标签的 srcdoc 属性。
        <br><span>实例：</span><br>
        <iframe srcdoc="<p>Hello world!</p>" src="/web/index.html">
          <p>您的浏览器不支持  iframe 标签。</p>
        </iframe>
        <br>7、width 属性规定 &lt;iframe&gt; 的宽度，以像素计。
        <br><span>实例：</span><br>
        <iframe src="/web/index.html" width="200" height="200">
        <p>您的浏览器不支持  iframe 标签。</p>
        </iframe>
    </p>
    <hr><!-- ----------------------------HTML 框架标签(end) ---------------------------->
  

    <!-- ----------------------------HTML 图像标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML 图像标签</h1>
    <!-- HTML <img> 标签 -->
    <h2 style='text-align:center;'># &lt;img&gt;标签</h2>
    <p id="img">简介：
        <br>&lt;img&gt; 标签用于展示 HTML 页面中的图像，使得页面能够“图文并茂”。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;img&gt; 标签定义 HTML 页面中的图像。
        <br>&lt;img&gt; 标签有两个必需的属性：src 和 alt。
        <br>注释：从技术上讲，图像并不会插入 HTML 页面中，而是链接到 HTML 页面上。&lt;img&gt; 标签的作用是为被引用的图像创建占位符。
        <br>提示：通过在 &lt;a&gt; 标签中嵌套 &lt;img&gt; 标签，给图像添加到另一个文档的链接。
        <br><span>实例：</span><br>
        <img src="../assets/huanxiong.jpg" alt="Smiley face" width="100" height="100">
        <br><span>属性：</span>
        <br>1、alt 属性是一个必需的属性，它规定在图像无法显示时的替代文本。假设由于一些原因（比如网速太慢、src 属性中的错误、浏览器禁用图像、用户使用的是屏幕阅读器）用户无法查看图像，alt 属性可以为图像提供替代的信息。注意：当用户把鼠标移动到 img 元素上时，Internet Explorer （9 之前的版本）把 alt 属性的值显示为工具提示。根据 HTML 规范，这种行为并不正确。提示：如果需要为图像创建工具提示，请使用 title 属性！
        <br><span>实例：</span><br>
        <img src="../assets/mlh.jpg" alt="Smiley face" width="150" height="150">
        <br>2、height 属性：规定图像的高度，以像素计。提示：为图像指定 height 和 width 属性是一个好习惯。如果设置了这些属性，就可以在页面加载时为图像预留空间。如果没有这些属性，浏览器就无法了解图像的尺寸，也就无法为图像保留合适的空间，因此当图像加载时，页面的布局就会发生变化。提示：请不要通过 height 和 width 属性来缩放图像。如果通过 height 和 width 属性来缩小图像，那么用户就必须下载大容量的图像（即使图像在页面上看上去很小）。正确的做法是，在网页上使用图像之前，应该通过软件把图像处理为合适的尺寸。
        <br>3、src 属性：是必需的。它规定图像的 URL。注意：当一个网页加载时，浏览器从 Web 服务器上获取图像，并把它插入到页面中。因此，确保图像与相关的网页在同一点，否则访问者可能会得到一个损坏的链接图标。如果浏览器找不到图像时，会显示损坏的链接图标。
        <br>4、usemap 属性：将图像定义为客户端图像映射（图像映射指的是带有可点击区域的图像）。usemap 属性与 &lt;map&gt; 元素的 name 或 id 属性相关联，以建立 &lt;img&gt; 与 &lt;map&gt; 之间的关系。注意：只有当 &lt;img&gt; 元素不属于 &lt;a&gt; 或 &lt;button&gt; 元素的后代时，才允许使用 usemap 属性。
        <br><span>实例：</span><br>
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif">
        </map>
        <br>5、width 属性规定图像的宽度，以像素计。
    </p>
    <hr>
    <!-- HTML <map> 标签 -->
    <h2 style='text-align:center;'># &lt;map&gt;标签</h2>
    <p id="map">简介：
        <br>&lt;map&gt; 标签可以和 &lt;area&gt; 元素一起使用，以此来达到定义图像映射（可点击的链接区域）的目标。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;map&gt; 标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。
        <br>&lt;map&gt; 中的 usemap 属性可引用 &lt;map&gt;  中的 id 或 name 属性（取决于浏览器），所以我们应同时向 &lt;map&gt;  添加 id 和 name 属性。
        <br>area 元素永远嵌套在 map 元素内部。area 元素可定义图像映射中的区域。
        <br>提示：要完成图像映射要用到三种标签：&lt;img&gt; 标签、&lt;map&gt;标签、&lt;area&gt;标签。
        <br><span>属性：</span>
        <br>1、name 属性：必需的，规定图像映射的名称。name 属性与 &lt;img&gt; 标签的 usemap 属性相关联，以创建图像与映射之间的关系。
        <br><span>实例：</span><br>
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif">
        </map>
    </p>
    <hr>
    <!-- HTML <area> 标签 -->
    <h2 style='text-align:center;'># &lt;area&gt;标签</h2>
    <p id="area">简介：
        <br>&lt;area&gt; 标签可以在图像上划分区域，这些区域是可以点击的，并且对应不同的操作。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;area&gt; 标签定义图像映射内部的区域（图像映射指的是带有可点击区域的图像）。
        <br>&lt;area&gt; 元素始终嵌套在 标签内部。
        <br>注释：&lt;img&gt; 标签中的 usemap 属性与 &lt;map&gt;  元素中的 name 相关联，以创建图像与映射之间的关系。
        <br><span>属性：</span>
        <br>1、alt 属性是一个必需的属性，它规定在图像无法显示时的替代文本。
        <br>2、coords 属性：规定区域的 x 和 y 坐标。coords 属性与 shape 属性配合使用，来规定区域的尺寸、形状和位置。提示： 图像左上角的坐标是 "0,0"。如果 shape 属性设置为 "rect"，则该值规定矩形左上角和右下角的坐标。如果 shape 属性设置为 "circ"，则该值规定圆心的坐标和半径。如果 shape 属性设置为 "poly"，则该值规定多边形各边的坐标。如果第一个坐标和最后一个坐标不一致，那么为了关闭多边形，浏览器必须添加最后一对坐标。
        <br>3、href 属性：规定区域中连接的目标。如果没有使用href 属性，&lt;area&gt; 标签就不是一个链接。
        <br>4、hreflang 属性：用于指定被链接文档的语言。仅在使用 href 属性时才可以指定 hreflang 属性。
        <br><span>实例：</span><br>   
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif" hreflang="en">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif">
        </map>
        <br>5、media 属性：规定目标URL将显示在什么设备上。该属性使用与指定的URL显示在指定的设备上 (如 iPhone) , 音频或者打印媒介。该attribute可以接受多个值。仅在使用了href属性才需要media 属性。
        <br><span>实例：</span><br> 
        <p>点击查看大图:</p>
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif" media="screen and (min-color-index:256)">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif">
        </map>
        <br>6、rel 属性规定当前文档与被链接文档之间的关系。
        <pre style="color:green;">
            ● alternate   文档的替代版本（比如打印页、翻译或镜像）。
            ● author      链接到文档的作者。
            ● bookmark    用于书签的永久网址
            ● help        链接到帮助文档
            ● license     链接到文档的版权信息。
            ● next        选项中的下一个文档
            ● nofollow    nofollow 是一个HTML标签的属性值。这个标签的意义是告诉搜索引擎"不要追踪此网页上的链接"或"不要追踪此特定链接。
            ● noreferrer  如果用户点击链接指定浏览不要发送 HTTP referer 头部信息。
            ● prefetch    指定的目标文件应该被缓存
            ● prev        选项中的前一个文档
            ● search      文档链接到搜索工具
            ● tag         当前文档的标签(关键词)
        </pre>
        <br><span>实例：</span><br> 
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif" rel="alternate">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif">
        </map>
        <br>6、shape 属性：指定了区域的形状。shape 属性与 coords 属性配合，可以规定区域的尺寸、形状和位置。
        <pre style="color:green;">
            ● default 规定全部区域。
            ● rect    定义矩形区域。
            ● circ    定义圆形。
            ● poly    定义多边形区域。
        </pre>
        <br><span>实例：</span><br> 
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif" rel="alternate">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif">
        </map>
        <br>7、target 属性：规定区域中连接的目标。仅在使用了 href 属性才使用 target 属性。
        <pre style="color:green;">
            ● _blank      在新窗口中打开被链接文档。
            ● _self       默认。在相同的框架中打开被链接文档。
            ● _parent     在父框架集中打开被链接文档。
            ● _top        在整个窗口中打开被链接文档。
            ● framename   在指定的框架中打开被链接文档。
        </pre>
        <br><span>实例：</span><br> 
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif" rel="alternate">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif">
        </map>
        <br>8、type 属性指定了目标 URL 的 MIME 类型。该属性仅在 href 属性设置后才使用type属性。
        <br><span>实例：</span><br> 
        <img src="../assets/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
        <map name="planetmap">
          <area shape="rect" coords="0,0,82,126" target="_blank" alt="Sun" href="/web/resources/sun.gif" type="image/gif">
          <area shape="circle" coords="90,58,3" target="_blank" alt="Mercury" href="/web/resources/merglobe.gif" type="image/gif">
          <area shape="circle" coords="124,58,8" target="_blank" alt="Venus" href="/web/resources/venglobe.gif" type="image/gif">
        </map>
    </p>
    <hr>
    <!-- HTML <canvas> 标签 -->
    <h2 style='text-align:center;'># &lt;canvas&gt;标签</h2>
    <p id="canvas">简介：
        <br>&lt;canvas&gt; 标签是 HTML5 中新定义的标签，它是一个画布标签，只是作为一个图形容器，必须使用脚本来绘制图形。
        <br>提示：我们可以在&lt;canvas&gt; 标签的开始标签和结束标签之间可以放置一段文本，当浏览器不支持&lt;canvas&gt; 标签时，这段文本将显示在&lt;canvas&gt; 标签所在的位置上，使用者就会明白&lt;canvas&gt; 标签不适用于此浏览器。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;canvas&gt; 标签通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）。
        <br>&lt;canvas&gt; 标签只是图形容器，您必须使用脚本来绘制图形。
        <br><span>实例：</span><br> 
        <canvas id="myCanvas">你的浏览器不支持 HTML5 canvas 标签。</canvas>
        <br><span>属性：</span>
        <br>1、height 属性规定 &lt;canvas&gt; 元素的高度, 以像素为单位。提示： 每当画布的高度或宽度被重设时，画布内容就会被清空（请看页面底部的例子）。
        <br>2、width 属性返回 ImageData 对象的宽度，以像素计。提示： 每当画布的高度或宽度被重设时，画布内容就会被清空（请看页面底部的例子）。
        <br><span>实例：</span><br> 
        <canvas id="myCanvas1" width="200" height="200" style="border:1px solid"></canvas>
    </p>
    <hr>
    <!-- HTML <figcaption> 标签 -->
    <h2 style='text-align:center;'># &lt;figcaption&gt;标签</h2>
    <p id="figcaption">简介：
        <br>&lt;figcaption&gt; 标签用于表示与图形或图例有关联的标题，通常用来定义 &lt;figure&gt; 元素的标题。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;figcaption&gt; 标签为 &lt;figure&gt; 元素定义标题。
        <br>&lt;figcaption&gt; 元素应该被置于 &lt;figure&gt; 元素的第一个或最后一个子元素的位置。
        <br><span>实例：</span><br> 
        <figure>
          <img src="../assets/mlh.jpg" alt="The Pulpit Rock" width="304" height="228">
          <figcaption>广州木林湖</figcaption>
        </figure>
    </p>
    <hr>
    <!-- HTML <figure> 标签 -->
    <h2 style='text-align:center;'># &lt;figure&gt;标签</h2>
    <p id="figure">简介：
        <br>&lt;figure&gt; 标签可以用来表示自包含的内容，并且一般作为单个单元引用。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;figure&gt; 标签规定独立的流内容（图像、图表、照片、代码等等）。
        <br>&lt;figure&gt; 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。
        <br>&lt;figure&gt; 元素可以与标题相关联，通过在其中插入 &lt;figcaption&gt; 元素（作为第一个或最后一个子项）。
        <br><span>提示和注释：</span>
        <br>提示：&lt;figcaption&gt; 元素被用来为 &lt;figure&gt; 元素定义标题。
        <br><span>实例：</span><br> 
        <figure>
          <img src="../assets/pulpit.jpg" tppabs="http://W3Cschool.com/tags/img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
          <figcaption>Fig.1 - A view of the pulpit rock in Norway.</figcaption>
        </figure>
    </p>
    <hr><!-- ----------------------------HTML 图像标签(END) ---------------------------->

    
    <!-- ----------------------------HTML 音频/视频（Audio/Video）标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML 音频/视频（Audio/Video）标签</h1>
    <!-- HTML <audio> 标签 -->
    <h2 style='text-align:center;'># &lt;audio&gt;标签</h2>
    <p id="audio">简介：
        <br>&lt;audio&gt; 标签是 HTML5 提供的用来播放音频文件的。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;audio&gt; 标签定义声音，比如音乐或其他音频流。
        <br>目前，&lt;audio&gt; 元素支持的3种文件格式：MP3、Wav、Ogg。
        <br>提示：这 3 种音频的 MIME-type 分别是：MP3====>audio/mpeg；Ogg====>audio/ogg；Wavg====>audio/wav
        <br><span>提示和注释：</span>
        <br>提示：可以在 &lt;audio&gt; 和 &lt;/audio&gt; 之间放置文本内容，这些文本信息将会被显示在那些不支持 &lt;audio&gt; 标签的浏览器中。
        <br><span>实例：</span><br> 
        <audio controls>
          <source src="/web/resources/horse.ogg" >
          <source src="/web/resources/horse.mp3" >
        您的浏览器不支持 audio 元素。
        </audio>
        <br><span>属性：</span>
        <br>1、autoplay 属性：规定一旦音频就绪马上开始播放。如果设置了该属性，音频将自动播放。
        <br><span>实例：</span><br> 
        <audio controls autoplay>
          <source src="/web/resources/horse.ogg" type="audio/ogg">
          <source src="/web/resources/zszy.mp3" type="audio/mpeg">
        您的浏览器不支持 audio 元素。
        </audio>
        <br>2、controls 属性：是一个布尔属性。如果属性存在，它指定音频控件的显示方式。音视频控件包括：播放、暂停、进度条、音量
        <br><span>实例：</span><br>
        <audio controls>
          <source src="/web/resources/horse.ogg" type="audio/ogg">
          <source src="/web/resources/zszy.mp3" type="audio/mpeg">
        您的浏览器不支持 audio 元素。        
        </audio>
        <br>3、loop 属性是一个布尔属性。如果设置该属性，则音频将循环播放。
        <br><span>实例：</span><br>
        <audio controls loop>
          <source src="/web/resources/horse.ogg" type="audio/ogg">
          <source src="/web/resources/zszy.mp3" type="audio/mpeg">
        您的浏览器不支持 audio 元素。        
        </audio>
        <br>4、muted 属性属于逻辑属性。如被设置，则规定视频输出应该被静音。
        <br><span>实例：</span><br>
        <audio controls loop muted>
          <source src="/web/resources/zszy.mp3" type="audio/mpeg">
        您的浏览器不支持 audio 元素。        
        </audio>
        <br>5、preload 属性：规定是否在页面加载后载入音频。如果设置了 autoplay 属性，则忽略该属性。规定是否预加载音频。可能的值：auto - 当页面加载后载入整个音频；meta - 当页面加载后只载入元数据；none - 当页面加载后不载入音频。
        <br><span>实例：</span><br>
        <audio controls preload="none">
          <source src="/web/resources/zszy.mp3" type="audio/mpeg">        
        您的浏览器不支持 audio 元素。
        </audio>
        <br>6、src 属性描述了音频文件的地址 (URL)。Ogg 文件格式的音频，可以在 Firefox, Opera 和 Chrome 浏览器下播放。如果需要在 Internet Explorer 和 Safari浏览器播放音频，必须使用 MP3 文件。如果需要兼容所有浏览器 - 请在&lt;audio&gt; 元素中使用 &lt;source&gt; 元素 。 &lt;source&gt; 元素可以链接到不同的音频文件。浏览器将使用第一个可识别的音频文件格式。
        <br><span>实例：</span><br>
        <audio controls>
          <source src="/web/resources/zszy.mp3" type="audio/mpeg">        
        您的浏览器不支持 audio 元素。
        </audio>
    </p>      
    <hr> 
    <!-- HTML <source> 标签 -->
    <h2 style='text-align:center;'># &lt;source&gt;标签</h2>
    <p id="source">简介：
        <br>&lt;source&gt; 标签可以为&lt;picture&gt;、&lt;audio&gt;或&lt;video&gt;元素指定一个或者多个的媒体资源。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;source&gt; 标签为媒体元素（比如 &lt;video&gt; 和 &lt;audio&gt;）定义媒体资源。
        <br>&lt;source&gt; 标签允许您规定可替换的视频/音频文件共浏览器根据它对媒体类型或者编解码器的支持进行选择。
        <br><span>属性：</span>
        <br>1、src 属性：规定要播放的媒体文件的 URL。
        <br>2、type 属性：规定媒体资源的 MIME 类型。
        <br><span>实例：</span><br>
        <audio controls preload="none">
          <source src="/web/resources/zszy.mp3" type="audio/mpeg">        
        您的浏览器不支持 audio 元素。
        </audio>
    </p>
    <hr>
    <!-- HTML <track> 标签 -->
    <h2 style='text-align:center;'># &lt;track&gt;标签</h2>
    <p id="track">简介：
        <br>&lt;track&gt; 标签用作 &lt;audio&gt; 元素和 &lt;video&gt; 元素的子级，它允许您指定定时文本轨道（或基于时间的数据），采用 WebVTT 格式（.vtt 文件）。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;track&gt; 标签为媒体元素（比如 &lt;audio&gt; and &lt;video&gt;）规定外部文本轨道。
        <br>这个元素用于规定字幕文件或其他包含文本的文件，当媒体播放时，这些文件是可见的。
        <br>提示：track 给媒体元素添加的数据的类型在 kind 属性中设置，kind 属性的取值请参考下面的可选属性列表。
        <br>注意：IE 10、Opera 和 Chrome 浏览器支持 &lt;track&gt; 标签。
        <br><span>属性：</span>
        <br>1、default 属性是一个 boolean（布尔）属性。如果使用 default 属性，则规定应该使用该轨道，假如用户没有选择其他轨道的话。
        <br>2、kind 属性规定轨道的种类。
        <pre style="color:green;">
            ● captions      该轨道定义将在播放器中显示的简短说明。
            ● chapters      该轨道定义章节，用于导航媒介资源。
            ● descriptions  该轨道定义描述，用于通过音频描述媒介的内容，假如内容不可播放或不可见。
            ● metadata      该轨道定义脚本使用的内容。
            ● subtitles     该轨道定义字幕，用于在视频中显示字幕。
        </pre>
        <br>3、label 属性规定了文本轨迹的标题。例如，当用户选择字幕轨道时，标题会显示出来。
        <br>4、src 属性：规定轨道的 url。
        <br>5、srclang 属性定义轨道的语言。如果 kind 属性的值是 "subtitles"，则 srclang 属性是必需的。
    </p>
    <hr>
    <!-- HTML <video> 标签 -->
    <h2 style='text-align:center;'># &lt;video&gt;标签</h2>
    <p id="video">简介：
        <br>&lt;video&gt; 标签可以将视频内容嵌入到HTML文档中。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;video&gt; 标签定义视频，比如电影片段或其他视频流。
        <br>目前，&lt;video&gt; 元素支持三种视频格式：MP4、WebM、Ogg。音频格式的 MIME 类型：MP4  video/mp4；WebM  video/webm；Ogg  video/ogg。
        <br><span>提示和注释：</span>
        <br>提示：可以在 &lt;video&gt; 和 &lt;/video&gt; 标签之间放置文本内容，这样不支持 &lt;video&gt; 元素的浏览器就可以显示出该标签的信息。
        <br><span>实例：</span><br>
        <video width="320" height="240" controls>
          <source src="/web/resources/movie.mp4"  type="video/mp4">
          <source src="/web/resources/movie.ogg"  type="video/ogg">
          您的浏览器不支持 HTML5 video 标签。
        </video>
        <br><span>属性：</span>
        <br>1、autoplay 属性：规定一旦视频就绪马上开始播放。如果设置了该属性，视频将自动播放。autoplay 属性是 boolean(布尔) 属性。注意：在&lt;video&gt;标签中 preload 属性与 autoplay 属性相排斥，如果视频之前设置了 autoplay 属性，再设置 preload 属性，则 preload 属性将失效。
        <br>2、controls 属性规定浏览器应该为视频提供播放控件。controls 属性是一个 boolean(布尔) 属性。如果设置了该属性，则规定不存在作者设置的脚本控件。浏览器控件应该包括：播放、暂停、定位、音量、全屏切换、字幕（如果可用）、音轨（如果可用）。
        <br>3、height 属性指定视频播放器的高度，以像素计。提示： 规定视频的高度和宽度是一个好习惯。如果设置这些属性，在页面加载时会为视频预留出空间。如果没有设置这些属性，那么浏览器就无法预先确定视频的尺寸，这样就无法为视频保留合适的空间。结果是，在页面加载的过程中，其布局也会产生变化。注意： 请勿通过 height 和 width 属性来缩放视频！通过 height 和 width 属性来缩小视频，只会迫使用户下载原始的视频（即使在页面上它看起来较小）。正确的方法是在网页上使用该视频前，使用软件对视频进行压缩。
        <br>4、loop 属性规定当视频结束后将重新开始播放。loop 属性是一个 boolean（布尔） 属性。如果设置该属性，则视频将循环播放。
        <br><span>实例：</span><br>
        <video width="320" height="240" controls loop>
          <source src="/web/resources/movie.mp4"  type="video/mp4">
          <source src="/web/resources/movie.ogg"  type="video/ogg">
          您的浏览器不支持 HTML5 video 标签。
        </video>
        <br>5、muted 属性设置或返回音频/视频是否应该被静音（关闭声音）。muted 属性是一个 boolean(布尔) 属性。
        <br><span>实例：</span><br>
        <video width="320" height="240" controls muted>
          <source src="/web/resources/movie.mp4"  type="video/mp4">
          <source src="/web/resources/movie.ogg"  type="video/ogg">
          您的浏览器不支持 HTML5 video 标签。
        </video>
        <br>6、poster 属性指定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。
        <br><span>实例：</span><br>
        <video width="320" height="240" poster="/web/resources/xiyang.jpg" controls>
           <source src="/web/resources/movie.mp4"  type="video/mp4">
           Your browser does not support the video tag.
        </video>
        <br>7、preload 属性规定是否在页面加载后载入视频。如果设置了 autoplay 属性，则忽略该属性。注意： 如果使用 autoplay 属性 preload 将被忽略。属性值：auto  指示一旦页面加载，则开始加载音频/视频。metadata    指示当页面加载后仅加载音频/视频的元数据。none   指示页面加载后不应加载音频/视频。
        <br><span>实例：</span><br>
        <video width="320" height="240" controls preload="none">
            <source src="/web/resources/movie.mp4"  type="video/mp4">
            <source src="/web/resources/movie.ogg"  type="video/ogg">  您的浏览器不支持 video 标签。
        </video>
        <br>8、src 属性指定 video 文件的本地路径(URL) 。以上实例使用了 Ogg 文件, 该使用可正常显示于 Firefox, Opera 和 Chrome。如果需要在 Internet Explorer 和 Safari 播放视频, 必须使用 MPEG4 文件。如果想在所有浏览器播放视频文件 - 可在 &lt;video&gt; 元素总使用 &lt;source&gt; 元素。 &lt;source&gt; 元素可以链接到不同的视频文件。浏览器将使用第一个可识别的格式：
        <br>9、width 属性指定视频播放器的宽度。提示： 规定视频的高度和宽度是一个好习惯。如果设置这些属性，在页面加载时会为视频预留出空间。如果没有设置这些属性，那么浏览器就无法预先确定视频的尺寸，这样就无法为视频保留合适的空间。结果是，在页面加载的过程中，其布局也会产生变化。注意：请勿通过 height 和 width 属性来缩放视频！通过 height 和 width 属性来缩小视频，只会迫使用户下载原始的视频（即使在页面上它看起来较小）。正确的方法是在网页上使用该视频前，使用软件对视频进行压缩。
    </p>
    <hr><!-- ----------------------------HTML 音频/视频（Audio/Video）标签(END) ---------------------------->


    <!-- ----------------------------HTML 链接标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML 链接标签</h1>
    <!--==== a 标签 ===-->
    <h2 id='maodian' style="text-align:center;"># &lt;a&gt;标签 </h2>  
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
    <hr>
    <!-- HTML <link> 标签 -->
    <h2 style='text-align:center;'># &lt;link&gt;标签</h2>
    <p id="link">简介：
        <br>&lt;link&gt; 标签经常用于链接 CSS 样式表。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;link&gt; 标签定义文档与外部资源的关系。
        <br>&lt;link&gt; 标签最常见的用途是链接样式表。
        <br>注意： link 元素是空元素，它仅包含属性。
        <br>注意： 此元素只能存在于 head 部分，不过它可出现任何次数。
        <br>注意：根据 W3C 标准，&lt;link .... ... /&gt;构成完整的一个 link 标签。
        <br><span>实例：</span><br>
        <br><span>属性：</span>
        <br>1、href 属性：规定外部资源（通常是样式表文件）的位置（URL）。
        <br>2、hreflang 属性：规定被链接文档中文本的语言。只有设置了 href 属性时才能使用 hreflang 属性。注意：该属性是纯粹的建议。
        <br>3、media 属性：规定被链接文档将显示在什么设备上。该属性通常与 CSS 样式表一起使用，用于为不同的媒介类型规定不同的样式。media 属性接受若干个值。
        <br>4、rel 属性是必须的，规定当前文档与被链接文档/资源之间的关系。
        <pre style="color:green;">
            ● alternate   链接到该文档的替代版本（比如打印页、翻译或镜像）。
            ● author      链接到该文档的作者。
            ● help        链接到帮助文档。
            ● icon        导入表示该文档的图标。
            ● license     链接到该文档的版权信息。
            ● next        表示该文档是集合中的一部分，且集合中的下一个文档是被引用的文档。
            ● prefetch    规定应该对目标资源进行缓存。
            ● prev        表示该文档是集合中的一部分，且集合中的上一个文档是被引用的文档。
            ● search      链接到针对文档的搜索工具。
            ● stylesheet  要导入的样式表的 URL。
        </pre>
        <br>5、type 属性：规定被链接文档/资源的 MIME 类型。只有当设置了 href 属性时，才能使用该属性。&lt;link&gt; 标签常用的 MIME 类型是 "text/css"，它规定样式表。      
    </p>
    <hr>
    <!-- HTML <nav> 标签 -->
    <h2 style='text-align:center;'># &lt;nav&gt;标签</h2>
    <p id="nav">简介：
        <br>&lt;nav&gt; 标签表示一个页面中的某个部分，目的是提供导航链接，常见的导航栏的示例是菜单、目录和索引。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;nav&gt; 标签定义导航链接的部分。
        <br>并不是所有的 HTML 文档都要使用到 &lt;nav&gt; 元素。&lt;nav&gt; 元素只是作为标注一个导航链接的区域。
        <br>在不同设备上（手机或者PC）可以制定导航链接是否显示，以适应不同屏幕的需求。
        <br><span>实例：</span><br>
        <nav>
            <a href="/web/index.html">HTML</a> |
            <a href="/web/css/">CSS</a> |
            <a href="/web//js/">Javascript</a> |
            <a href="/web//img/">Picture</a>
        </nav>
        <br><span>属性：</span>
    </p>
    <hr><!-- ----------------------------HTML 链接标签(END) ---------------------------->

    <!-- ----------------------------HTML 列表标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML 列表标签</h1>
    <!-- HTML <ul> 标签 -->
    <h2 style='text-align:center;'># &lt;ul&gt;标签</h2>
    <p id="ul">简介：
        <br>&lt;ul&gt; 标签表示HTML页面中项目的无序列表，一般会以项目符号列表呈现。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;ul&gt; 标签定义无序列表。
        <br>将 &lt;ul&gt; 标签与 &lt;li&gt; 标签一起使用，创建无序列表。
        <br><span>提示和注释：</span>
        <br>提示：使用 CSS 为列表定义样式。
        <br>提示：使用 &lt;ol&gt; 标签创建有序列表。
        <br><span>实例：</span><br>
        <h4>无序列表:</h4>
        <ul>
          <li>咖啡</li>
          <li>茶</li>
          <li>牛奶</li>
        </ul>
    </p>
    <hr>
    <!-- HTML <ol> 标签 -->
    <h2 style='text-align:center;'># &lt;ol&gt;标签</h2>
    <p id="ol">简介：
        <br>&lt;ol&gt; 标签在 HTML 中表示有序列表，是 ordered lists 的缩写。您可以自定义有序列表的初始序号。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;ol&gt; 标签定义了一个有序列表. 列表排序以数字来显示。
        <br>使用&lt;li&gt; 标签来定义列表选项。
        <br><span>提示和注释：</span>
        <br>提示： 如果需要无序列表，请使用 &lt;ul&gt; 标签。
        <br>提示：使用 CSS 来定义列表样式。
        <br><span>实例：</span><br>
        <ol>
          <li>咖啡</li>
          <li>茶</li>
          <li>牛奶</li>
        </ol>
        <br><span>实例：</span><br>
        <ol start="50">
          <li>咖啡</li>
          <li>茶</li>
          <li>牛奶</li>
        </ol>
        <br><span>属性：</span>
        <br>1、reversed 属性规定列表顺序为降序 (9, 8, 7...)，而不是升序 (1, 2, 3...)。reversed 属性是一个布尔属性。目前只有 Chrome 和 Safari 6 支持 reversed 属性。
        <br><span>实例：</span><br>
        <ol reversed>
        <li>咖啡</li>
        <li>茶</li>
        <li>牛奶</li>
        </ol>
        <br>2、start 属性规定有序列表中第一个列表项目的开始值。注释：目前，仍然没有 start 属性的 CSS 替代方案。
        <br><span>实例：</span><br>
        <ol start="50">
          <li>咖啡</li>
          <li>茶</li>
          <li>牛奶</li>
        </ol>
        <ol type="I" start="50">
          <li>咖啡</li>
          <li>茶</li>
          <li>牛奶</li>
        </ol>
        <br>3、type 属性：用来规定HTML有序列表中序号的类型，包括大小写字母、阿拉伯数字和大小写罗马数字。提示：您可以使用 CSS 的list-style-type 属性 来代替 type 属性。
        <pre style="color:green;">
            1   默认。十进制数字 (1, 2, 3, 4)。
            a   字母顺序的有序列表，小写 (a, b, c, d)。
            A   字母顺序的有序列表，大写 (A, B, C, D)。
            i   罗马数字，小写 (i, ii, iii, iv)。
            I   罗马数字，大写 (I, II, III, IV)。
        </pre>
        <br><span>实例：</span><br>
        <ol type="I">
          <li>咖啡</li>
          <li>茶</li>
          <li>牛奶</li>
        </ol>
    </p>
    <hr>
    <!-- HTML <li> 标签 -->
    <h2 style='text-align:center;'># &lt;li&gt;标签</h2>
    <p id="li">简介：
        <br>定义一个列表项
        <br><span>实例：</span><br>
        <ol>
          <li>咖啡</li>
          <li>茶</li>
          <li>牛奶</li>
        </ol>
    </p>
    <hr>
    <!-- HTML <dl> 标签 -->
    <h2 style='text-align:center;'># &lt;dl&gt;标签</h2>
    <p id="dl">简介：
        <br>&lt;dl&gt; 标签代表一个描述列表。该标签的常用用途是实现词汇表或显示元数据（键值对列表）。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;dl&gt; 标签定义一个描述列表。
        <br>&lt;dl&gt; 标签与 &lt;dt&gt; （定义项目/名字）和 &lt;dd&gt; （描述每一个项目/名字）一起使用。
        <br>&lt;dl&gt; 标签必须有开始标签和结束标签。
        <br><span>实例：</span><br>
        <dl>
          <dt>咖啡</dt>
          <dd>黑色的热饮</dd>
          <dt>牛奶</dt>
          <dd>白色的冷饮</dd>
        </dl>
    </p>
    <hr>
    <!-- HTML <dt> 标签 -->
    <h2 style='text-align:center;'># &lt;dt&gt;标签</h2>
    <p id="dt">简介：
        <br>&lt;dt&gt; 标签只能够作为 &lt;dl&gt; 标签的一个子元素出现，常常后跟一个 &lt;dd&gt; 标签。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;dt&gt; 标签定义一个描述列表的项目/名字。
        <br>&lt;dt&gt; 标签与 &lt;dl&gt; （定义一个描述列表）和 &lt;dd&gt; （描述每一个项目/名字）一起使用。
        <br>一行中的多个 &lt;dt&gt; 标签表示由紧邻的下一个 &lt;dd&gt; 元素定义的多个术语。
        <br><span>实例：</span>
        <dl>
          <dt>咖啡</dt>
          <dd>黑色的热饮</dd>
          <dt>牛奶</dt>
          <dd>白色的冷饮</dd>
        </dl> 
    </p>
    <hr>
    <!-- HTML <dd> 标签 -->
    <h2 style='text-align:center;'># &lt;dd&gt;标签</h2>
    <p id="dd">简介：
        <br>&lt;dd&gt; 元素是 HTML 描述元素，作为描述列表（&lt;dl&gt; 元素）的子元素出现，必须后跟一个 &lt;dt&gt; 元素。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;dd&gt; 标签被用来对一个描述列表中的项目/名字进行描述。
        <br>&lt;dd&gt; 标签与 &lt;dl&gt; （定义一个描述列表）和 &lt;dt&gt; （定义项目/名字）一起使用。
        <br>在 &lt;dd&gt; 标签内，您能放置段落、换行、图片、链接、列表等等。
        <br><span>实例：</span>
        <dl>
          <dt>咖啡</dt>
          <dd>黑色的热饮</dd>
          <dt>牛奶</dt>
          <dd>白色的冷饮</dd>
        </dl>
    </p>
    <hr><!-- ----------------------------HTML 列表标签(END) ---------------------------->

    
    <!-- ----------------------------HTML 表格标签(start) ---------------------------->
    <h1 style="text-align:center;">HTML 表格标签</h1>
    <!-- HTML <table> 标签 -->
    <h2 style='text-align:center;'># &lt;table&gt;标签</h2>
    <p id="table">简介：
        <br>&lt;table&gt; 标签用来定义 HTML 表格，一个简单的 HTML 表格应该包括两行两列。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;table&gt; 标签定义 HTML 表格。
        <br>一个 HTML 表格包括 &lt;table&gt; 元素，一个或多个 &lt;tr&gt;、&lt;th&gt; 以及 &lt;td&gt; 元素。
        <br>&lt;tr&gt; 元素定义表格行，&lt;th&gt; 元素定义表头，&lt;td&gt; 元素定义表格单元。
        <br>更复杂的 HTML 表格也可能包括 &lt;caption&gt;、&lt;col&gt;、&lt;colgroup&gt;、&lt;thead&gt;、&lt;tfoot&gt; 以及 &lt;tbody&gt; 元素。
        <br><span>属性：</span>
        <br>1、border 属性规定表格单元周围是否显示边框。值 "1" 指示应该显示边框，且表格不用于布局目的。""  表格单元周围没有边框（表格可用于布局目的）。
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
    </p>
    <hr>
    <!-- HTML <caption> 标签 -->
    <h2 style='text-align:center;'># &lt;caption&gt;标签</h2>
    <p id="caption">简介：
        <br>&lt;caption&gt; 标签表示 HTML 表格的标题，对表格的简单描述。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;caption&gt; 标签定义表格的标题。
        <br>&lt;caption&gt; 标签必须直接放置到 &lt;table&gt; 标签之后。
        <br>您只能对每个表格定义一个标题。
        <br>提示：通常这个标题会被居中于表格之上。然而，CSS 属性 "text-align" 和 "caption-side" 能用来设置标题的对齐方式和显示位置。
        <br><span>实例：</span>
        <table border="1">
          <caption>Monthly savings</caption>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$50</td>
          </tr>
        </table>
    </p>
    <hr>
    <!-- HTML <th> 标签 -->
    <h2 style='text-align:center;'># &lt;th&gt;标签</h2>
    <p id="th">简介：
        <br><br>&lt;th&gt; 标签表示HTML表格的表头部分，该标签中的内容会以粗体显示。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;th&gt; 标签定义 HTML 表格中的表头单元格。
        <br>HTML 表格有两种单元格类型：
        <br>● 表头单元格 - 包含头部信息（由 &lt;th&gt; 元素创建）
        <br>● 标准单元格 - 包含数据（由 &lt;td&gt; 元素创建）
        <br>&lt;th&gt; 元素中的文本通常呈现为粗体并且居中。
        <br>&lt;td&gt; 元素中的文本通常是普通的左对齐文本。
        <br><span>提示和注释：</span>
        <br>提示：如果需要将内容横跨多个行或列，请使用 colspan 和 rowspan 属性！
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$50</td>
          </tr>
        </table>
        <br><span>属性：</span>
        <br>1、colspan 属性定义表头单元格应该横跨的列数。
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th colspan="2">Monthly Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
        <br>2、headers 属性：规定与表头单元格相关联的一个或多个表头单元格。
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th id="name" colspan="2">Name</th>
          </tr>
          <tr>
            <th headers="name">Firsname</th>
            <th headers="name">Lastname</th>
          </tr>
        </table>
        <br>3、rowspan 属性定义表头单元格应该横跨的行数。
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th>Month</th>
            <th>Savings</th>
            <th rowspan="3">Savings for holiday!</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
        <br>4、scope 属性规定某个表头单元格是否是列、行、列组或行组的表头。scope 属性在普通的 Web 浏览器中没有视觉效果，但可以通过屏幕阅读器使用。
        <pre style="color:green;">
            值           描述
            col         规定单元格是列的表头。
            row         规定单元格是行的表头。
            colgroup    规定单元格是列组的表头。
            rowgroup    规定单元格是行组的表头。        
        </pre>
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th></th>
            <th scope="col">Month</th>
            <th scope="col">Savings</th>
          </tr>
          <tr>
            <td>1</td>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
    </p>
    <hr>
    <!-- HTML <tr> 标签 -->
    <h2 style='text-align:center;'># &lt;tr&gt;标签</h2>
    <p id="tr">简介：
        <br>&lt;tr&gt; 标签定义HTML表格中的一行单元格，它应该是成对出现的。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;tr&gt; 标签定义 HTML 表格中的行。
        <br>一个 &lt;tr&gt; 元素包含一个或多个 &lt;th&gt; 或&lt;td&gt; 元素。
         <br><span>实例：</span>
         <table border="1">
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
    </p>
    <hr>
    <!-- HTML <td> 标签 -->
    <h2 style='text-align:center;'># &lt;td&gt;标签</h2>
    <p id="td">简介：
        <br>&lt;td&gt; 标签表示&lt;table&gt;标签中的单元格。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;td&gt; 标签定义 HTML 表格中的标准单元格。
        <br>HTML 表格有两种单元格类型：
        <br>表头单元格 - 包含头部信息（由 &lt;th&gt; 元素创建）
        <br>标准单元格 - 包含数据（由 &lt;td&gt; 元素创建）
        <br>&lt;th&gt; 元素中的文本通常呈现为粗体并且居中。
        <br>&lt;td&gt; 元素中的文本通常是普通的左对齐文本。
        <br><span>提示和注释：</span>
        <br>提示：如果需要将内容横跨多个行或列，请使用 colspan 和 rowspan 属性！
        <br><span>属性：</span>
        <br>1、colspan 属性定义单元格应该横跨的列数。注意：只有 Firefox 支持 colspan="0"，该值有特殊的含义（请看下面的"属性值"表格）。        
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$100</td>
          </tr>
          <tr>
            <td colspan="2">Sum: $180</td>
          </tr>
        </table>
        <br>2、headers 属性规定与表格单元格相关联的一个或多个表头单元格。headers 属性在普通的 Web 浏览器中没有视觉效果，但可以通过屏幕阅读器使用。
        <br><span>实例：</span>
        <table border="1" width="100%">
          <tr>
            <th id="name">Name</th>
            <th id="email">Email</th>
            <th id="phone">Phone</th>
            <th id="addr">Address</th>
          </tr>
          <tr>
            <td headers="name">John Doe</td>
            <td headers="email">someone@example.com</td>
            <td headers="phone">+45342323</td>
            <td headers="addr">Rosevn 56,4300 Sandnes,Norway</td>
          </tr>
        </table>
        <br>3、rowspan 属性定义单元格应该横跨的行数。注意：只有 Firefox 和 Opera 支持 rowspan="0"，该值有特殊的含义（请看下面的"属性值"表格）。
        <br><span>实例：</span>
        <table border="1">
          <tr>
            <th>Month</th>
            <th>Savings</th>
            <th>Savings for holiday!</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td rowspan="2">$50</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
    </p>
    <hr>
    <!-- HTML <thead> 标签 -->
    <h2 style='text-align:center;'># &lt;thead&gt;标签</h2>
    <p id="thead">简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;thead&gt; 标签用于组合 HTML 表格的表头内容。
        <br>&lt;thead&gt; 元素应该与 &lt;tbody&gt; 和 &lt;tfoot&gt; 元素结合起来使用，用来规定表格的各个部分（表头、主体、页脚）。
        <br>通过使用这些元素，使浏览器有能力支持独立于表格表头和表格页脚的表格主体滚动。当包含多个页面的长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。
        <br>&lt;thead&gt; 标签必须被用在以下情境中：作为 &lt;table&gt; 元素的子元素，出现在 &lt;caption&gt;、&lt;colgroup&gt; 元素之后，&lt;tbody&gt;、&lt;tfoot&gt; 和 &lt;tr&gt; 元素之前。
        <br><span>提示和注释：</span>
        <br>注释：&lt;thead&gt; 元素内部必须包含一个或者多个 &lt;tr&gt; 标签。
        <br>提示：&lt;thead&gt;、&lt;tbody&gt; 和 &lt;tfoot&gt; 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。
        <br><span>实例：</span>
        <table border="1">
          <thead>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>$180</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
          </tbody>
        </table>
        <p>提示: thead, tbody, 和 tfoot 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。</p>
    </p>
    <hr>
    <!-- HTML <tbody> 标签 -->
    <h2 style='text-align:center;'># &lt;tbody&gt;标签</h2>
    <p id="tbody">简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;tbody&gt; 标签用于组合 HTML 表格的主体内容。
        <br>&lt;tbody&gt; 元素应该与 &lt;thead&gt; and&lt;tfoot&gt; 元素结合起来使用，用来规定表格的各个部分（主体、表头、页脚）。它们的出现次序是：thead、tfoot、tbody。
        <br>通过使用这些元素，使浏览器有能力支持独立于表格表头和表格页脚的表格主体滚动。当包含多个页面的长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。
        <br>&lt;tbody&gt; 标签必须被用在以下情境中：作为 &lt;table&gt; 元素的子元素，出现在 &lt;caption&gt;、&lt;colgroup&gt; 和 &lt;thead&gt; 元素之后。
        <br><span>提示和注释：</span>
        <br>注释：&lt;tbody&gt; 元素内部必须包含一个或者多个 &lt;tr&gt; 标签。
        <br>提示：&lt;thead&gt;、&lt;tbody&gt; 和 &lt;tfoot&gt; 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。
        <br>提示：&lt;thead&gt; 元素用于对 HTML 表格中的表头内容进行分组，而 &lt;tfoot&gt; 元素用于对 HTML 表格中的表注（页脚）内容进行分组。
        <br><span>实例：</span>
        <table border="1">
          <thead>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>$180</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
          </tbody>
        </table>
        <p>提示: thead, tbody, 和 tfoot 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。</p>
    </p>
    <hr>
    <!-- HTML <tfoot> 标签 -->
    <h2 style='text-align:center;'># &lt;tfoot&gt;标签</h2>
    <p id="tfoot">简介：
        <br><span>标签定义及使用说明：</span>
        <br>&lt;tfoot&gt; 标签用于组合 HTML 表格的页脚内容。
        <br>&lt;tfoot&gt; 元素应该与 &lt;thead&gt; 和 &lt;tbody&gt; 元素结合起来使用，用来规定表格的各个部分（页脚、表头、主体）。
        <br>通过使用这些元素，使浏览器有能力支持独立于表格表头和表格页脚的表格主体滚动。当包含多个页面的长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。
        <br>&lt;tfoot&gt; 标签必须被用在以下情境中：作为 &lt;table&gt; 元素的子元素，出现在 &lt;caption&gt;、&lt;colgroup&gt; 和 &lt;thead&gt; 元素之后，&lt;tbody&gt; 和 &lt;tr&gt; 元素之前。
        <br><span>提示和注释：</span>
        <br>注释：&lt;tfoot&gt; 元素内部必须包含一个或者多个 &lt;tr&gt; 标签。
        <br>提示：&lt;thead&gt;、&lt;tbody&gt; 和 &lt;tfoot&gt; 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。
        <br><span>实例：</span>
        <table border="1">
          <thead>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>$180</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
          </tbody>
        </table>
        <p>提示: thead, tbody, 和 tfoot 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。</p>
    </p>
    <hr>
    <!-- HTML <col> 标签 -->
    <h2 style='text-align:center;'># &lt;col&gt;标签</h2>
    <p id="col">简介：
        <br>&lt;col&gt; 标签用于为表格中的一列或多列设置属性值。
        <br>&lt;col&gt; 标签只能在 &lt;table&gt; 元素或 &lt;colgroup&gt; 元素内部使用。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;col&gt; 标签规定了 &lt;colgroup&gt; 元素内部的每一列的列属性。
        <br>通过使用 &lt;col&gt; 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。
        <br>注释：col 元素是仅包含属性的空元素。如需创建列，您就必须在 tr 元素内部规定 td 元素。
        <br><span>属性：</span>
        <br>1、span 属性规定 col 元素应该横跨的列数。
        <br><span>实例：</span>
        <table border="1">
          <colgroup>
            <col span="2" style="background-color:red">
            <col style="background-color:yellow">
          </colgroup>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>3476896</td>
            <td>My first HTML</td>
            <td>$53</td>
          </tr>
          <tr>
            <td>5869207</td>
            <td>My first CSS</td>
            <td>$49</td>
          </tr>
        </table>
    </p>
    <hr>
    <!-- HTML <colgroup> 标签 -->
    <h2 style='text-align:center;'># &lt;colgroup&gt;标签</h2>
    <p id="colgroup">简介：
        <br>&lt;colgroup&gt; 标签用于表示 HTML 的表格列组，定义了表中的一组列表。
        <br><span>标签定义及使用说明：</span>
        <br>&lt;colgroup&gt; 标签用于对表格中的列进行组合，以便对其进行格式化。
        <br>通过使用 &lt;colgroup&gt; 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。
        <br>注释：只能在 &lt;table&gt; 元素之内，在任何一个 &lt;caption&gt; 元素之后，在任何一个 &lt;thead&gt;、&lt;tbody&gt;、&lt;tfoot&gt;、&lt;tr&gt; 元素之前使用 &lt;colgroup&gt; 标签。
        <br>提示：如果想对 &lt;colgroup&gt; 中的某列定义不同的属性，请在 &lt;colgroup&gt; 标签内使用 &lt;col&gt; 标签。
        <br><span>属性：</span>
        <br>1、span 属性定义了 &lt;colgroup&gt; 元素应该横跨的列数。提示：要为 &lt;colgroup&gt; 内的列定义不同的属性，请在 &lt;colgroup&gt; 标签内使用 &lt;col&gt; 标签。
        <br><span>实例：</span>
        <table border="1">
          <colgroup span="2" style="background:red"></colgroup>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>3476896</td>
            <td>My first HTML</td>
            <td>$53</td>
          </tr>
          <tr>
            <td>5869207</td>
            <td>My first CSS</td>
            <td>$49</td>
          </tr>
        </table>      
    </p>
    <hr>
    

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
        isFocus:false,
      }; 
    },
    computed:{},
    methods:{
        doSomething:function(){
            console.log('Step 1: Write Tutorial');
        },
        doSomethingElse:function(){
            console.log('Step 2: Edit Tutorial');
        },
        msg(){
            alert("Hello world!");
        },
    },
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
    p>p{
        font: 16px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
        color:green;
    }
    #div1,#div2 {width:350px;height:70px;padding:10px;border:1px solid #aaaaaa;}

    /*表格元素标签样式*/
    thead {color:green;}
    tbody {color:blue;}
    tfoot {color:red;}
    
    /*改变input标签data控件样式*/
    input[type=date]::-webkit-inner-spin-button { visibility: hidden; }
    input[type="date"]::-webkit-datetime-edit-fields-wrapper { 
        font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;        
        background-color: #eee;
        color: green; 
    }  
    input[type="date"]::-webkit-datetime-edit-text { color: red; padding: 0.3em; }

    input[type=range] {
    -webkit-appearance: none;
    width: 300px;
    border-radius: 10px;
}
    /* H5中input中range类型的美化及其 */


</style>