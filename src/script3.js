console.log("task 3.1");
let num1 = 50;
while(num1  <= 100) {
    console.log(`${num1}`);
    ++num1;
}

console.log("task 3.2");
const n1 = 7;
let n2 = 1;
while (n2 <= 10){
    console.log(`${n1} x ${n2} = ${n1*n2}`);
    ++n2;
}

console.log("task 3.3");
const num2 = prompt("Enter number");
let nInt = (parseInt(n));
let result = 0;
let count = 0;
for (const l of [...Array(++nInt).keys()]){
    if (l%2 !== 0){
        result += l;
        count++;
    }
}

console.log(`3. result = ${result/count}`);