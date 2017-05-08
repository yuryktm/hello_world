define([
    'dojo/text!../templates/cell-text.html'
], function (tpl) {

    return Backbone.View.extend({

        _template: _.template(tpl),

        events: {
            'change .cell-value': 'changeValue'
        },

        initialize: function (model) {
            this.model = cell;
        },

        render: function () {

            this.$el.html(this._template({}));

            return this;
        },

        changeValue: function () {

        }

    });

});