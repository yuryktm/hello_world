define(['jquery',
        'backbone',
        'text!template/user-view.html',
        'text!template/users-list.html'
    ],
    function($, Backbone, tplUser, tplUserList) {

        var userModel = Backbone.Model.extend({
            defaults: {
                name : "name 123",
                age : 123
            }
        });

        var data = { name : "name999", age : 999 };
        var um =  new userModel(data);

        var userView = Backbone.View.extend({

            //template: $("#contactTemplate").html(),

            render: function () {
                var tmpl = _.template(tplUser);

                this.$el.html(tmpl(this.model.toJSON()));

                //
                this.$el.append(_.template(tplUserList)({index : 1, name : "ASDF", age : "33"}));

                return this;
            }
        });

        var uv = new userView({ model: um });

        $("#userlist").append(uv.render().el);



        //console.log(user.toJSON());

        return {};
    });
