var template = document.getElementById('menu-template').innerHTML;

// ������
//var tmpl = _.template('<div class="menu"><span class="title"><%-title%></span><ul><% items.forEach(function(item) { %><li><%-item%></li><% }); %></ul></div>');
var tmpl = _.template(template);

// ������
var data = {
    title: "��������",
    items: [
        "����",
        "�������",
        "��������"
    ]
};

// ��������� �����������
var html = tmpl(data);
document.write(html);

/*********************************************************************************************************************/

var obj = {
users : [
    {name: "����", age: 10},
    {name: "����", age: 15},
    {name: "����", age: 20},
    {name: "����", age: 25},
    {name: "����", age: 30}
]};

var html2 = _.template(document.getElementById('users-template').innerHTML)(obj);

var elem = document.createElement('div');
elem.innerHTML = html2;
document.body.appendChild(elem);

/*********************************************************************************************************************/
