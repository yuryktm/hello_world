define(['jquery',
        'backbone',
        'text!template/list-group.html'
    ],
    function($, Backbone, tpl) {

        //var userModel = Backbone.Model.extend({
        //    defaults: {
        //        name : "name 123",
        //        age : 123
        //    }
        //});
        //
        //var data = { name : "name999", age : 999 };
        //var um =  new userModel(data);
        //
        var userView = Backbone.View.extend({

            //template: $("#contactTemplate").html(),

            render: function () {
                var tmpl = _.template(tpl);

                this.$el.html(tmpl);
                //this.$el.html(tmpl(this.model.toJSON()));
                //
               // this.$el.append(_.template(tplUserList)({index : 1, name : "ASDF", age : "33"}));

                return this;
            }
        });

        var uv = new userView({});

        $("#userlist").append(uv.render().el);



        return {};
    });

