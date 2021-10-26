let button7Clicks = 0;


function changeButtons() {
  document.getElementById('button8').style.color = "red";
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

