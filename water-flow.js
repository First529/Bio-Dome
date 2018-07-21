$(function(){
    
    $('#on-button').on('click',function() {
        
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerpalm-buzz/set",
            data: {
                value:1
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, timeout: 5000
        });      
    })

    $('#off-button').on('click',function() {
        
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerpalm-buzz/set",
            data: {
                value:0
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
            }, timeout: 5000
        });      
    })
    
    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerpalm-buzz/view",
            dataType: "text",
            success: function (response) {
                console.log(response)
            }, timeout: 5000
        });
    },5000)
          

})