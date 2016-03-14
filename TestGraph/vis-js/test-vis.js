(function() {
    document.addEventListener("DOMContentLoaded", function () {


        var label = "<b>" + 'node.id' + "</b><br>\n" +
            "<b>Статус: </b> " + 'node.status' + "<br>\n" +
            "<b>Уровень: </b> " + 'node.currentLevel' + "<br>\n" +
            "<b>Исполнитель: </b> " + 'node.executor';

        var l = 300;
        var shape = 'box';

        var data = {
            nodes: [
                {id: "1", shape: shape, label: label},
                {id: "2", shape: shape, label: label},
                {id: "3", shape: shape, label: label},
                {id: "4", shape: shape, label: label},
                {id: "5", shape: shape, label: label, root: true},
                {id: "6", shape: shape, label: label},
                {id: "7", shape: shape, label: label},
                {id: "8", shape: shape, label: label},
                {id: "9", shape: shape, label: label},
                {id: "10", shape: shape, label: label}],
            edges:[
                // { node: "1", link: "2"},
                { from: "1", to: "2", length: l},
                { from: "1", to: "3", length: l},
                { from: "1", to: "4", length: l},
                { from: "1", to: "5", length: l},
                { from: "1", to: "6", length: l},

                { from: "2", to: "7", length: l},
                { from: "3", to: "7", length: l},
                { from: "4", to: "7", length: l},
                { from: "5", to: "7", length: l},
                { from: "6", to: "7", length: l},

                { from: "8", to: "2", length: l},
                { from: "6", to: "9", length: l},
                { from: "7", to: "10", length: l}

                //{ from: "7", to: "2", length: l},
                //{ from: "7", to: "3", length: l},
                //{ from: "7", to: "4", length: l},
                //{ from: "7", to: "5", length: l},
                //{ from: "7", to: "6", length: l}
            ]
        };


// create an array with nodes
        var nodes = new vis.DataSet(data.nodes);
        //    {id: 1, label: 'Node 1'},
        //    {id: 2, label: 'Node 2'},
        //    {id: 3, label: 'Node 3'},
        //    {id: 4, label: 'Node 4'},
        //    {id: 5, label: 'Node 5'}
        //]);

// create an array with edges
        var edges = new vis.DataSet(data.edges);
        //    {from: 1, to: 3},
        //    {from: 1, to: 2},
        //    {from: 2, to: 4},
        //    {from: 2, to: 5}
        //]);

// create a network
        var container = document.getElementById('mynetwork');
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {
            smoothCurves:false,
            hierarchicalLayout: {
                layout: "hubsize"
            },
            //stabilize: false,
            edges: {
                width: 1,
                style: 'arrow',
                color: 'gray',
                smooth: {
                    enabled: false
                }
            }
        };

        var network = new vis.Network(container, data, options);

    });

})();
