define(['jquery',
        'backbone',
        'text!template/vendor-card-view.html',
        'text!template/vendor-card-edit.html',
    ],
    function($, Backbone, tplView, tplEdit) {

        return Backbone.View.extend({

            events: {
                'click .edit-btn': 'editCard',
                'click .save-btn': 'saveCard',
                'click .cancel-btn': 'viewCard',

                'click .set-agreement-quality-file': 'setAgreementQualityFile',
                'click .remove-agreement-quality-file': 'removeAgreementQualityFile',
            },

            initialize: function (model) {
                this.model = model;
            },

            render: function () {
                this.viewCard();

                return this;
            },

            //редактируем карточку
            editCard: function() {
                this.$el.html(_.template(tplEdit)(this.model.toJSON()));
            },


            saveCard: function() {
                this.viewCard();
            },

            //режим просмотра карточки
            viewCard: function() {
                this.$el.html(_.template(tplView)(this.model.toJSON()));
            },

            /********************************************************************************************************/
            //Соглашение о качестве, файл

            setAgreementQualityFile: function(){
                var value = "test 123412.doc";
                this.model.set('agreementQualityFile', value);
                this.$('.agreement-quality-file').text(value);
                this.$('.agreement-quality-file').val(value);
            },

            removeAgreementQualityFile: function(){
                this.model.set('agreementQualityFile', null);
                this.$('.agreement-quality-file').text("");
                this.$('.agreement-quality-file').val("");
            }


        });
    });
