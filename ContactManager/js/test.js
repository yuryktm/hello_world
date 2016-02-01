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
var userModel  = Backbone.Model.extend({
    //данные по умолчанию
    defaults: {
        name: "Vasya",
        age: 11
    },

    validate: function(attrs) {
        if (attrs.age <= 0) {
            return "Неправильно задан возраст!";
        }

        if (!attrs.name) {
            return "Не задано Имя!";
        }

    },

    //функции
    walk: function(){
        return this.get('name') + " walking!";
    }
});
//
var n = new userModel({name: 'Vas2'});
n.on("invalid", function(model, error) {
    alert(model.get("title") + " " + error);
});


console.log(n.get('name'));
n.set('name', 'Vas3');
n.set('name', '', {validate:true});
n.set('age', 0, {validate:true});

console.log(n.walk());
console.log(n.toJSON());
/*********************************************************************************************************************/
//function BubbleSort(arr)
//{
//    console.log(arr);
//    var n = arr.length;
//    for (var i = 0; i < n-1; i++){
//        for (var j = 0; j < n-1-i; j++){
//            if (arr[j+1] < arr[j]){
//                var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
//            }
//        }
//        console.log(arr);
//    }
//    return arr;
//}
//
//var arr = [4,2,11,33,4,6,8];
//
//var a2 = BubbleSort(arr);