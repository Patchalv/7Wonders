/*window.onload = function(){
    x = document.querySelector('#scoreCardDiv');

    var militaryOne = document.getElementById("miltaryPlayerOne");
    var armadaOne = document.getElementById("armadaPlayerOne");
    var coinOne = document.getElementById("coinPlayerOne");
    var wonderOne = document.getElementById("wonderPlayerOne");
    var blueOne = document.getElementById("bluePlayerOne");
    var yellowOne = document.getElementById("yellowPlayerOne");
    var greenOne = document.getElementById("greenPlayerOne");
    var purpleOne = document.getElementById("purplePlayerOne");
    var boatOne = document.getElementById("boatPlayerOne");
    var leaderOne = document.getElementById("leaderPlayerOne");
    var blackOne = document.getElementById("blackPlayerOne");
    
    but = document.getElementById("b");
    ScoreOne = document.getElementById("scorePlayerOne");

    but.addEventListener('click', function(){

        ScoreOne.innerHTML = militaryOne.value - - armadaOne.value - - coinOne.value - - wonderOne.value - - blueOne.value - - yellowOne.value - - greenOne.value - - purpleOne.value - - boatOne.value - - leaderOne.value - - blackOne.value;

    });



};
*/

let form = document.forms.wondersCalculator;

form.miltaryPlayerOne.oninput = calculate;
form.armadaPlayerOne.oninput = calculate;
form.coinPlayerOne.oninput = calculate;
form.wonderPlayerOne.oninput = calculate;
form.bluePlayerOne.oninput = calculate;
form.yellowPlayerOne.oninput = calculate;
form.greenPlayerOne.oninput = calculate;
form.purplePlayerOne.oninput = calculate;
form.boatPlayerOne.oninput = calculate;
form.leaderPlayerOne.oninput = calculate;
form.blackPlayerOne.oninput = calculate;

var militaryOne = document.getElementById("miltaryPlayerOne").value;
var armadaOne = document.getElementById("armadaPlayerOne").value;
var coinOne = document.getElementById("coinPlayerOne").value;
var wonderOne = document.getElementById("wonderPlayerOne").value;
var blueOne = document.getElementById("bluePlayerOne").value;
var yellowOne = document.getElementById("yellowPlayerOne").value;
var greenOne = document.getElementById("greenPlayerOne").value;
var purpleOne = document.getElementById("purplePlayerOne").value;
var boatOne = document.getElementById("boatPlayerOne").value;
var leaderOne = document.getElementById("leaderPlayerOne").value;
var blackOne = document.getElementById("blackPlayerOne").value;
var ScorePlayerOne = document.getElementById("scorePlayerOne");



function calculate () {
    result = militaryOne + armadaOne + coinOne + wonderOne + blueOne + yellowOne + greenOne + purpleOne + boatOne+ leaderOne + blackOne;
    
    document.getElementById('scorePlayerOne').innerHTML = result;

};

calculate();

function myFunction() {
    alert(result);
  }
  