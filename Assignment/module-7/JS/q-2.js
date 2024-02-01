// applying css using jQuery 
$(document).ready(function () {
    $('#div').css('background-color', 'red');
});



// Add Class and Remove Class in jQuery
$(document).ready(function(){
    $(".add").click(function(){
          $("#example").addClass("color");
    }); 
    $(".remove").click(function(){
             $("#example").removeClass("color");
    });
});


// jQuery animation
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#box").animate({height: "200px", width: "200px"});
    });
    $("#btn2").click(function(){
      $("#box").animate({height: "100px", width: "100px"});
    });
});