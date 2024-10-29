let currentInput = '0';

function updateScreen() {
    document.getElementById('screen').innerText = currentInput;
}

function inputNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateScreen();
}

function inputSymbol(symbol) {
    currentInput += symbol;
    updateScreen();
}

function clearScreen() {
    currentInput = '0';
    updateScreen();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = "Error";
    }
    updateScreen();
}