$('h1').addClass('big-title margin')

// $('button').text("Don't click me");


// $('h1').click(function(){
//     $('h1').css('color', 'red')
// })


// $('button').click(function(){
//     $('h1').css('color', 'red')
// })

$(document).keypress(function(event){
//   console.log(event.key);
  $('h1').text(event.key);
})


$('h1').on('click', function(){
    $('h1').css('color', 'blue');
})