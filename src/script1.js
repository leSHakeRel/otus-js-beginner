{

    function checkIsNumbers(first, second, type) {
        if(typeof first === type && typeof second === type)
            return true;
        return false;
    }

    function sumVars(first, second) {
        if(!checkIsNumbers(first, second, 'number')) {
            return 0;
        }
        return first+second;
    }
    
    function multiplyVars(first, second) {
        if(!checkIsNumbers(first, second, 'number')) {
            return 0;
        }
        return first*second;
    }

    {
        const a = 1;
        const b = 2;
        console.log(`${sumVars(a, b)}`);
        console.log(`${multiplyVars(a, b)}`);

    }

    function totalStrLength(first, second){
        if(!checkIsNumbers(first, second, 'string')) {
            return 0;
        }
        return first.length + second.length;
    }

    {
        const str1 = "java";
        const str2 = "script";

        console.log(`${totalStrLength(str1, str2)}`);
    }

    function sumOfStrChars(str){
        if(typeof str !== 'string')
            return 0;
        let result = 0;
        for (l of str){
            result += parseInt(l);
        }
        return result;
    }

    {
        const n = prompt("Enter first number");
        console.log(`${sumOfStrChars(n)}`);
    }
}