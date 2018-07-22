$(function() {
    $("#button1") .mouseover(function () {
        this.src= "./high.png"
     }).mouseout(function () {
         this.src= "./low.png"
     });

     $("#button2") .mouseover(function () {
        this.src="./drops.png"
     }).mouseout(function () {
        this.src="./drop.png"
     });

     let count = 0
     $(function(){
        $("#button3").on('click',function () {
            if (count == 0) {
               this.src="./on.png"
               count++;
            } else{
               this.src="./off.png"
               count--;
            }

            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-indoor_LED/set",
                data: {value : count},
                dataType: "json",
                success: function (response) {
                    console.log(response)
                }
            });
           
        });
        
     })

     let count2 = 0
     $(function(){
        $("#button4").on('click',function () {
            if (count2 == 0) {
               this.src="./waves.png"
               count2++;
            } else{
               this.src="./wave.png"
               count2--;
            }

            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-water/set",
                data: {value : count2},
                dataType: "json",
                success: function (response) {
                    console.log(response)
                }
            });
           
        });
        
     })


     let count3 = 0
     $(function(){
        $("#button5").on('click',function () {
            if (count3 == 0) {
               this.src="./fans.png"
               count3++;
            } else{
               this.src="./fan.png"
               count3--;
            }

            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th/exceed/api/fingerplam-fan/set",
                data: {value : count3},
                dataType: "json",
                success: function (response) {
                    console.log(response)
                }
            });
           
        });
        
     })
     

     
});
