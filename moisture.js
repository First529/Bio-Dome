var y = 0
$(function(){
    setInterval(function(){
        
            $.ajax({
                type: "GET",
                url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-indoor_humidity/view",
                dataType: "text",
                success: function (response) {
                    console.log(response)
                    y = response
                }
            });
        },5000)
    

})

window.onload = function () {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title :{
            text: "Humidity chart (per second)"
        },
        axisY: {
            includeZero: false
        },      
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    
    var xVal = 0;
    var yVal = 0; 
    var updateInterval = 1000;
    var dataLength = 20; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
    
        count = count || 1;
    
        dps.push({
            x: xVal,
            y: yVal
        })
        xVal++;
        console.log(y)
        yVal = parseInt(y);
    
        if (dps.length > dataLength) {
            dps.shift();
        }
    
        chart.render();
    };
    
    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);
    
    }
    
    