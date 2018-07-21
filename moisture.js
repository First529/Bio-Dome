var y2 = 0
var total2 = 0;
var count2 = 0
var raw_data2 = []
$(function () {
    setInterval(function () {

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-indoor_humidity/view",
            dataType: "text",
            success: function (response) {
                console.log(response)
                y2 = response
                raw_data2.push(y2)
                count2++;
                total2 += parseInt(y2);
                $('#box2').text(response)
                if (count2 % 10 == 0) {

                    var average2 = total2 / raw_data2.length;
                    console.log("average " + average2);
                    $('#boxb').text(average2)
                    
                }
            }
        });
    }, 1000)


})

window.onload = function () {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
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
        console.log(y2)
        yVal = parseInt(y2);
        console.log(raw_data2)

        if (dps.length > dataLength) {
            dps.shift();
        }

        chart.render();
    };

    updateChart(dataLength);
    setInterval(function () { updateChart() }, updateInterval);

}

