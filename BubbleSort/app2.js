    function circle(x, y, r, value) // класс задающий круг
    {
        this.x = x; // координата х
        this.y = y; // координата у
        this.r = r; // радиус
        this.value = value;
        this.oldValue = value;
        this.draw = function(color, globalAlpha, current)
        {
            if(current){
                color = "#333"
            }

            if(this.oldValue != this.value){
                this.oldValue = this.value;
                color = "#f1f";
            }

            context.globalAlpha = globalAlpha; // "прозрачность"
            context.fillStyle = color; // цвет заливки
            context.beginPath();
            context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            context.fill();
            context.fillStyle = "black";
            context.font="32px Courier";
            context.fillText(this.value, this.x-9, this.y+9);
        };
    }

    function rect(x, y, width, height) // класс задающий прямоугольник
    {
        this.x = x; // координата х
        this.y = y; // координата у
        this.width = width; // ширина
        this.height = height; // высота
        this.draw = function(color, globalAlpha) // функция рисует прямоугольник согласно заданным параметрам
        {
            context.clearRect(0, 0, this.width, this.height);
            //context.globalAlpha = globalAlpha;
            //context.fillStyle = color;
            //context.fillRect(this.x, this.y, this.width, this.height);
        };
    }

    function draw(j){
        game.draw("#fff", 0.1);
        drawBalls(j)
    }

    //function drawCheked(){
    //    game.draw("#fff", 0.1);
    //    drawBalls()
    //}

    function getRandom(min, max){
        return Math.floor(Math.random() * max)+min;
    }

    function createRandomArray(length){
        var result = [];
        for(var i=0; i<length;i++){
            result.push(getRandom(0,9));
        }
        return result;
    }

    function createBalls(arr){
        var result = [];
        var w = 0;
        for(var j = 0;j < arr.length;j++){
            w+= 60;
            result.push(new circle(w, game.height/2, 24, arr[j])); // шар
        }

        return result;
    }

    function drawBalls(jjj){
        for(var j=0;j < balls.length;j++){
            if(j===jjj){
                balls[j].draw("#f00", 1, true);
            }else{
                balls[j].draw("#f00", 1, false);
            }
        }
    }

    function b3(){
        bubbleSort(window.arr,  window.s);
        window.s++;
        if(window.s <  window.arr.length *  window.arr.length) {
            clearInterval(window.timer);
            window.timer = setTimeout("b3()", 2000);
        }
    }

    function update(arr){
        for(var j = 0;j < balls.length;j++){
            balls[j].value = arr[j];
        }
    }

    function bubbleSort(arrOld, s){
        var arr = arrOld;
        var n = arr.length;
        var step = 0;
        for (var i = 0; i < n-1; i++){
            for (var j = 0; j < n-1-i; j++){
                if (arr[j+1] < arr[j]){
                    var t = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = t;
                }

                console.log(s);
                console.log(arr);
                update(arr);
                draw(j);

                if(s < step ){
                    return;
                }
                step++;
            }
        }
    }

    var game = new rect(0, 0, 700, 480); // прямоугольник закрашивающий фон
    var canvas = document.getElementById("example");
    canvas.width = game.width; // ширина холста
    canvas.height = game.height; // высота холста
    var context = canvas.getContext("2d");
    var balls;


    function start(){

        clearInterval(window.timer);
        window.arr = createRandomArray(10);
        balls = createBalls(arr);
        window.s = 0;

        window.timer = setTimeout("b3()", 0);
    }




