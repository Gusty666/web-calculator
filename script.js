const display = document.getElementById('display');
let justCalculated = false; // 标记是否刚完成计算

function appendToDisplay(input) {
    // 如果刚完成计算，且输入的是数字或小数点，则清空屏幕后再输入
    if (justCalculated && !isOperator(input)) {
        display.value = input;
        justCalculated = false;
    } else {
        display.value += input;
        justCalculated = false;
    }
}

// 判断是否为运算符
function isOperator(input) {
    return ['+', '-', '*', '/', '.'].includes(input);
}

function clearDisplay() {
    display.value = "";
    justCalculated = false;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    justCalculated = false;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        justCalculated = true;
    } catch (error) {
        display.value = "错误";
        justCalculated = false;
    }
}

// 开根号函数
function calculateSqrt() {
    try {
        let value = display.value.trim();
        if (value === "") {
            value = 0; // 默认为 0 的平方根
        }
        display.value = Math.sqrt(eval(value));
        justCalculated = true;
    } catch (error) {
        display.value = "错误";
    }
}

// 阶乘函数
function calculateFactorial() {
    try {
        let value = display.value.trim();
        let n = parseInt(eval(value));
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        display.value = result;
        justCalculated = true;
    } catch (error) {
        display.value = "错误";
    }
}

// 平方函数
function calculatePower() {
    try {
        let value = display.value.trim();
        display.value = Math.pow(eval(value), 2);
        justCalculated = true;
    } catch (error) {
        display.value = "错误";
    }
}

// 立方函数
function calculatePower3() {
    try {
        let value = display.value.trim();
        display.value = Math.pow(eval(value), 3);
        justCalculated = true;
    } catch (error) {
        display.value = "错误";
    }
}