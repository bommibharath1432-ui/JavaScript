let trafficElement = document.getElementById("trafficimage");
let redSignal = true;
let yellowsignal = false;
let greenSignal = false;

setInterval(() => {
  SignalChange();
}, 3000);
function SignalChange() {
  if (redSignal) {
    yellowsignal = true;
    redSignal = false;
    trafficElement.src = "../images/yellow.png";
  } else if (yellowsignal) {
    yellowsignal = false;
    greenSignal = true;
    trafficElement.src = "../images/green.png";
  } else if (greenSignal) {
    greenSignal = false;
    redSignal = true;
    trafficElement.src = "../images/red.png";
  }
}
