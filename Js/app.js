$(document).ready(function() {
    $('.btn1').on('click', function(){
        $('.prg').hide(400);
    });
    $('.btn2').on('click', function(){
        $('.prg').show(500);
    });

    $("#button_1").click(function(){
        $("#box1").fadeOut();
        $("#box2").fadeOut('slow');
        $("#box3").fadeOut(2000);
    });
    $("#button_2").click(function(){
        $("#box4").fadeToggle(500);
        $("#box5").fadeToggle(1000);
        $("#box6").fadeToggle(2000);
    });
    $("#button_3").click(function(){
        $("#box7").fadeTo("slow, 0.20");
        $("#box8").fadeTo("slow, 0.50");
        $("#box9").fadeTo("slow, 0.30");
    });
    
    $("#click1").click(function(){
        $('#show1').slideDown('slow')
    });
    $("#click2").click(function(){
        $('#show2').slideUp('slow')
    });
    $("#click3").click(function(){
        $('#show3').slideToggle('slow')
    });
    $("#button_4").click(function(){
        var div = $("section");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
    $("#button_5").click(function(){
        $('section').stop();
    });

    $('#txt').click(function(){
        $('#txt_p').append('<b>Hello Guys Ki obosta Sobar!!</b><br>');
    });
})