var y = 0
var total = 0;
var count = 0
var raw_data = []
$(function () {
    setInterval(function () {

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-indoor_temperature/view",
            dataType: "text",
            success: function (response) {
                
                console.log("from server : " + response)
                y = response
                raw_data.push(y)

                count++;
                total += parseInt(y);
                $('#box').text(response)
                if (count % 10 == 0) {

                    var average = total / raw_data.length;
                    console.log("average " + average);
                    $('#boxa').text(average.toFixed(2))
                        
                }
            }
        });
    }, 1000)

})

window.onload = function () {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Temperature chart (per second)"
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
        yVal = parseInt(y)
        console.log(raw_data)


        if (dps.length > dataLength) {
            dps.shift();
        }

        chart.render();
    };

    updateChart(dataLength);
    setInterval(function () { updateChart() }, updateInterval);

}




