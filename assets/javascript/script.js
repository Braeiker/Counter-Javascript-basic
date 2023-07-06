var counterNumber = 0;
var counterElement = document.createElement("p");
counterElement.id = "counter";
counterElement.textContent = counterNumber;

function increment() {
    counterNumber++;
    counterElement.textContent = counterNumber;
    counterElement.style.color = "#A7C957";

    if (counterNumber > 0) {
        counterElement.textContent = "+" + counterNumber;
    }
    if (counterNumber < 0) {
        counterElement.textContent = counterNumber;
    }
    if (counterNumber === 0) {
        counterElement.style.color = "white";
    }
}

function decrement() {
    counterNumber--;
    counterElement.textContent = counterNumber;
    counterElement.style.color = "#BC4749";
}

//BUTTON PLUS

var plusButton = document.createElement("button");
plusButton.textContent = "+";
plusButton.className = "buttonPlus";
plusButton.onclick = increment;
// BUTTON MINUS
var minusButton = document.createElement("button");
minusButton.textContent = "-";
minusButton.className = "buttonMinus";
minusButton.onclick = decrement;

var buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";
buttonContainer.appendChild(plusButton);
buttonContainer.appendChild(minusButton);

document.querySelector(".contenitore").appendChild(counterElement);
document.querySelector(".contenitore").appendChild(buttonContainer);
