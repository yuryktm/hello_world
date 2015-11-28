//прототипное наследование, с промежуточным элементом
function Animal(){};
Animal.prototype.run = function(){};

function Rabbit(){} ;

var obj = function(){};
obj.prototype = Animal.prototype;
Rabbit.prototype = new obj();
Rabbit.prototype.constructor = Rabbit;

/**************************************************************************************************/

//Rabbit.prototype = { prototype: Animal.prototype };
//Rabbit.prototype.constructor = Rabbit;
//
//Rabbit.prototype.constructor = Rabbit;


/**************************************************************************************************/
//static

function AAA(){}
AAA.NAME = "my name";

//AAA.NAME - вызов

/**************************************************************************************************/
//Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype
//Свойство prototype имеет смысл только у конструктора
function A(){}
function B(){}

//B.prototype = A;
B.prototype = {prototype: A.prototype}
B.prototype.constructor = B; //чтоб если что new b.constructor(); вместо new B()

//При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
var b = new B();

/**************************************************************************************************/

function fff(){
    this.aa = 4;
    var bb = 5;
}
fff();

//console.log(aa);
//console.log(bb);

console.log(fff.bb);
/**************************************************************************************************/

var a = 1;
a = 3;
function ff(){

    var a = 2;

    console.log(this.a);
};

ff();

/**************************************************************************************************/
//проверка свойства при наличии hasOwnProperty как свойства
//var r = ({a:1}).hasOwnProperty('a');
var obj = { hasOwnProperty: 3, a:1 };

var obj2 = {};
var r = obj2.hasOwnProperty.call(obj,'a'); //({}).hasOwnProperty.call(obj,'a');

console.log(r);
/**************************************************************************************************/

var func = function() { console.log( 'First' ); return 'First';}();

(function() { console.log( 'Second' ); }) ();

console.log(func);

/**************************************************************************************************/
var a1, b1;

function start(){
    if(a1 && b1){
        console.log('asdfasdf');
    }
}
var f1 = function(){
    a1 = true;
    console.log('a1');
    start();
};
var f2 = function(){
    b1 = true;
    console.log('b1');
    start();
};

setTimeout(f1, 500);
setTimeout(f2, 1500);
/**************************************************************************************************/


