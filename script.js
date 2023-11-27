$(".start-button").click(function() {
    $(".secondpage").show();
    $(".firstpage").hide();
});

$(".square").click(function() {
    $(".squarecake").show();
    $(".secondpage").hide();
});

$(".chocolate").click(function() {
  $(".flavorChocolate").show();
  $(".squarecake").hide();
});

$("#chocolatesyrup").dblclick(function() {
    $(".chocolateCake").show();
    $(".flavorChocolate").hide();
});

$(".strawberry").click(function() {
    $(".flavorStrawberry").show();
    $(".squarecake").hide();
});

$("#strawberrysyrup").dblclick(function() {
    $(".strawberryCake").show();
    $(".flavorStrawberry").hide();
});

$(".multi").click(function() {
    $(".secondpage").hide();
    $(".multiCake").show();
});

$(".oreo").click(function() {
    $(".multiCake").hide();
    $(".flavorOreo").show();
});

$("#oreos").dblclick(function() {
    $(".flavorOreo").hide();
    $(".oreoCake").show();
});

$(".vanilla").click(function() {
    $(".multiCake").hide();
    $(".flavorVanilla").show();
});

$("#vanilla").dblclick(function() {
   $(".flavorVanilla").hide();
   $(".vanillaCake").show();
});

$("#resetOreo").click(function() {
    $(".oreoCake").hide();
    $(".firstpage").show();
});

$(".resetVanilla").click(function() {
    $(".vanillaCake").hide();
    $(".firstpage").show();
});

$(".resetChocolate").click(function() {
    $(".chocolateCake").hide();
    $(".firstpage").show();
});

$(".resetStrawberry").click(function() {
    $(".strawberryCake").hide();
    $(".firstpage").show();
});


