var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var resImage1 = "images/" + "dice" + randomNumber1 + ".png";
var resImage2 = "images/" + "dice" + randomNumber2 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", resImage1);
document.getElementsByClassName("img2")[0].setAttribute("src", resImage2);
if(randomNumber1>randomNumber2)
{
    document.getElementById("result").innerHTML="🚩Player 1 is the winner";
}
else if(randomNumber2>randomNumber1)
{
    document.getElementById("result").innerHTML="🚩Player 2 is the winner";
}
else
{
    document.getElementById("result").innerHTML="😥It's a Draw!!";
}