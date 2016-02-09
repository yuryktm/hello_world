define(['jquery',
        'backbone',
        'text!template/user-view.html',
        'text!template/users-list.html'
    ],
    function($, Backbone, tplUser, tplUserList) {

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
        //var userView = Backbone.View.extend({
        //
        //    //template: $("#contactTemplate").html(),
        //
        //    render: function () {
        //        var tmpl = _.template(tplUser);
        //
        //        this.$el.html(tmpl(this.model.toJSON()));
        //
        //        //
        //        this.$el.append(_.template(tplUserList)({index : 1, name : "ASDF", age : "33"}));
        //
        //        return this;
        //    }
        //});
        //
        //var uv = new userView({ model: um });
        //
        //$("#userlist").append(uv.render().el);

        ////////////////////////////////////////////////////////////////////////////

        var data = [
            { name : "name999", age : 23 },
            { name : "name2", age : 34 },
            { name : "name 5", age : 19 },
            { name : "name 77", age : 3 },
            { name : "name 3", age : 354 },
            { name : "name sdfg", age : 9 },
            { name : "name3434", age : 99 }];

        var UserModel = Backbone.Model.extend({});

        var UserCollection = Backbone.Collection.extend({
            model: UserModel //В поле model указываем, какой класс будем использовать для каждого объекта модели
        });

        var UserView = Backbone.View.extend({
            tagName: "tr",
            template: _.template(tplUser),

            render: function () {
                this.$el.append(this.template(this.model.toJSON()));
                return this;
            }
        });

        var UserCollectionView = Backbone.View.extend({

            template: _.template(tplUserList),

            initialize: function (model) {

                this.collection = new UserCollection(model);
                ///
                //this.collection.on('add', this.renderContact, this);
                //this.collection.on('remove',this.removeItem, this);


            },

            render: function () {

                //tplUserList
                this.$el.append(this.template);

                //var that = this;
                //_.each(this.collection.models, function (item) {
                //    that.renderUser(item);
                //}, this);

                return this;
            },

            renderUser: function (item) {
                var userView = new UserView({
                    model: item
                });
                this.$el.find('tbody').append(userView.render().el);
            }

            //removeItem: function(item){
            //
            //}

        });

        var userListView = new UserCollectionView(data);

        $('#userlist').html(userListView.render().el);
        //console.log(user.toJSON());

        return {};
    });
