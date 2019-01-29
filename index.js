// workspace
$(document).ready(function(){
    $("#butt1").click(function(){
        prob1();
    })
    $("#butt2").click(function(){
        prob2();
    })
    $("#butt3").click(function(){
        prob3();
    })


})

// functions
// problem 1
var prob1 = function(){

var days;
var years;

var minutes = $("#number1").val();

days = (minutes/1440);
years = (days/365);

$("#output1").text(minutes + " minutes equals " + days + " day(s) " + years + " year(s).").show();
}

// problem 2
var prob2 = function (){

var gratuity;
var total;


var subtotal = $("#number2").val();
var rate = $("#number3").val(); 

subtotal = parseInt(subtotal);
gratuity = parseInt(gratuity);

gratuity = (rate/subtotal);
total = subtotal + gratuity;

$("#output2").text( "Gratuity: " + gratuity + " Total: " + total + "$" );
}

// problem 3
var prob3 = function (){

var square;
var BMI;
var kg;
var m;

var weight = $("#number4").val();
var height = $("#number5").val();

m = (height * .0254);
square = Math.pow(m , 2);
kg = (weight * .45359237)
BMI = (kg / square);

$("#output3").text("BMI is " + BMI);
}

//problem 4
var prob4 = function (){
var hours;
var minutes;
var seconds;

var time = $("#number6").val();


}
