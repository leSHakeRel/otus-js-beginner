const a = 1;
const b = 2;
console.log(`1. ${a>b ? a : a==b ? 'equal' : b}`);

export function getMonthName(monthStr){
    const month = parseInt(monthStr);
    let name = 'INVALID MONTH NUMBER';
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    if(month !== undefined &&
        month &&
        month - 1 < monthNames.length) {
        name = monthNames[month - 1];
    }
    return name;
}

export function checkCircleInSquare(circleArea, squareArea) {
    const isValidType = 
    (param) => {
        return param !== undefined ||
            typeof param === 'number' || 
            isNaN(param) === false;
    };

    if(!isValidType(circleArea) ||
        !isValidType(squareArea))
        return false;

    const s = Math.sqrt(squareArea);
    const d = 2 * Math.sqrt(circleArea / Math.PI);
    return d <= s ? true : false;
}

const monthNumStr = prompt('enter month number');
const monthName = getMonthName(monthNumStr);
console.log(`${monthName}`);

const circle = 50;
const square = 100;
console.log(checkCircleInSquare(circle, square));