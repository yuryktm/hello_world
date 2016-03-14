define(['jquery',
        'backbone',
        'text!template/vendor-card-view.html'
    ],
    function($, Backbone, tpl) {

        return Backbone.View.extend({

            _template: _.template(tpl),

            initialize: function (model) {
                this.model = model;
            },

            render: function () {

                this.$el.html(this._template(this.model.toJSON()));

                return this;
            }
        });
    });
