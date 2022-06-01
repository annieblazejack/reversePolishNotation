const array = [1, 2, '+', 3, 4, '+', '*']
const array2 = [1, 2, '+']

function evalRPN(arr){
    const stack = [];
    for (let i = 0; i < arr.length; i++){
        let value = arr[i];
        //if value is a number, push it to stack
        //if value is operator, pop off previous two stack elements, 
        //evaluate operation, push evaluated value onto stack
        if (typeof value === 'number') {
            stack.push(value);
        } else if (typeof value === 'string') {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            if (value === '+'){
                stack.push(operand1 + operand2);
            } else if (value === '-') {
                stack.push(operand1 - operand2);
            } else if (value === '*') {
                stack.push(operand1 * operand2);
            } else if (value === '/') {
                stack.push(operand1 / operand2);
            }
        }
    }
    return stack[0];
}

console.log(evalRPN(array2) === 3, '1 + 2 = 3');
console.assert(evalRPN(array) === 21, '21 failed');

function parseRPN(string){
    //split string by space characters
    const stringArray = string.split(' ');
    //array.map returns operators unmodified, parses operands and returns them as numbers
    return stringArray.map(element => {
        if (element === '+' || element === '-' || element === '*' || element === '/'){
            return element
        } else {
            return parseFloat(element);
        }
    }) 
}
function compareArrays(array1, array2){
    if (array1.length !== array2.length){
        return false;
    }
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}
function parseEvalRPN(string){
    const parsed = parseRPN(string); // an array
    return evalRPN(parsed); // a number
}

//tests
console.assert(parseEvalRPN('1 2 +') === 3);
console.assert(parseEvalRPN('1 2 + 3 4 + *') === 21);
