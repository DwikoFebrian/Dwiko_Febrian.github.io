let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(parseFloat(displayValue));
    document.getElementById("display").value = displayValue;
}

function calculateSquare() {
    displayValue = Math.pow(parseFloat(displayValue), 2);
    document.getElementById("display").value = displayValue;
}

function undo() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}
