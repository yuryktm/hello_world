function Animal(){};
Animal.prototype.run = function(){};

function Rabbit(){} ;
var obj = function(){};
obj.prototype = Animal.prototype;
Rabbit.prototype = new obj();
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function(){};


//static

function AAA(){}
AAA.NAME = "my name";

AAA.NAME - вызов