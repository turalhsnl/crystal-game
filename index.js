const randomnum=function () {
    return Math.floor(Math.random() * 100 + 40);
};

var cem=0;
var wins=0;
var losses=0;

function reset() {
    cem=0;
};

//compdan reqem 

$('#comp_choice').text(randomnum)

//click

$('.btn1').on('click',function (){
    var eded=$(this).data('deyer');
    cem += parseInt(eded);
    $('#point').text(cem);


//qelebe ve meglubiyyet

if(cem === parseInt(document.querySelector('#comp_choice').innerHTML)){
    wins++;
    $('#win_count').text(wins);
    $('#comp_choice').text(randomnum);
    $("#point").text(0);
    reset();
}else if(cem > parseInt(document.querySelector("#comp_choice").innerHTML)){
    losses++;
    $("#lose_count").text(losses);
    $('#comp_choice').text(randomnum);
    reset();
}else{
    $("#point").text(cem);
}


})




