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
    <p>简介：
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
    <p>简介：
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
          First name: <input type="text" name="fname" autofocus><br>
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
    </p>
    <hr>


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
    methods:{
        doSomething:function(){
            console.log('Step 1: Write Tutorial');
        },
        doSomethingElse:function(){
            console.log('Step 2: Edit Tutorial');
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
</style>