var randomnumber1 = ((Math.random()) * 6) + 1  ;

randomnumber1 = Math.floor(randomnumber1)

console.log(randomnumber1)

// First dice

if (randomnumber1 ==1) {
    document.querySelector('.img1').src ='images/dice1.png';
}

else if (randomnumber1 ==2) {
    document.querySelector('.img1').src ='images/dice2.png';
}

else if (randomnumber1 ==3) {
    document.querySelector('.img1').src ='images/dice3.png';
}

else if (randomnumber1 ==4) {
    document.querySelector('.img1').src ='images/dice4.png';
}

else if (randomnumber1 ==5) {
    document.querySelector('.img1').src ='images/dice5.png';
}

else if (randomnumber1 ==6) {
    document.querySelector('.img1').src ='images/dice6.png';
}



// Second dice
var randomnumber2 = ((Math.random()) * 6) + 1  ;

randomnumber2 = Math.floor(randomnumber2)

console.log(randomnumber2)



if (randomnumber2 ==1) {
    document.querySelector('.img2').src ='images/dice1.png';
}

else if (randomnumber2 ==2) {
    document.querySelector('.img2').src ='images/dice2.png';
}

else if (randomnumber2 ==3) {
    document.querySelector('.img2').src ='images/dice3.png';
}

else if (randomnumber2 ==4) {
    document.querySelector('.img2').src ='images/dice4.png';
}

else if (randomnumber2 ==5) {
    document.querySelector('.img2').src ='images/dice5.png';
}

else if (randomnumber2 ==6) {
    document.querySelector('.img2').src ='images/dice6.png';
}

 
// Heading

if (randomnumber1 > randomnumber2){
    document.querySelector('h1').textContent = "Player 1 wins!"
}

else if (randomnumber1 < randomnumber2){
    document.querySelector('h1').textContent = "Player 2 wins!"
}

else {
    document.querySelector('h1').textContent = "Draw!"
}