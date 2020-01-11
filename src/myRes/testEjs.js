const ejs = require('ejs');     //引入EJS模板




let people = ['geddy', 'neil', 'alex'];    
let html = ejs.render('<%= people.join(", "); %>', {people: people});  //使用默认分隔符<% %>
console.log(html);