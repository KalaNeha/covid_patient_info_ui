import { useSlotProps } from "@mui/base";
import * as d3 from "d3";

function Graph(props) {
   function shouldComponentUpdate() {
        console.log('Greeting - shouldComponentUpdate lifecycle');
    
        return false;
      }
    var treeData = [
        {
            name: props.name,
            parent: "null",
            type: "black",
            level: "yellow",
            children: [
                {
                    name: "Rio",
                    type: "black",
                    level: "blue",
                    children: [
                        {
                            name: "Raquel",
                            type: "black",
                            level: "violet",
                            children: [
                                {
                                    name: "Hackett",
                                    type: "black",
                                    level: "purple",
                                },
                                {
                                    name: "Alexender",
                                    type: "black",
                                    level: "purple",
                                    children: [
                                        {
                                            name: "Nobita",
                                            type: "black",
                                            level: "coral",
                                        },
                                        {
                                            name: "Gian",
                                            type: "black",
                                            level: "coral",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: "Tokio",
                            type: "black",
                            level: "violet",
                        },
                    ],
                },
                {
                    name: "Arina",
                    type: "black",
                    level: "red",
                    children: [
                        {
                            name: "Sabella",
                            type: "black",
                            level: "maroon",
                            children: [
                                {
                                    name: "Daniel",
                                    type: "black",
                                    level: "chocolate",
                                    children: [
                                        {
                                            name: "Bonsi",
                                            type: "black",
                                            level: "cyan",
                                        },
                                        {
                                            name: "Koral",
                                            type: "black",
                                            level: "cyan",
                                        },
                                    ],
                                },
                                {
                                    name: "Jack",
                                    type: "black",
                                    level: "chocolate",
                                },
                            ],
                        },
                        {
                            name: "Raakel",
                            type: "black",
                            level: "maroon",
                        },
                    ],
                },
                {
                    name: "Berlin",
                    type: "black",
                    level: "red",
                    children: [
                        {
                            name: "Denver",
                            type: "black",
                            level: "green",
                        },
                        {
                            name: "Nairobi",
                            type: "black",
                            level: "green",
                            children: [
                                {
                                    name: "Allar",
                                    type: "black",
                                    level: "blue",
                                },
                                {
                                    name: "Griffin",
                                    type: "black",
                                    level: "blue",
                                    children: [
                                        {
                                            name: "Ron",
                                            type: "black",
                                            level: "brown",
                                        },
                                        {
                                            name: "Mac",
                                            type: "black",
                                            level: "brown",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Helsinki",
                    type: "black",
                    level: "blue",
                    children: [
                        {
                            name: "Henna",
                            type: "black",
                            level: "magenta",
                        },
                        {
                            name: "Mic",
                            type: "black",
                            level: "magenta",
                        },
                    ],
                },
            ],
        },
    ];

    var margin = { top: 20, right: 120, bottom: 20, left: 120 },
        width = 960 - margin.right - margin.left,
        height = 500 - margin.top - margin.bottom;

    var i = 0,
        duration = 750,
        root;

    var tree = d3.layout.tree().size([height, width]);

    var diagonal = d3.svg.diagonal().projection(function (d) {
        return [d.y, d.x];
    });

    var svg = d3
        .select("body")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0];
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    // d3.select(self.frameElement).style("height", "500px");

    function update(source) {
        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 180;
        });

        // Update the nodes…
        var node = svg.selectAll("g.node").data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on("click", click);

        nodeEnter
            .append("circle")
            .attr("r", 1e-6)
            .style("fill", function (d) {
                return d._children ? d.type : d.level;
            });

        nodeEnter
            .append("text")
            .attr("x", function (d) {
                return d.children || d._children ? -13 : 13;
            })
            .attr("dy", ".35em")
            .attr("text-anchor", function (d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function (d) {
                return d.name;
            })
            .style("font-size", "20px");

        // Transition nodes to their new position.
        var nodeUpdate = node
            .transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        nodeUpdate
            .select("circle")
            .attr("r", 10)
            .style("fill", function (d) {
                return d._children ? d.type : d.level;
            });
        // .style("stroke", d=>d.data.type)
        // .style("fill", d=>d.data.level);

        nodeUpdate.select("text").style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node
            .exit()
            .transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle").attr("r", 1e-6);

        nodeExit.select("text").style("fill-opacity", 1e-6);

        // Update the links…
        var link = svg.selectAll("path.link").data(links, function (d) {
            return d.target.id;
        });

        // Enter any new links at the parent's previous position.
        link.enter()
            .insert("path", "g")
            .attr("class", "link")
            .attr("d", function (d) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal({ source: o, target: o });
            });

        // Transition links to their new position.
        link.transition().duration(duration).attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit()
            .transition()
            .duration(duration)
            .attr("d", function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal({ source: o, target: o });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Toggle children on click.
    function click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }
}
export default Graph;