//var Person = function(config){
//    this.name = config.name;
//}
//
//Person.prototype.getName = function(){
//    return this.name;
//};
//
//var p = new Person({name:"ASDF"});
//console.log(p.getName());
/********************************************************************************************************************/
//var Name  = Backbone.Model.extend({
//    //данные по умолчанию
//    defaults: {
//        name: "Vasya"
//    },
//    //функции
//    walk: function(){
//        return this.get('name') + " walking!";
//    }
//});
//
//var n = new Name({name: 'Vas2'});
//n.get('name');
//n.set('name', 'Vas3');
//n.walk();
//n.toJSON();
/*********************************************************************************************************************/
function BubbleSort(arr)
{
    console.log(arr);
    var n = arr.length;
    for (var i = 0; i < n-1; i++){
        for (var j = 0; j < n-1-i; j++){
            if (arr[j+1] < arr[j]){
                var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
            }
        }
        console.log(arr);
    }
    return arr;
}

var arr = [4,2,11,33,4,6,8];

var a2 = BubbleSort(arr);