


$('#green').on('click', function(){
    $('#green').fadeOut(100).fadeIn(100);
})



// $(document).ready(() => { 
// 	setInterval(() => { 
// 		$('#green').fadeIn(); 
// 		$('#green').fadeOut(); 
// 	}, 500); 
// }); 



var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour= buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 }
