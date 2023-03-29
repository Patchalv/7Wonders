let form = document.forms.wondersCalculator;

form.miltaryPlayerOne.oninput = calculatePlayerOne;
form.armadaPlayerOne.oninput = calculatePlayerOne;
form.coinPlayerOne.oninput = calculatePlayerOne;
form.wonderPlayerOne.oninput = calculatePlayerOne;
form.bluePlayerOne.oninput = calculatePlayerOne;
form.yellowPlayerOne.oninput = calculatePlayerOne;
form.greenPlayerOne.oninput = calculatePlayerOne;
form.purplePlayerOne.oninput = calculatePlayerOne;
form.boatPlayerOne.oninput = calculatePlayerOne;
form.leaderPlayerOne.oninput = calculatePlayerOne;
form.blackPlayerOne.oninput = calculatePlayerOne;

form.miltaryPlayerTwo.oninput = calculatePlayerTwo;
form.armadaPlayerTwo.oninput = calculatePlayerTwo;
form.coinPlayerTwo.oninput = calculatePlayerTwo;
form.wonderPlayerTwo.oninput = calculatePlayerTwo;
form.bluePlayerTwo.oninput = calculatePlayerTwo;
form.yellowPlayerTwo.oninput = calculatePlayerTwo;
form.greenPlayerTwo.oninput = calculatePlayerTwo;
form.purplePlayerTwo.oninput = calculatePlayerTwo;
form.boatPlayerTwo.oninput = calculatePlayerTwo;
form.leaderPlayerTwo.oninput = calculatePlayerTwo;
form.blackPlayerTwo.oninput = calculatePlayerTwo;

form.miltaryPlayerThree.oninput = calculatePlayerThree;
form.armadaPlayerThree.oninput = calculatePlayerThree;
form.coinPlayerThree.oninput = calculatePlayerThree;
form.wonderPlayerThree.oninput = calculatePlayerThree;
form.bluePlayerThree.oninput = calculatePlayerThree;
form.yellowPlayerThree.oninput = calculatePlayerThree;
form.greenPlayerThree.oninput = calculatePlayerThree;
form.purplePlayerThree.oninput = calculatePlayerThree;
form.boatPlayerThree.oninput = calculatePlayerThree;
form.leaderPlayerThree.oninput = calculatePlayerThree;
form.blackPlayerThree.oninput = calculatePlayerThree;

form.miltaryPlayerFour.oninput = calculatePlayerFour;
form.armadaPlayerFour.oninput = calculatePlayerFour;
form.coinPlayerFour.oninput = calculatePlayerFour;
form.wonderPlayerFour.oninput = calculatePlayerFour;
form.bluePlayerFour.oninput = calculatePlayerFour;
form.yellowPlayerFour.oninput = calculatePlayerFour;
form.greenPlayerFour.oninput = calculatePlayerFour;
form.purplePlayerFour.oninput = calculatePlayerFour;
form.boatPlayerFour.oninput = calculatePlayerFour;
form.leaderPlayerFour.oninput = calculatePlayerFour;
form.blackPlayerFour.oninput = calculatePlayerFour;

function calculatePlayerOne() {
  var militaryOne = +document.getElementById("miltaryPlayerOne").value;
  var armadaOne = +document.getElementById("armadaPlayerOne").value;
  var coinOne = +document.getElementById("coinPlayerOne").value;
  var wonderOne = +document.getElementById("wonderPlayerOne").value;
  var blueOne = +document.getElementById("bluePlayerOne").value;
  var yellowOne = +document.getElementById("yellowPlayerOne").value;
  var greenOne = +document.getElementById("greenPlayerOne").value;
  var purpleOne = +document.getElementById("purplePlayerOne").value;
  var boatOne = +document.getElementById("boatPlayerOne").value;
  var leaderOne = +document.getElementById("leaderPlayerOne").value;
  var blackOne = +document.getElementById("blackPlayerOne").value;
  var ScorePlayerOne = document.getElementById("scorePlayerOne");

  resultOne =
    militaryOne +
    armadaOne +
    coinOne +
    wonderOne +
    blueOne +
    yellowOne +
    greenOne +
    purpleOne +
    boatOne +
    leaderOne +
    blackOne;

  document.getElementById("scorePlayerOne").innerHTML = resultOne;
}

calculatePlayerOne();

function calculatePlayerTwo() {
    var militaryTwo = +document.getElementById("miltaryPlayerTwo").value;
    var armadaTwo = +document.getElementById("armadaPlayerTwo").value;
    var coinTwo = +document.getElementById("coinPlayerTwo").value;
    var wonderTwo = +document.getElementById("wonderPlayerTwo").value;
    var blueTwo = +document.getElementById("bluePlayerTwo").value;
    var yellowTwo = +document.getElementById("yellowPlayerTwo").value;
    var greenTwo = +document.getElementById("greenPlayerTwo").value;
    var purpleTwo = +document.getElementById("purplePlayerTwo").value;
    var boatTwo = +document.getElementById("boatPlayerTwo").value;
    var leaderTwo = +document.getElementById("leaderPlayerTwo").value;
    var blackTwo = +document.getElementById("blackPlayerTwo").value;
    var ScorePlayerTwo = document.getElementById("scorePlayerTwo");
  
    resultTwo =
      militaryTwo +
      armadaTwo +
      coinTwo +
      wonderTwo +
      blueTwo +
      yellowTwo +
      greenTwo +
      purpleTwo +
      boatTwo +
      leaderTwo +
      blackTwo;
  
    document.getElementById("scorePlayerTwo").innerHTML = resultTwo;
  }
  
  calculatePlayerTwo();
  
calculatePlayerOne();

function calculatePlayerThree() {
    var militaryThree = +document.getElementById("miltaryPlayerThree").value;
    var armadaThree = +document.getElementById("armadaPlayerThree").value;
    var coinThree = +document.getElementById("coinPlayerThree").value;
    var wonderThree = +document.getElementById("wonderPlayerThree").value;
    var blueThree = +document.getElementById("bluePlayerThree").value;
    var yellowThree = +document.getElementById("yellowPlayerThree").value;
    var greenThree = +document.getElementById("greenPlayerThree").value;
    var purpleThree = +document.getElementById("purplePlayerThree").value;
    var boatThree = +document.getElementById("boatPlayerThree").value;
    var leaderThree = +document.getElementById("leaderPlayerThree").value;
    var blackThree = +document.getElementById("blackPlayerThree").value;
    var ScorePlayerThree = document.getElementById("scorePlayerThree");
  
    resultThree =
      militaryThree +
      armadaThree +
      coinThree +
      wonderThree +
      blueThree +
      yellowThree +
      greenThree +
      purpleThree +
      boatThree +
      leaderThree +
      blackThree;
  
    document.getElementById("scorePlayerThree").innerHTML = resultThree;
  }
  
  calculatePlayerThree();

  
function calculatePlayerFour() {
    var militaryFour = +document.getElementById("miltaryPlayerFour").value;
    var armadaFour = +document.getElementById("armadaPlayerFour").value;
    var coinFour = +document.getElementById("coinPlayerFour").value;
    var wonderFour = +document.getElementById("wonderPlayerFour").value;
    var blueFour = +document.getElementById("bluePlayerFour").value;
    var yellowFour = +document.getElementById("yellowPlayerFour").value;
    var greenFour = +document.getElementById("greenPlayerFour").value;
    var purpleFour = +document.getElementById("purplePlayerFour").value;
    var boatFour = +document.getElementById("boatPlayerFour").value;
    var leaderFour = +document.getElementById("leaderPlayerFour").value;
    var blackFour = +document.getElementById("blackPlayerFour").value;
    var ScorePlayerFour = document.getElementById("scorePlayerFour");
  
    resultFour =
      militaryFour +
      armadaFour +
      coinFour +
      wonderFour +
      blueFour +
      yellowFour +
      greenFour +
      purpleFour +
      boatFour +
      leaderFour +
      blackFour;
  
    document.getElementById("scorePlayerFour").innerHTML = resultFour;
  }
  
  calculatePlayerFour();