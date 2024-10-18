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
// Function to calculate the result
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}