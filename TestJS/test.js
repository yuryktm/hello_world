////прототипное наследование, с промежуточным элементом
//function Animal(){};
//Animal.prototype.run = function(){};
//
//function Rabbit(){} ;
//
//var obj = function(){};
//obj.prototype = Animal.prototype;
//Rabbit.prototype = new obj();
//Rabbit.prototype.constructor = Rabbit;
//
///**************************************************************************************************/
//
////Rabbit.prototype = { prototype: Animal.prototype };
////Rabbit.prototype.constructor = Rabbit;
////
////Rabbit.prototype.constructor = Rabbit;
//
//
///**************************************************************************************************/
////static
//
//function AAA(){}
//AAA.NAME = "my name";
//
////AAA.NAME - вызов
//
///**************************************************************************************************/
////Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype
////Свойство prototype имеет смысл только у конструктора
//function A(){}
//function B(){}
//
////B.prototype = A;
//B.prototype = {prototype: A.prototype}
//B.prototype.constructor = B; //чтоб если что new b.constructor(); вместо new B()
//
////При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
//var b = new B();
//
///**************************************************************************************************/
//
//function fff(){
//    this.aa = 4;
//    var bb = 5;
//}
//fff();
//
////console.log(aa);
////console.log(bb);
//
//console.log(fff.bb);
///**************************************************************************************************/

//var a = 1;
//a = 3;
//function ff(){
//
//    var a = 2;
//
//    console.log(a);
//    console.log(this.a);
//};
//
//ff();

///**************************************************************************************************/
////проверка свойства при наличии hasOwnProperty как свойства
////var r = ({a:1}).hasOwnProperty('a');
//var obj = { hasOwnProperty: 3, a:1 };
//
//var obj2 = {};
//var r = obj2.hasOwnProperty.call(obj,'a'); //({}).hasOwnProperty.call(obj,'a');
//
//console.log(r);
///**************************************************************************************************/
//
//var func = function() { console.log( 'First' ); return 'First';}();
//
//(function() { console.log( 'Second' ); }) ();
//
//console.log(func);
//
///**************************************************************************************************/
//var a1, b1;
//
//function start(){
//    if(a1 && b1){
//        console.log('asdfasdf');
//    }
//}
//var f1 = function(){
//    a1 = true;
//    console.log('a1');
//    start();
//};
//var f2 = function(){
//    b1 = true;
//    console.log('b1');
//    start();
//};
//
//setTimeout(f1, 500);
//setTimeout(f2, 1500);
///**************************************************************************************************/
//function bind(func, context) {
//    console.log(1);
//    return function() {
//        console.log(2);
//        return func.apply(context, arguments);
//    };
//}
//
//var user = {
//    firstName: "Вася",
//    sayHi: function() {
//        console.log(this.firstName);
//    }
//};
//
//setTimeout(bind(user.sayHi, user), 1000);

//var arr = [{},{},{}];
//
//for (var i = 0; i < arr.length; i++) {
//    arr[i].f = function() {
//        console.log(i+i);
//        //alert(i);
//    }
//}
//
////arr[2].f();
//
//for (i = arr.length-1; i >=0 ; i--) {
//    arr[i].f();
//}
///**************************************************************************************************/
//var obj = { a: 1 };
//
//(function(obj) {
//    obj = {a: 2};
//})(obj);
//
//console.log(obj.a);
//**************************************************************************************************/

//(function() {
//    f();
//
//    f = function() {
//        console.log(1);
//    }
//})();
//
//function f() {
//    console.log(2)
//}
//
//f();

// Function Declaration - function f() {}
// Function Expression - var f = function() {}
//Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.
//**************************************************************************************************/
//(function() {
//    console.log(1)
//setTimeout(function(){console.log(2)}, 1000)
//setTimeout(function(){console.log(3)}, 0)
//console.log(4)
//})()
//console.log(false == '0')
//console.log(false === '0')
//console.log(0.1 + 0.2 )

//function(){
//    var d= 5;
//    return function(){
//        console.log(d)
//    }
//};

//for(var i=0; i < 5; i++) {
//    //setTimeout(function(){console.log(i)}, 0)
//    //setTimeout(function(i){ console.log(i);}(i), 0)
//    function fff(ii){console.log(ii);}
//    setTimeout(fff(i), 0)
//}

//клонирование объекта
//x = {...}
//y = JSON.parse(JSON.stringify(x))

//**************************************************************************************************/
//function Log(str){
//    this.str = str;
//}
//
//Log.prototype.test = function(){
//    console.log("a2 - " + this.str);
//}
//
//var a = new Log("gggggggggg");
//a.test();
//
//var a2 = new a.constructor("jjj");
//a2.test();
//**************************************************************************************************/
//var promise = new Promise(function(resolve, reject) {
//    // Эта функция будет вызвана автоматически
//
//    // В ней можно делать любые асинхронные операции,
//    // А когда они завершатся — нужно вызвать одно из:
//    resolve("ss");// при успешном выполнении
//    // reject(ошибка) при ошибке
//})
//
//promise.then(function(str){
//    console.log(" - " + str);
//})
// onRejected сработает при ошибке
//promise.then(null, onRejected)
//**************************************************************************************************/
//var arr = [1,2,3];
//Array.prototype.choto = function(cb){
//    for(var j=0;j<this.length; j++ ){
//        this[j] = cb(this[j]);
//    }
//};
//arr.choto(function(x){return x*2;});
//**************************************************************************************************/
(function(n){
    var print = function(str, l){
        for(var j=0;j<l;j++){
            console.log(str)

        }
    };

    for(var i=0;i<n;i++){
        //print('*', n-(i+1))

       // console.log(n-(i+1));//bok
        //console.log((2*i+1));//zentr
    }
})(3);