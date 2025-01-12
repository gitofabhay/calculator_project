function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;
 
    if (operation == "divide") {
        if (num2 != 0) {
            result = num1 / num2;
        } else {
            console.log('Cant divide by 0!!');
            result = "Error: Cannot divide by 0!";
        }
    } else if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    }
 
    document.getElementById("result").textContent = "Result: " + result;
 }
 