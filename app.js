$(function() {
    $("#button1") .mouseover(function () {
        this.src= "./door2.png"
     }).mouseout(function () {
         this.src= "./closeddoor.png"
     });

     $("#button2") .mouseover(function () {
        this.src= "./on.png"
     }).mouseout(function () {
         this.src= "./off.png"
     });

     $("#button3") .mouseover(function () {
        this.src= "./high.png"
     }).mouseout(function () {
         this.src= "./low.png"
     });

     $("#button4") .mouseover(function () {
        this.src= "./buzz.png"
     }).mouseout(function () {
         this.src= "./bell.png"
     });
});
