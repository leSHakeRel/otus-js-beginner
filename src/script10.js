const datePattern = /^(?:\d{2}[.\-]\d{2}[.\-]\d{4}|\d{4}[.\-]\d{2}[.\-]\d{2})$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//+7 456 789 10 11
//+7 (123) 456 78 99
//+7 (123) 456 7899
//+7-(123)-456-7899
//71234567899
//1234567899
const phonePattern = /^(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?(?:\d{4}|\d{2}[-.\s]?\d{2})$|^\d{10}$|^\+\d{11}$/;

export function getStringType(str){
    if (datePattern.test(input)) {
        return "date";
    } else if (emailPattern.test(input)) {
        return "email";
    } else if (phonePattern.test(input)) {
        return "phone";
    } else {
        return undefined;
    }
}

const testText = prompt("Let's guess type of text");
const textType = getStringType(testText);
console.log('you entered', textType === undefined ? 'unknown type' : textType);

