/*Array 对象方法
-----------------------------------------------------------------------------------------
方法                                描述
-----------------------------------------------------------------------------------------
concat()          连接两个或更多的数组，并返回结果。
every()           检测数组元素的每个元素是否都符合条件。
filter()          检测数组元素，并返回符合条件所有元素的数组。
indexOf()         搜索数组中的元素，并返回它所在的位置。
join()            把数组的所有元素放入一个字符串。
lastIndexOf()     返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
map()             通过指定函数处理数组的每个元素，并返回处理后的数组。
pop()             删除数组的最后一个元素并返回删除的元素。
push()            向数组的末尾添加一个或更多元素，并返回新的长度。
reverse()         反转数组的元素顺序。
shift()           删除数组的第一个元素。
slice()           选取数组的的一部分，并返回一个新数组。
some()            检测数组元素中是否有元素符合指定条件。
sort()            对数组的元素进行排序。
splice()          从数组中添加或删除元素。
toString()        把数组转换为字符串，并返回结果。
unshift()         向数组的开头添加一个或更多元素，并返回新的长度。
valueOf()         返回数组对象的原始值。
-----------------------------------------------------------------------------------------
console.log();
*/




var cars = ["Saab", "Volvo", "BMW"];
var arry= [
      { message: 'Foo' },
      { message: 'Bar' }
    ];

//使用中括号[]将变量作为一个对象的Key
var a='message',b='Cbo';
var obj={[a]:b};   //=>  { message: 'Cbo' }
arry.push(obj);    //=>  [ { message: 'Foo' }, { message: 'Bar' }, { message: 'Cbo' } ]

//使用concat()合并三个数组的值：
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale,kai); //=> [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]

//使用every()检测数组元素的每个元素是否都符合条件。
var ages=[16,30,50,40];
function checkAdult(age){   //检测是否成年人（回调函数）
    return age>=18;
}
var isAdult=ages.every(checkAdult);  //=> false             使用every()检测数组元素的每个元素是否都符合条件
var adult=ages.filter(checkAdult);   //=> [ 30, 50, 40 ]    filter检测数组元素，并返回符合条件所有元素的数组。
var index=ages.indexOf(16);   //=>  0             indexOf搜索数组中的元素，并返回它所在的位置。
var index=ages.indexOf(40);   //=>  3             indexOf搜索数组中的元素，并返回它所在的位置。
var str=ages.join(',');       //=>  16,30,50,40   join把数组的所有元素放入一个字符串。
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var str1=fruits.join(' and ');  //=>  Banana and Orange and Apple and Mango
var index=fruits.lastIndexOf("Apple");  //=>  2   
var numbers = [4, 9, 16, 25];
var mapnumbers=numbers.map(Math.sqrt);  //=>  [ 2, 3, 4, 5 ]   map处理数组的每个元素，并返回处理后的数组。
function addone(num){
  return ++num;
}
var mapnumbers=numbers.map(addone);  //=> [ 5, 10, 17, 26 ]   map处理数组的每个元素，并返回处理后的数组。
var fruits = ["Banana", "Orange", "Apple", "Mango",true];
var v=fruits.pop();   //=> true   pop()删除数组的最后一个元素并返回删除的元素。
var v=fruits.push(false);  //=> 5  push()向数组的末尾添加一个或更多元素，并返回数组的新长度。
var revArray=fruits.reverse();   //=> [ false, 'Mango', 'Apple', 'Orange', 'Banana' ]   reverse()方法用于颠倒数组中元素的顺序。
var fruits = ["Banana", "Orange", "Apple", "Mango",true];
var v=fruits.shift();    //=> Banana   shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。







//深入理解数组函数的参数和回调参数，
/*
  参数                描述
----------------------------------------------------------------
currentValue      必须。当前元素的值
index             可选。当期元素的索引值
arr               可选。当期元素属于的数组对象
-----------------------------------------------------------------
thisValue         可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
--------------------------------------------------------------------------------------------------------
*/
function check(age,index,arr){
  console.log(index);
  console.log(this);
  console.log(arr[0]);
  return age>=18;
}
console.log("===========深入理解数组函数的参数和回调参数============")
var isAdult=ages.every(check,obj);  
//console.log(isAdult);
/*输出=>0
    { message: 'Cbo' }
    16
    false
*/




