$(function () {
    setInterval(function () {

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-indoor_light/view",
            dataType: "text",
            success: function (response) {
                console.log(response)
                $('#boxc').text(response)
                if (parseInt(response) < 100) {
                    $.ajax({
                        type: "POST",
                        url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-indoor_LED/set",
                        data: {value : 1},
                        dataType: "json",
                        success: function (response) {
                            console.log(response)
                        }
                    });
                } else {
                    $.ajax({
                        type: "POST",
                        url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-indoor_LED/set",
                        data: {value : 0},
                        dataType: "json",
                        success: function (response) {
                            console.log(response)
                        }
                    });
                }
            }
        });
    }, 1000)

    


})