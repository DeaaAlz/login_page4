$(document).ready(function () {
    $(".input1").focus(function (e) { 
        $(".hr1").css("background-color", "blue");
        $(".input1").css("padding-left", "50px");
        $(".i1").css({"color":"blue","left":"20px"});
    });

    $(".input1").focusout(function (e) { 
        $(".hr1").css("background-color", "#ccc7c7");
        $(".input1").css("padding-left", "65px");
        $(".i1").css({"color":"gray","left":"35px"});
    });

    $(".input2").focus(function (e) { 
        $(".hr2").css("background-color", "blue");
        $(".input2").css("padding-left", "50px");
        $(".i2").css({"color":"blue","left":"20px"});
    });

    $(".input2").focusout(function (e) { 
        $(".hr2").css("background-color", "#ccc7c7");
        $(".input2").css("padding-left", "65px");
        $(".i2").css({"color":"gray","left":"35px"});
    });
});