var diagramView = Backbone.View.extend({

    //el: "<svg width=960 height=600><g/></svg>",

    initialize: function (data) {
        this.data = data.data;

        var g = new dagreD3.graphlib.Graph().setGraph({});


        _.each(this.data.nodes, function(node) {

            var label = "<b>Тип: </b> " + node.DPBType + "<br>" +
                "<b>Статус: </b> " + node.status + "<br>" +
                "<b>Уровень: </b> " + node.currentLevelCoordination + "<br>" +
                "<b>Исполнитель: </b> " + node.executorCurrentLevelCoordination;

            g.setNode(node.id, {
                labelType: "html",
                label: label
            });

        });

        _.each(this.data.edges, function(edge) {
            g.setEdge(edge.id, edge.link, { label: "", arrowheadClass: "arrowhead" });
        });

        // Set some general styles
        _.each(g.nodes(), function(v) {
            var node = g.node(v);
            node.rx = node.ry = 5;
        });

        // Add some custom colors based on state
        g.node('1').style = "fill: #BEF574";


        var svg = d3.select("svg"),///this.el),
            inner = svg.select("g");

        // Set up zoom support
        var zoom = d3.behavior.zoom().on("zoom", function() {
            inner.attr("transform", "translate(" + d3.event.translate + ")" +
                "scale(" + d3.event.scale + ")");
        });
        svg.call(zoom);

        // Create the renderer
        var render = new dagreD3.render();

        // Run the renderer. This is what draws the final graph.
        render(inner, g);

        // Center the graph
        var initialScale = 0.75;

        zoom.translate([(svg.attr("width") - g.graph().width * initialScale) / 2, 20])
            .scale(initialScale)
            .event(svg);
        svg.attr('height', g.graph().height * initialScale + 40);


        //svg.selectAll("g.node").on("click", function(id) {
        //    // var _node = g.node(id);
        //    console.log("Clicked " + id);
        //
        //    var a = document.createElement("a");
        //    a.target = "_blank";
        //    a.href = "http://google.com";
        //    a.click();
        //});


        // this.render();
    },

    render: function () {

        //this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});

/************************************************************************************************************************/
var data = {
    nodes: [
        {
            id: "1",
            DPBType : "Перевод №111",
            status : "В процессе",
            currentLevelCoordination : "Согласование",
            executorCurrentLevelCoordination : "Иванов И.И.",
            root: true
        },
        {
            id: "2",
            DPBType : "Перевод №222",
            status : "В процессе",
            currentLevelCoordination : "Согласование",
            executorCurrentLevelCoordination : "Иванов И.И."
        },
        {
            id: "3",
            DPBType : "Перевод №333",
            status : "В процессе",
            currentLevelCoordination : "Согласование",
            executorCurrentLevelCoordination : "Иванов И.И."
        }
    ],
    edges:[
        { id: "1", link: "2"},
        { id: "1", link: "3"}
    ]
};


var view = new diagramView({data : data});
//$('#diagram').html(view.render().el);

