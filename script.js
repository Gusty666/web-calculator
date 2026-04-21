const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval 是一个简单的计算函数
        display.value = eval(display.value);
    } catch (error) {
        display.value = "错误";
    }
}