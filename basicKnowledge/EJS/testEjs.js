const ejs = require('ejs');     //引入EJS模板



let people = ['geddy', 'neil', 'alex','zhangSan'];    
let html = ejs.render('<%= people.join(", "); %>', {people: people});  //使用默认分隔符<% %>
console.log(html);

//自定义分隔符：可针对单个模板或全局使用自定义分隔符。
// 1、使用ejs.render()
let users = ['geddy', 'neil', 'alex'];
let html_1=ejs.render('<?= user.join(" | "); ?>', {user: users},{delimiter: '?'});  // 单个模板文件指定分隔符：{delimiter: '?'}
console.log(html_1);  // => 'geddy | neil | alex'
ejs.delimiter = '$';    // 全局指定分隔符'$'
html_1=ejs.render('<$= users.join(" - "); $>', {users: users});
console.log(html_1);  // => 'geddy | neil | alex'

//2、使用ejs.renderFile(filename, data, options, function(err, str){});
ejs.renderFile('./11.ejs',{
    user:{
        name:"wangkun",
        age:22,
    },
    num:2,
    name:"zhangSan"
},{rmWhitespace:true,delimiter: '?'},(err,data)=>{
    if(err) {
        console.error(err);
    }else {
        console.log(data);
    }
});










