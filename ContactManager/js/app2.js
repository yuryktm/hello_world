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

var userView  =  Backbone.View.extend({
        //temlate: _.template($('#user-id').html()),
        template: '#user-id',

        render: function(){

            //var str = this.model.get('name');

            var template = _.template($(this.template).html());
            var str = template(this.model.toJSON());
            //либо
            //var str = this.template(this.model.toJSON());

            this.$el.html(str);
            return this;
        }
});

var user = new userModel();
var view = new userView({model: user});
console.log(view.render().el);

///////////////////////////////////////////////////////////////////////
var userCollection = Backbone.Collection.extend({
    model: userModel
});

var users = [{name:"sdfgdf", age: 34},{name:"jjjjj", age: 11}];

//вид списка юзеров
var usersView = Backbone.View.extend({
    tagName:'ul',

    initialize: function(){
        console.log(this.collection);
    },

    render: function(){
        //_.each(this.collection.models, function(user){
        //    var uv = new usersView({model: user});
        //    this.$el.append(uv.render().el);
        //    //console.log(this);
        //}, this);

        return this;
    }


});
var col = new userCollection(users);

var uv_obj = new usersView({collection: col});
uv_obj.render();
$('body').append(uv_obj.el);

$('body').append(view.el);

///////////////////////Router///////////////////////////////////

//global custom object events
var vent = _.extend({}, Backbone.Events);

var router = Backbone.Router.extend({
    routes: {
        '' :                    'index',
        'page/hard123' :        'page',
        'search/:query' :              'search',
        'tasks/:id'  :       'showTasks',

        '*other':                     'default'//писать в конце
    },

    showTasks: function(id){
        vent.trigger('tasks:show', id);
    },

    index: function(){
        console.log('index');
    },
    page: function(q){
        console.log('page/hard123 ' + q);
    },
    search: function(query){
        console.log('search ' + query);
    },
    //проверка - ../index.html#12354123412
    //index.html + # + 12354123412
    default: function(q){
        console.log('default' + q);
    }
});

new router();
Backbone.history.start();

var taskView  =  Backbone.View.extend({
    initialize: function(){
        vent.on('tasks:show', this.show, this);
    },

    show: function(id){
        console.log('show view ' + id);
    }
});

new taskView;
////////////////////////////////////////////////////////////////////////////////