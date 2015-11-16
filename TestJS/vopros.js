function bind(method, context) {
    var args = Array.prototype.slice.call(arguments, 2); //создает масив из аргументов, начиная с 3 итд
    return function() {
        var a = args.concat(Array.prototype.slice.call(arguments, 0));//соедин 2 масива
        return method.apply(context, a);
    }
}

var obj = {k: 3.14};
var f = function(){
    var result = 0;
    for(var j = 0;j < arguments.length; j++){
        result+=arguments[j] * this.k;
    }
    return result;
};

var result = bind(f, obj, 1, 2, 3)(4, 5, 6);
console.log(result);

/******************************************************************************************************************/
function reversePrint(linkedList) {
    if(linkedList.next){
        reversePrint(linkedList.next);
    }
    console.log(linkedList.value);
}

var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

reversePrint(someList);
/******************************************************************************************************************/
var cmds = ['echo 1', 'echo 2', 'echo 3', ...].