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

function calculateResult() {
    try {
        // eval 是一个简单的计算函数
        display.value = eval(display.value);
    } catch (error) {
        display.value = "错误";
    }
}

// 开根号函数
function calculateSqrt() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(eval(display.value));
}

// 阶乘函数
function calculateFactorial() {
    let display = document.getElementById('display');
    let n = parseInt(eval(display.value));
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    display.value = result;
}

// 平方函数
function calculatePower() {
    let display = document.getElementById('display');
    display.value = Math.pow(eval(display.value), 2);
}

// 立方函数
function calculatePower3() {
    let display = document.getElementById('display');
    display.value = Math.pow(eval(display.value), 3);
}