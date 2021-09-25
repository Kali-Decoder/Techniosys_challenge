$(document).ready(function () {
    setInterval(clock, 1000);
    function clock() {
      var formattedDate = new Date();
      var h = formattedDate.getHours();
      var m = formattedDate.getMinutes();
      
     

      var s = formattedDate.getSeconds();
      $(".hour-text").text(h);
      $(".minute-text").text(m);
      $(".second-text").text(s);
     
    }
    
  });