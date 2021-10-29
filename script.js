let button7Clicks = 0;


function changeButtons() {
  document.getElementById('button8').style.color = "blue";
  document.getElementById("button8").style.fontSize = "20px";
  button7Clicks = button7Clicks + 1;
  if (button7Clicks > 1 ) {
    document.getElementById("button8").innerHTML = "*ANGRY BUTTON NOISE*";
    document.getElementById("button8").style.width = "90px";
  }
}

function displayPrompt() {
  let  answer = prompt("Name your favorite button so far!");

  document.getElementById("answer").innerHTML = "You like " + answer + " ?";
}


function scream() {
  var audio = new Audio("ohmygah.mp3");
  audio.play();
}

let x = 1;




function scaryFunction() {
  document.body.style.background='#b30e0b'
  var audio = new Audio('Scream.mp3');
  audio.volume = 0.1; //you're welcome
  audio.play();

}

var handX=0
var handY=0

function handSpin() {
  handX = Math.sin(Date.now() * 0.003) * 80 - 170
  handY = Math.cos(Date.now() * 0.003) * 80 - 60
  document.getElementById('Hand').style.left=handX + "px";
  document.getElementById('Hand').style.top=handY + "px";
}

var drakeFeeling = 0
var drakeColor = 0

function drake() {
  if (drakeFeeling == 0 && drakeColor == 0) {
    document.getElementById('drake').src = 'AJimages/drake1.png'
  }
  if (drakeFeeling == 1 && drakeColor == 0) {
    document.getElementById('drake').src = 'AJimages/drake2.png'
    feeling = 1;
  }
  if (drakeFeeling == 0 && drakeColor == 1) {
    document.getElementById('drake').src = 'AJimages/drake3.png'
  }
  if (drakeFeeling == 1 && drakeColor == 1) {
    document.getElementById('drake').src = 'AJimages/drake4.png'
  }
}


setInterval(function(){handSpin()}, 1);
setInterval(function(){drake()}, 1);
