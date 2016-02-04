

//template helper
var template = function(id){
    return $('#' + id).html();
}



var psModel = Backbone.Model.extend({

});

var psCollections = Backbone.Collection.extend({
    model: psModel
});


var psView = Backbone.View.extend({

    template: $("#contactTemplate").html(),

    render: function () {
        var tmpl = _.template(this.template);

        this.$el.html(tmpl(this.model.toJSON()));

        return this;
    }
});