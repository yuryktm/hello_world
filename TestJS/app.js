    function Base(name){
        this.name = name;
    };

    Base.prototype.getName = function(){
        return this.name;
    };

    function My(age){
      //  Base.call(this, "my");
        this.age = age;
    }

    My.CAR = "mers";

    var obj = function(){};
    obj.prototype = Base.prototype;
    My.prototype = new obj();
    My.prototype.constructor = My;

    My.prototype.getAge = function(){
        this.age;
    };






    //var b = new Base("bbbbbb");
    var m = new My(31234);

    console.log(m.getName());



var f =  function(){};
    f.prototype

    function ff(){};



var f2 = new ff();

var f3 = {};