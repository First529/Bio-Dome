
$(function () {
    setInterval(function () {

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-faucet/view",
            dataType: "text",
            success: function (response) {
                console.log(response)
                $('#box3').text(response)
            }
        });
    }, 1000)

    


})