function circle(x, y, r) // ����� �������� ����
{
    this.x = x; // ���������� �
    this.y = y; // ���������� �
    this.r = r; // ������
    this.draw = function(color, globalAlpha) // ����� �������� ����
    {
        context.globalAlpha = globalAlpha; // "������������"
        context.fillStyle = color; // ���� �������
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        context.fill();
    };
}
function rect(x, y, width, height) // ����� �������� �������������
{
    this.x = x; // ���������� �
    this.y = y; // ���������� �
    this.width = width; // ������
    this.height = height; // ������
    this.draw = function(color, globalAlpha) // ������� ������ ������������� �������� �������� ����������
    {
        context.clearRect(0, 0, this.width, this.height);
        //context.globalAlpha = globalAlpha;
        //context.fillStyle = color;
        //context.fillRect(this.x, this.y, this.width, this.height);
    };
}
function update(ball) // ��������� ��������� ������� ����� ����������
{
    if (ball.y - ball.r < 0 || ball.y + ball.r > 320) // ��������������� � "�����" � "��������" ������
    {
        vY = -vY;
    }
    if (ball.x - ball.r < 0 || ball.x + ball.r > 480) // ��������������� � ����� � ����� "�������" ������
    {
        vX = -vX;
    }
    // ���������� ���������
    ball.x += vX;
    ball.y += vY;
}

function draw() // ������ �� ������
{
    game.draw("#fff", 0.1); // ������ ���
    ball.draw("#f00", 1); // ������ ���
    //ball2.draw("#ddd", 1); // ������ ���
    update(ball); // ��������� ����������
    update(ball2); // ��������� ����������
}
function startStop() // ������������� ����������
{
    game = new rect(0, 0, 480, 320); // ������������� ������������� ���
    ball = new circle(game.width/2, game.height/2, 24); // ���
    ball2 = new circle(game.width/2+20, game.height/2, 20); // ���
    vX = 1; // �������� ���� �� ��� �
    vY = 1; // �������� ���� �� ��� �
    var canvas = document.getElementById("example");
    canvas.width = game.width; // ������ ������
    canvas.height = game.height; // ������ ������
    context = canvas.getContext("2d");
    setInterval(draw, 1000 / 150); //������������ 50 ��� �� �������
}

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
