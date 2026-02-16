{
    console.log('task 2');
    {
        const a = 1;
        const b = 2;
        console.log(`1. ${a>b ? a : a==b ? 'equal' : b}`);
    }

    export function getMonthName(monthStr){
        const month = parseInt(monthStr);
        let name = 'NOT VALID MONTH NUMBER';
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
            monthmonth - 1 < monthNames.length) {
            name = monthNames[month - 1];
        }

        return name;
    }

    {
        const monthNumStr = prompt('enter month number');

        getMonthName(monthNumStr);

        console.log(`${monthName}`);
    }

    export function checkCircleInSquare(circleArea, squareArea) {
        const s = Math.sqrt(squareArea);
        const d = 2 * Math.sqrt(circleArea / Math.PI);

        return d <= s ? true : false;
    }

    {
        const circle = 50;
        const square = 100;

        console.log(checkCircleInSquare(circle, square));
    }
}