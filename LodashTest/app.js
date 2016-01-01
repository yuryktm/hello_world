var template = document.getElementById('menu-template').innerHTML;

// Шаблон
//var tmpl = _.template('<div class="menu"><span class="title"><%-title%></span><ul><% items.forEach(function(item) { %><li><%-item%></li><% }); %></ul></div>');
var tmpl = _.template(template);

// Данные
var data = {
    title: "Сладости",
    items: [
        "Торт",
        "Печенье",
        "Пирожное"
    ]
};

// Результат подстановки
var html = tmpl(data);
document.write(html);

/*********************************************************************************************************************/

var obj = {
users : [
    {name: "Вася", age: 10},
    {name: "Петя", age: 15},
    {name: "Женя", age: 20},
    {name: "Маша", age: 25},
    {name: "Даша", age: 30}
]};

var html2 = _.template(document.getElementById('users-template').innerHTML)(obj);

var elem = document.createElement('div');
elem.innerHTML = html2;
document.body.appendChild(elem);

/*********************************************************************************************************************/
