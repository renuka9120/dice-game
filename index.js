function myclick(){

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var source1="images/dice"+randomNumber1+".png";
var source2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",source1);
document.querySelector(".img2").setAttribute("src",source2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🥳Player1 won";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player2 won🥳";
}
else{
  document.querySelector("h1").innerHTML="Yo!! It's a tie🤩";
}

}
