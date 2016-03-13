// Create a new directed graph
var g = new dagreD3.graphlib.Graph().setGraph({});

//1. тип ДБП;
//2. статус;
//3. текущий уровень согласования;
//current level coordination
//4. исполнителей текущего уровня согласования.
//executor
var d = {
    DPBType : "Перевод №1234",
    status : "В процессе",
    currentLevelCoordination : "Согласование",
    executorCurrentLevelCoordination : "Иванов И.И."
}
//
//var data = {
//    nodes: [
//        {
//            id: "1",
//            DPBType : "Перевод №111",
//            status : "В процессе",
//            currentLevelCoordination : "Согласование",
//            executorCurrentLevelCoordination : "Иванов И.И.",
//            root: true
//        },
//        {
//            id: "2",
//            DPBType : "Перевод №222",
//            status : "В процессе",
//            currentLevelCoordination : "Согласование",
//            executorCurrentLevelCoordination : "Иванов И.И."
//        },
//        {
//            id: "3",
//            DPBType : "Перевод №333",
//            status : "В процессе",
//            currentLevelCoordination : "Согласование",
//            executorCurrentLevelCoordination : "Иванов И.И."
//        }
//    ],
//    edges:[
//        { id: "1", link: "2"},
//        { id: "1", link: "3"}
//    ]
//};



var data = {
    nodes: [
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
        //{ id: "1", link: "2"},
        //{ id: "1", link: "3"},
        //{ id: "1", link: "4"},
        //{ id: "1", link: "5"},
        //{ id: "1", link: "6"},
        //
        //{ id: "2", link: "7"},
        //{ id: "3", link: "7"},
        //{ id: "4", link: "7"},
        //{ id: "5", link: "7"},
        //{ id: "6", link: "7"},
        //
        //{ id: "8", link: "2"},
        //{ id: "6", link: "9"},
        //{ id: "7", link: "10"}


        //////////////////////////////////////////////////////
        //{id: "1", link: "2"},
        //{id: "1", link: "6"},
        //{id: "1", link: "9"},
        //
        //{id: "2", link: "5"},
        //{id: "2", link: "3"},
        //
        //{id: "3", link: "5"},
        //{id: "3", link: "7"},
        //
        //{id: "4", link: "10"},
        //{id: "4", link: "8"},
        //{id: "4", link: "5"},
        //{id: "4", link: "9"},
        //
        //{id: "5", link: "9"},
        //{id: "5", link: "7"},
        //
        //{id: "6", link: "9"},
        //{id: "6", link: "8"},
        //{id: "6", link: "7"},

/////////////////////////////////////////
        //{id: "5", link: "1"},
        //{id: "5", link: "2"},
        //{id: "5", link: "3"},
        //{id: "5", link: "7"},
        //{id: "5", link: "4"},
        //{id: "5", link: "9"},
        //
        //{id: "1", link: "9"},
        //{id: "1", link: "6"},
        //
        //{id: "4", link: "10"},
        //{id: "4", link: "8"},
        //{id: "4", link: "9"},
        //
        //{id: "6", link: "9"},
        //{id: "6", link: "8"},
        //{id: "6", link: "7"},



        {id: "5", link: "1"},
        {id: "5", link: "2"},
        {id: "5", link: "3"},
        {id: "5", link: "7"},
        {id: "5", link: "4"},
        {id: "5", link: "9"},

        {id: "1", link: "6"},

        {id: "4", link: "10"},
        {id: "4", link: "8"},


        {id: "6", link: "8"},
        {id: "6", link: "7"},

        {id: "9", link: "1"},
        {id: "9", link: "4"},
        {id: "9", link: "6"}
    ]
};

// Automatically label each of the nodes
data.nodes.forEach(function(node) {
    //g.setNode(state.id, { label: state.label, href: "http://www.google.ru/" });
   //////////

    //g.setNode(state.id, {
    //    labelType: "html",
    //    label: "<b>"+state.label+"</b><br>Version: " + state.label + "<br><b>"+state.label+"</b><br>Version: " + state.label
    //   // class: "comp",
    //   // rx: 5,
    //   // ry: 5
    //    //width: 150
    //});

    var label = "<b>" + node.id + "</b><br>" +
                "<b>Статус: </b> " + node.status + "<br>" +
                "<b>Уровень: </b> " + node.currentLevelCoordination + "<br>" +
                "<b>Исполнитель: </b> " + node.executorCurrentLevelCoordination;

  //  var label = "dsfgsd";

    g.setNode(node.id, {
            labelType: "html",
            label: label,
            style: node.root ? "fill: #BEF574" : "fill: #FFF"
        });
});

data.edges.forEach(function(edge) {
    g.setEdge(edge.id, edge.link, { label: "", arrowheadClass: "arrowhead" });
});

// Set some general styles
g.nodes().forEach(function(v) {
    var node = g.node(v);
    node.rx = node.ry = 5;
});

// Add some custom colors based on state
//g.node('5').style = "fill: #BEF574";
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


//svg.selectAll("g.node").on("click", function(id) {
//   // var _node = g.node(id);
//    console.log("Clicked " + id);
//
//    var a = document.createElement("a");
//    a.target = "_blank";
//    a.href = "http://google.com";
//    a.click();
//});