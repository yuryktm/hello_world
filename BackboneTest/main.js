(function(){
    console.log('main - load');

    //model
    var model = new Backbone.Model({playing: false});

    var AudioPlayerControls = Backbone.View.extend({

        events: { "click .btn" : "onClick" },

        initialize: function(model) {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function(){

            var str = "<button class=\"btn btn-<%- playing ? 'pause' : 'play' %>\"><%= playing ? 'pause' : 'play' %></button>";

            var tmpl = _.template(str);

            this.$el.html(tmpl(this.model.toJSON()));

            return this;
        },

        onClick: function(){
            this.model.set('playing', !this.model.get('playing'));
        }
    });

    var audioPlayerControlsView = new AudioPlayerControls(model);
    $('#container').html(audioPlayerControlsView.render().el);

})();
