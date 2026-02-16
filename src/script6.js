export function diff(first, second) {
    if(first === second)
        return 0;
    if(isNaN(first) || isNaN(second))
        return 0;
    if((first === undefined || second === undefined) ||
     (typeof first === 'string' || typeof second === 'string'))
        return 0;
    return first > second ? first - second : second - first;
}

console.log(diff(5,6));

export function isWord(str) {
    if(typeof str !== 'string')
        return false;

    return str.split(' ').length > 1;
}

console.log(isWord('test phrase'));

export function pow(a, x) {
    if(typeof a === 'number' && typeof x === 'number') {
        return Math.pow(a, x);
    } else {
        return null;
    }
}

console.log(pow(2, 4));