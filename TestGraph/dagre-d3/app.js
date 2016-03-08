
// Create a new directed graph
var g = new dagreD3.graphlib.Graph().setGraph({});

var data = {
    states: [
        {id: "1", label: "Состояние 1"},
        {id: "2", label: "leb 2"},
        {id: "3", label: "leb 3"},
        {id: "4", label: "leb 4 Ссотояние состояние Ссотояние состояние"},
        {id: "5", label: "leb 5"},
        {id: "6", label: "leb 6"},
        {id: "7", label: "leb 7 Ссотояние состояние"},
        {id: "8", label: "leb 8"},
        {id: "9", label: "leb 9"},
        {id: "10", label: "leb 10"}],
    edges:[
        //{ node: "1", link: "2"}
        { n: "1", l: "2"},
        { n: "1", l: "3"},
        { n: "1", l: "4"},
        { n: "1", l: "5"},
        { n: "1", l: "6"},

        { n: "2", l: "7"},
        { n: "3", l: "7"},
        { n: "4", l: "7"},
        { n: "5", l: "7"},
        { n: "6", l: "7"},

        { n: "8", l: "2"},
        { n: "6", l: "9"},
        { n: "7", l: "10"}
    ]
};

// Automatically label each of the nodes
data.states.forEach(function(state) {
    //g.setNode(state.id, { label: state.label, href: "http://www.google.ru/" });
   //////////

    g.setNode(state.id, {
        labelType: "html",
        label: "<b>"+state.label+"</b><br>Version: " + state.label + "<br><b>"+state.label+"</b><br>Version: " + state.label
       // class: "comp",
       // rx: 5,
       // ry: 5
        //width: 150
    });
});

data.edges.forEach(function(edge) {
    g.setEdge(edge.n, edge.l, { label: "", arrowheadClass: "arrowhead" });
});

// Set some general styles
g.nodes().forEach(function(v) {
    var node = g.node(v);
    node.rx = node.ry = 5;
});

// Add some custom colors based on state
g.node('1').style = "fill: #BEF574";
//g.node('CLOSED').style = "fill: #f77";
//g.node('ESTAB').style = "fill: #7f7";

var svg = d3.select("svg"), inner = svg.select("g");

//svg.selectAll("g.node").on("click", function(id) {
//    console.log("Clicked " + id);
//});

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

zoom
    .translate([(svg.attr("width") - g.graph().width * initialScale) / 2, 20])
    .scale(initialScale)
    .event(svg);
svg.attr('height', g.graph().height * initialScale + 40);


svg.selectAll("g.node").on("click", function(id) {
   // var _node = g.node(id);
    console.log("Clicked " + id);

    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "http://google.com";
    a.click();
});