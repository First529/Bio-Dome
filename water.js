
$(function () {
    setInterval(function () {

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-tank/view",
            dataType: "text",
            success: function (response) {
                console.log(response)
                $('#velocity').text(response)
            }
        });
    }, 1000)


$('#on').on('click',function(){
    $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-water/set",
        data: {value:1},
        dataType: "dataType",
        success: function (response) {
            console.log(response)
        }
    });
})

$('#off').on('click',function(){
    $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-water/set",
        data: {value:0},
        dataType: "dataType",
        success: function (response) {
            console.log(response)
        }
    });
})
    


})