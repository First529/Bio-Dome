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
     $("#button3").on('click',function () {
         if (count == 0) {
            this.src="./on.png"
            count++;
         } else{
            this.src="./off.png"
            count--;
         }
        
     });

     $("#button4") .mouseover(function () {
        this.src= "./buzz.png"
     }).mouseout(function () {
         this.src= "./bell.png"
     });
});
