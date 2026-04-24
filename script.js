const display = document.getElementById('display');
let justCalculated = false; // 标记是否刚完成计算

function appendToDisplay(input) {
    // 如果刚完成计算，且输入的是数字或小数点，则清空屏幕后再输入
    if (justCalculated && !isOperator(input)) {
        display.value = input;
        justCalculated = false;
    } else {
        // 小数点防重复：检查当前数字中是否已有小数点
        if (input === '.') {
            const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
            if (lastNumber.includes('.')) {
                return; // 已有小数点，不再输入
            }
        }
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
        const expression = display.value;
        // 检查是否为空
        if (expression.trim() === "") {
            return;
        }
        const result = eval(expression);
        
        // 检查除以零的情况（通过结果判断）
        if (!isFinite(result)) {
            display.value = "不能除以零";
        } else if (result > 1e15 || result < -1e15) {
            // 超大数值使用科学计数法
            display.value = result.toExponential(6);
        } else {
            display.value = result;
        }
        justCalculated = true;
    } catch (error) {
        // 捕获语法错误等情况
        if (error instanceof SyntaxError) {
            display.value = "语法错误";
        } else {
            display.value = "计算错误";
        }
        justCalculated = false;
    }
}

/**
 * 通用数学函数处理器
 * @param {string} funcType - 函数类型：'sqrt'|'factorial'|'power'|'power3'
 */
function applyMathFunction(funcType) {
    try {
        let expression = display.value.trim();
        if (expression === "") {
            expression = "0";
        }
        
        // 先计算表达式的值
        let value = eval(expression);
        let result;
        
        switch (funcType) {
            case 'sqrt':
                // 平方根：负数检查
                if (value < 0) {
                    display.value = "非法输入";
                    justCalculated = false;
                    return;
                }
                result = Math.sqrt(value);
                break;
                
            case 'factorial':
                // 阶乘：正整数检查
                if (!Number.isInteger(value) || value < 0) {
                    display.value = "非整数或负数";
                    justCalculated = false;
                    return;
                }
                // 阶乘计算（包含 0! = 1）
                result = 1;
                for (let i = 2; i <= value; i++) {
                    result *= i;
                }
                // 大阶乘超出范围提示
                if (!isFinite(result)) {
                    display.value = "数值溢出";
                    justCalculated = false;
                    return;
                }
                break;
                
            case 'power':
                // 平方
                result = Math.pow(value, 2);
                break;
                
            case 'power3':
                // 立方
                result = Math.pow(value, 3);
                break;
                
            default:
                display.value = "未知操作";
                justCalculated = false;
                return;
        }
        
        // 处理超大数值
        if (result > 1e15 || result < -1e15) {
            display.value = result.toExponential(6);
        } else {
            display.value = result;
        }
        justCalculated = true;
        
    } catch (error) {
        if (error instanceof SyntaxError) {
            display.value = "语法错误";
        } else {
            display.value = "计算错误";
        }
        justCalculated = false;
    }
}

// 开根号函数 - 现在调用通用函数
function calculateSqrt() {
    applyMathFunction('sqrt');
}

// 阶乘函数 - 现在调用通用函数
function calculateFactorial() {
    applyMathFunction('factorial');
}

// 平方函数 - 现在调用通用函数
function calculatePower() {
    applyMathFunction('power');
}

// 立方函数 - 现在调用通用函数
function calculatePower3() {
    applyMathFunction('power3');
}