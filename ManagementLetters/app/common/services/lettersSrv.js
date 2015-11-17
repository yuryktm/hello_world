(function(){
    "use strict";
    angular
        .module("commonServices")
        .service("letterServices", letterServices);

    function letterServices(lettersValue){
        this.model = {};
        this.model.letters = lettersValue.data.letters;
        this.model.letter = lettersValue.data.letters[0];

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

        //check only one letter
        this.checkItemReaded = function(){
            for(var i = 0;i < this.model.letters.length;i++)
            {
                if(this.model.letters[i].selected === true){
                    this.model.letters[i].readed = !this.model.letters[i].readed;
                    break;
                }
            }
        };

        //checked all cheked letters
        this.checkItemsReaded = function() {
            for(var i = 0;i < this.model.letters.length;i++)
            {
                if(this.model.letters[i].checked === true){
                    this.model.letters[i].readed = true;
                }
            }
        }

        this.existCheckedItems = function(){
            var result;
            this.model.letters.forEach(function(item){
                if(item.checked === true){
                    result = true;
                }
            });

            return result;
        };

        //removing all cheked letters
        this.removeCheckedLetters = function(){

            for(var i = 0;i < this.model.letters.length;i++)
            {
                if(this.model.letters[i].checked === true){
                    this.model.letters.splice(i, 1)
                    i = -1;
                }
            }

            if(this.model.letters.length <= 0){
                this.model.letter = null;
                return;
            }

            var selectedExist;
            this.model.letters.forEach(function(item){
                if(item.selected){
                    selectedExist = true;
                }
            });

            if(!selectedExist){
                this.model.letters[0].selected = true
                this.model.letter = this.model.letters[0];
            }
        }

        //removing only one selected letter
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

                if(this.model.letters.length > 0){
                    this.model.letters[0].selected = true
                    this.model.letter = this.model.letters[0];
                }
                else{
                    this.model.letter = null;
                }
            }
        };
    }
})();