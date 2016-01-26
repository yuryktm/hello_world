var App = App ||  CreateApp();
//window.App

function CreateApp(){
    return {
        Models : {},
        Collections : {},
        Views : {},
        Router : {}
    };
}

(function ($) {

    //window.App = {
    //    Models : {},
    //    Collections : {},
    //    Views : {},
    //    Router : {}
    //};
    /************************************************************************************************************/
    var contacts = [
        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];

    App.Models.Contact = Backbone.Model.extend({
        defaults: {
            photo: ".//img/placeholder.png"
        }
    });

    App.Collections.Directory = Backbone.Collection.extend({
        model: App.Models.Contact //В поле model указываем, какой класс будем использовать для каждого объекта модели
    });

    App.Views.ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#contactTemplate").html(),

        render: function () {
            var tmpl = _.template(this.template);

            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    App.Views.DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = new App.Collections.Directory(contacts);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new App.Views.ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });

    var directory = new App.Views.DirectoryView();

} (jQuery));


