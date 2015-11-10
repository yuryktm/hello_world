function inherits(Chaild, Parent){
    var obj = function(){};
    obj.prototype = Parent.prototype;
    Chaild.prototype = new obj();
    Chaild.prototype.constructor = Chaild;
}

var Item = (function(){
    function Item(name, summ){
        this.name = name;
        this.summ = summ;
    }

    Item.prototype.getName = function(){
        this.name;
    };

    return Item;
})();

var ItemProfit = (function(_super){
    inherits(ItemProfit, _super);

    function ItemProfit(name, summ){
        _super.call(this, name, summ);
    }

    ItemProfit.prototype.getSumm = function(){
        return this.summ;
    };

    return ItemProfit;
})(Item);

var ItemRate = (function(_super){
    inherits(ItemRate, _super);

    function ItemRate(name, summ){
        _super.call(this, name, summ);
    }

    ItemRate.prototype.getSumm = function(){
        return this.summ *= -1;
    };

    return ItemRate;
})(Item);


var array = [];

array.push(new ItemProfit("haltura", 3000));
array.push(new ItemRate("proezd", 300));
array.push(new ItemRate("bass", 400));
array.push(new ItemRate("bass", 400));

for(var i = 0; i < array.length; i++){
    console.log(array[i].getSumm());
}


var item = new ItemProfit("test", 200);
var q = item.getSumm();

var item2 = new ItemRate("test", 200);
var q2 = item2.getSumm();
