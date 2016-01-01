var _ = require('./bower_components/lodash/lodash.js');

var arr = [1,2,3,4,5,6,7,8,9];
//console.log(arr);

var arr2 = _.map(arr, function(x){return x*2;});
//console.log(arr2);

var sum = 0;
_.forEach(arr, function(x){
    sum += x;
   // console.log(x);
});

console.log(sum);

var a1 = _([1, 2]);//обертка
var a2 = ([1, 2]);
a1.value();

    _([1, 2]).forEach(function(n) {
    console.log(n);
});
/*********************************************************************************************************************/
var userList = (function(_){

    var users = [
        {id: 1, name: "User 1", age: 31, skils:["js","sql","java"]},
        {id: 2, name: "User 2", age: 43, skils:["js","javaSE"]},
        {id: 3, name: "User 3", age: 50, skils:["C#",".net"]}];

    function getNewID(){
        var user = _.max(users, 'id');
        return user ? user.id + 1 : 1;
    }

    var result = {};

    result.add = function(user){
        user.id = getNewID();
        users.push(user);
    };
    result.delete = function(id){
        users = _.remove(users, function(n) {
            return n.id !== id;
        });
    };

    result.getUser = function(id){
        return _.first(_.filter(users, function(n){
            return n.id === id;
        }));
    };

    result.getAll = function(){
        return users;
    };

    return result;
})(_);

//console.log(userList.getAll());
//userList.delete(2);
////console.log(userList.getUser(2));
//userList.add({name: "User 67"});
//console.log(userList.getAll());

/*********************************************************************************************************************/

var users = (function(_){

    var users = {};
    //defaults
    users["1"] = {name: "User 1", age: 31, skils:["js","sql","java"]},
    users["2"] = {name: "User 2", age: 43, skils:["js","javaSE"]},
    users["3"] = {name: "User 3", age: 50, skils:["C#",".net"]};

    function getNewID(){
        //var keyValue = 1;
        //_.forOwn(users, function(value, key) {
        //    var parseValue = parseFloat(key)
        //
        //    if(keyValue < parseValue){
        //       keyValue = parseValue;
        //    }
        //});
        //
        //return keyValue;

        var keyValue =  _.chain(users).max().keys();
        return keyValue ? keyValue + 1 : 1;
    }

    var result = {};

    result.add = function(user){
        var keyId = getNewID();
        users[keyId] = user;
    };

    result.delete = function(keyId){
        delete users[keyId];
    };

    result.getUser = function(keyId){
        return users[keyId];
    };

    result.getAll = function(){
        return users;
    };

    return result;
})(_);

var r = _.keys(users.getAll());
console.log(_.max(r));

console.log(users.getAll());
users.delete(2);
//console.log(userList.getUser(2));
users.add({name: "User 67"});
console.log(users.getAll());

