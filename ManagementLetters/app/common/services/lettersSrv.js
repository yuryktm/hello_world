(function(){
    "use strict";
    angular
        .module("commonServices")
        .service("letterServices", letterServices);

    function letterServices(letterVal){
        this.model = {};
        this.model.letters = letterVal.data.letters;
        this.model.letter = letterVal.data.letters[0];

        this.select = function(id){
            var letter;
            this.model.letters.forEach(function(item){
                if(id===item.id){
                    item.selected = true;
                   letter = item;
                }
                else{
                    item.selected = false;
                }
            });

            if(letter){
                this.model.letter = letter;
            }
        };

        this.inversPropertyReaded = function(id){
            //for (var j= 0; j < this.letters.length; j++){
            //    if(this.letters[j].selected){
            //        this.letters[j].readed = !this.letters[j].readed;
            //    }
            //}

            if((typeof id) !== undefined){
                this.letters.forEach(function(item){
                    if(item.id === id){
                        item.readed = !item.readed;
                    }
                });
                return;
            }

            this.letters.forEach(function(item){
                if(item.selected){
                    item.readed = !item.readed;
                }
            });
        };

        //this.inversPropertyReaded = function(id){
        //    this.letters.forEach(function(item){
        //        if(item.id === id){
        //            item.readed = !item.readed;
        //        }
        //    });
        //};

        //this.setReadedProp = function(id, readed){
        //    this.letters.forEach(function(item){
        //        if(item.id === id){
        //            item.readed = readed;
        //        }
        //    });
        //};


        //this.removeLetter = function(id){
        //
        //    var index;
        //    for(var i = 0;i < this.letters.length;i++)
        //    {
        //        if(this.letters[i].id === id){
        //            index = i;
        //            break;
        //        }
        //    }
        //
        //    if(angular.isNumber(index)){
        //        this.letters = this.letters.splice(index+1, 1)
        //    }
        //};

        this.removeSelectLetter = function(){
            var index;
            for(var i = 0;i < this.model.letters.length;i++)
            {
                if(this.model.letters[i].selected === true){
                    index = i;
                    break;
                }
            }

            if(angular.isNumber(index)){
                this.model.letters.splice(index, 1)
            }
        };
    }

})();