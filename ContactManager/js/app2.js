var userModel  = Backbone.Model.extend({
    //������ �� ���������
    defaults: {
        name: "Vasya",
        age: 11
    },

    validate: function(attrs) {
        if (attrs.age <= 0) {
            return "����������� ����� �������!";
        }

        if (!attrs.name) {
            return "�� ������ ���!";
        }

    },

    //�������
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
            //����
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

var users = [];

var collection = new userCollection(users);


$('body').append(view.el);
