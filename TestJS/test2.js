//function getNewId(){
//    if(!this.lastId){
//        this.lastId = 0;
//    }
//
//    return ++this.lastId;
//}

//function getNewId(){
//    if(!getNewId.lastId){
//        getNewId.lastId = 0;
//    }
//
//    return ++getNewId.lastId;
//}
/***************************************************************************************************/
//function f(){
//    if(arguments.length > 0){
//      //return [].slice.call(arguments,1,3);
//      return [].slice.apply(arguments,[1,3]);
//    }
//}
//
//console.log(f(1,2,3,4,5,6));
/***************************************************************************************************/
//console.log(Math.max.apply(Math, [1,2,3,4,56,7]));

//console.log(getNewId());
//console.log(getNewId());
//console.log(getNewId());
/***************************************************************************************************/


//var z = 10;
//function foo(){
//    console.log(z);
//}
//foo();
//
//(function(){
//    var z = 20;
//    foo();
//})();
//
//foo.call({z: 30});
/***************************************************************************************************/

//var inner;
//function outer(){
//    var local = 1;
//    inner = function(){
//      return local;
//    };
//}
//
////inner();
//outer();
//inner();
/***************************************************************************************************/
//var arr = [];
//var n = 0;
//for(var i=0; i<10; i++){
//    n++;
//
//    // 1 var
//
//    var f = function(n1){
//        return function (){ console.log(n1); }
//    }(n);
//
//    arr.push(f);
//
//    //2 var
//
//    //var f = function(){
//    //    console.log(arguments.callee.n1);
//    //};
//    //f.n1 = n;
//    //arr.push(f);
//}
//
//for(var j = 0;j < 10;j++){
//    arr[j]();
//}

/***************************************************************************************************/

//var d_name =(function(){
//    var name;
//    return function (n){
//        if(!name){
//            name = ['zero','one', 'two'];
//        }
//        return name[n];
//    };
//})();
//
//console.log(d_name(0));
//console.log(d_name(1));

/***************************************************************************************************/
//перезапись функции, дает сингл тон, лайзи
//один раз вычеслили второй раз, просто вызывается результат

//function fff(){
//    var result = 55 + 55;
//    fff = function(){return result;};
//    return fff();
//}
//
//console.log(fff());
//console.log(fff());

/***************************************************************************************************/
//function sum(x, y){return x + y;};
//
//function ddd(n){
//    var arr = [n];
//
//    var ddd = function(nn){
//
//        if((typeof nn) == 'function'){
//            var result = arr[0];
//            for(var j = 1;j < arr.length; j++){
//                result = nn.call(null, result, arr[j]);
//            }
//            return result;
//        }
//
//        if((typeof nn) == "number"){
//            arr.push(nn);
//        }
//
//        return ddd;
//    }
//
//    return ddd;
//};
//
//
//var d = ddd(1)(2)(3);
//console.log(d(sum));
/***************************************************************************************************/

//function A(){
//    function aaa(){ console.log("aaa"); }
//};
//function B(){
//    function b1(){ console.log("b1"); }
//};
//B.prototype.bbb = function(){ console.log("bbb"); }
//
//A.prototype = new B();
//A.prototype.constructor = A;
//
//var a = new A();
//a.bbb();

/***************************************************************************************************/

//console.log(100['toString']['length'])

//длинна функции - количество принимаемых аргументов
/***************************************************************************************************/
//(function f(){
//    function f(){ return console.log(1);}
//    return f();
//    function f(){ return console.log(2);}
//})();

/***************************************************************************************************/
//function f(){ return f;};
//console.log(new f() instanceof f);
////если этот объект в цепочке прототипов функции ф
//
//
//var nf = new f();
//console.log(typeof new f());
//console.log(typeof f);
//console.log(new f() instanceof f);

//var obj1 = {a:1, b:2};
//var obj2 = {a2:1, b2:2};
//
//var obj = Object(obj1, obj2);
//console.log(1);
/***************************************************************************************************/

//var A = function (){};
//A.prototype.b = 100;
//var a = new A();
//A.prototype.c = 101;
//a.c = -100;
//A.prototype = {};
//A.prototype.b = 536;
//console.log(a.__proto__.constructor.prototype.b === 536);
//var b = new A();
//console.log(a.__proto__.__proto__.constructor === a.__proto__.constructor.prototype.constructor);
//console.log(b instanceof A);
//console.log(!(b instanceof Object));

/***************************************************************************************************/
//
////если hasOwnProperty занят
//var foo = {
//    hasOwnProperty: function() { return false; },
//    bar: 'Да прилетят драконы'
//};
//// Используем метод hasOwnProperty пустого объекта
//// и передаём foo в качестве this
//({}).hasOwnProperty.call(foo, 'bar'); // true

/***************************************************************************************************/

//var arr = {a: 2, b: 4}; ///!!!!!!!!!!!!!!
var arr = [1, 2];

arr.forEach(function(i, item, array){
    console.log("i: " + i + " -item: " + item);
});

