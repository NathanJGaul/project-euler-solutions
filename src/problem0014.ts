// https://en.wikipedia.org/wiki/Collatz_conjecture

const nLimit = 1000000;
const nStart = 1;

let longestSequence: Array<number> = [];
let longestStart = nStart;
let newSequence: Array<number> = [];

for (let i = nStart; i < nLimit; i++) {
    if (longestSequence.indexOf(i) === -1) {
        let n = i;
        newSequence = [n];
        while (n !== 1) {
            if (n % 2 === 0) {
                n /= 2;
            } else {
                n = 3*n+1;
            }
            newSequence.push(n);
        }
        if (newSequence.length > longestSequence.length) {
            longestSequence = newSequence;
            longestStart = i;
        }
    }
}

console.log(`Length: ${longestSequence.length}`);
console.log(`Start: ${longestStart}`)