// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("transfrom", `translate(${margin.left}, ${margin.top})`);

d3.csv("./assets/data/data.csv").then(function(data){

    console.log(data.poverty);

    //Creating scale functions
    // var xLinearScale = d3.scaleLinear()
    //     .domain([20, d3.max(data, d => d.poverty)])
    //     .range([0, width]);

    // var yLinearScale = d3.scaleLinear()
    //     .domain([0, d3.max(data, d => d.healthCare)])
    //     .range([height, 0]);


}).catch(function(error){
    console.log(error);
});