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

function ff(){

  //  var a = 2;

    console.log(this.aa);
};

ff();





