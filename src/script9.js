export function isRightTriangle(a, b, c) {
    if(a && b && c) {
        const sides = [a, b, c].sort((x, y) => x - y);
        
        return Math.abs(Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2));
    } else {
        return false;
    }
}

export function getCircumference (radius) {
    if(typeof radius === 'number')
        return 2 * PI * radius;

    return 0;
}

export function getCircleArea(radius) {
    if(typeof radius === 'number')
        return Math.PI * Math.pow(radius, 2);

    return 0;
}

const  a = 3, b = 4, c = 5;

console.log(`is right triangle: ${isRightTriangle(a, b, c)}`);

const strR = prompt('Enter circle radius');

const R = parseInt(strR);
if(R){
    console.log(`circumference = ${getCircumference(R)}a\ncircle area = ${getCircleArea(R)}`);
} else {
    console.log(`WRONG TYPE OF RADIUS`);
}