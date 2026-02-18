export function checkVarsType(first, second, type) {
    if(typeof first === type && typeof second === type)
        return true;
    return false;
}

export function sumVars(first, second) {
    if(!checkVarsType(first, second, 'number')) {
        return 0;
    }
    return first + second;
}

export function multiplyVars(first, second) {
    if(!checkVarsType(first, second, 'number')) {
        return 0;
    }
    return first * second;
}

export function totalStrLength(first, second){
    if(!checkVarsType(first, second, 'string')) {
        return 0;
    }
    return first.length + second.length;
}

export function sumOfStrChars(str){
    if(typeof str !== 'string')
        return 0;
    let result = 0;
    for (let sNum of str){
        const iValue = parseInt(sNum);
        result += (iValue !== undefined && isNaN(iValue) === false) ? iValue : 0;
    }
    return result;
}

const a = 1;
const b = 2;
console.log(`${sumVars(a, b)}`);
console.log(`${multiplyVars(a, b)}`)

const str1 = "java";
const str2 = "script";
console.log(`${totalStrLength(str1, str2)}`)

const n = prompt("Enter number");
console.log(`${sumOfStrChars(n)}`);