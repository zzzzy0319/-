/*
js 的基本数据类型
	number string boolean
类对象模型:
	object
特殊类型:
	array



javascript声明变量的时候的名字的规范:
	1.严格区分大小写
	2.能够使用英文字母,字符,数字,下划线,$组成的
	3.不能以数字开头,可以用字母,下划线,$开头
	4.见名知意
	5.使用var 来修饰变量,但是可以不带var
	6.js结束的时候可以用分号结尾,也可以不带分号
*/



var num = 10;
console.log(num);
console.log(typeof num);
var num1 = 3.3;
console.log(num1);
console.log(typeof num);

var str1="你好Js";
var str2="hello world"
console.log(typeof (str1+str2))
var ret1=true;
console.log(ret1)
console.log(typeof ret1)

var arr="粉条,鸡蛋,韭菜".split(",")
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

var arr1="  饺 子   ".trimLeft();
console.log(arr1)


var ii=parseFloat("3.154");
console.log(ii)
console.log(typeof ii)

console.log("字符串的长度".length)