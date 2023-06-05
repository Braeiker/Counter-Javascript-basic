var counterNumber = 0;
var counterElement = document.getElementById("counter");

function increment() {
    counterNumber++
    counterElement.textContent = counterNumber;
    counterElement.style.color="#A7C957";

    if(counterNumber > 0){
        counterElement.textContent = "+" + counterNumber
    }
    if (counterNumber < 0){ 
        counterElement.textContent = counterNumber
    }
    if ( counterNumber === 0) {
        counterElement.style.color = "white";
    }
   
}

function decrement() {
    counterNumber--;
    counterElement.textContent = counterNumber; 
    counterElement.style.color="#BC4749";
    
}

