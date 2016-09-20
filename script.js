
var $ = function (id) {
    return document.getElementById(id);
};

// initialize variables and arrarys
var game = ["FOOTBALL" , "SOCCER" , "BASEBALL" , "FOOSBALL" , "HOCKEY" , "TENNIS" , "CURLING" , "BOWLING" , "LACROSSE" ,
            "SAILING", "SKIING", "VOLLEYBALL"];
var pics = [ "images/img00.png" , "images/img01.png" , "images/img02.png" , "images/img03.png" , "images/img04.png" ,
    "images/img05.png" , "images/img06.png" , "images/img07.png" , "images/img08.png" , "images/img09.png" , "images/img10.png" ];

var choice = Math.floor(Math.random()*4);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft = 10;
var output = "" ;
var userLetter = "";
var wrong = 0;
var outCome = false;

var setup = function () {
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    $("game").innerHTML = output;
    output = "";
}


var submit = function () {
    output = "";
    outCome = false;
    userLetter = $("letter").value;
    $("letter").value = "";

    for (var c = 0; c < answer.length; c++) {
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            outCome = true;
        }
        output = output + display[c] + "";
    }
    $("game").innerHTML = output;
    output = "";

    // this controls the decrement of the guesses left number
    if (outCome == false)
    {
        wrong++;
        $("hang").src = pics[wrong];
        attemptsLeft--;
    }
    // checking to see if you win
    if (win < 1) {
        $("guesses").innerHTML = "YOU WIN!";
    }
    else if (attemptsLeft < 1) {
        $("guesses").innerHTML = "YOU LOSE!"
    }
    else {
        $("guesses").innerHTML = " You have " + attemptsLeft + " guesses left";
    }

}

window.onload = function ()
{
    setup();
    $("submit").onclick = submit;
}
