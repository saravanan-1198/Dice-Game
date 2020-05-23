var randomNumber1=Math.floor(Math.random()*6)+1;
var str="images/";
if(randomNumber1===1){
  str=str+"dice1.png";
}else if(randomNumber1 === 2){
  str=str+"dice2.png";
}else if(randomNumber1 === 3){
  str=str+"dice3.png";
}else if(randomNumber1 === 4){
  str=str+"dice4.png";
}else if(randomNumber1 === 5){
  str=str+"dice5.png";
}else if(randomNumber1 === 6){
  str=str+"dice6.png";
}
document.querySelector("img.img1").setAttribute("src",str);
var randomNumber2=Math.floor(Math.random()*6)+1;
str="images/";
if(randomNumber2===1){
  str=str+"dice1.png";
}else if(randomNumber2 === 2){
  str=str+"dice2.png";
}else if(randomNumber2 === 3){
  str=str+"dice3.png";
}else if(randomNumber2 === 4){
  str=str+"dice4.png";
}else if(randomNumber2 === 5){
  str=str+"dice5.png";
}else if(randomNumber2 === 6){
  str=str+"dice6.png";
}
document.querySelector("img.img2").setAttribute("src",str);

var result="";
if(randomNumber1 === randomNumber2){
  result="Draw!";
  document.querySelector("h1").innerHTML=result;
}else if(randomNumber1 < randomNumber2){
  result="Player 2 Wins!🚩";
  document.querySelector("h1").innerHTML=result;
}else{
  result="🚩Player 1 Wins!";
  document.querySelector("h1").innerHTML=result;
}
