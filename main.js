// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function calculateResult() {
    try {
        let input = document.getElementById("display").value;
        // Replace 'x' with '*' for multiplication
        let correctedInput = input.replace(/x/g, '*');
        // Sanitize the input
        let sanitizedInput = correctedInput.replace(/[^0-9+\-*/().]/g, '');
        let result = eval(sanitizedInput);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}