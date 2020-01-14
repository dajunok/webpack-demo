//测试函数对象属性apply()

function myf(){};

myf.prototype.apply=function(arg){
    return arg;
};

exports.a=myf;
//exports.a="ok";

