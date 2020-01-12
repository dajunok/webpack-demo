
import tpl from './tpl.ejs';    //webpack中依赖ejs-loader加载器（EJS模板引擎），注意！目前该加载器不是完全支持EJS模板语法（标签只支持<% %>和<%=  %>）。


export default function HeaderTpl() {
    const data={
        name:"zhangSan",
        num:2,
        user:{name:"wangkun",age:22}
    };
    return {
        tpl: tpl(data)
    };
}




