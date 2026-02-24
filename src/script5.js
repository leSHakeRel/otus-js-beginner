console.log('task 5');
export function getArraySum(array) {
    return array.reduce(
        (accumulator, v) => accumulator += (typeof v === 'number' ? v : 0)
    );
}

let a = [1,2,3,4,5,6,7,8,9,10];
console.log(getArraySum(a));

export function doubleArrayElements(array){
    return Array.from(
        array.map( 
            v => typeof v === 'number' ? v*2 : typeof v === 'string' ? v.repeat(2) : v
        )
    );
}

console.log(doubleArrayElements(a));

export function getArrayMinMax(array){
    return [Math.min(...array), Math.max(...array)]
}

let [min, max] = getArrayMinMax(a);
console.log(
    'min:', min, 
    'max:', max
);