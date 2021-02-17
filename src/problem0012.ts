
function triangleNumber(nth: number): number {
    let tri = 1;
    for (let i=2; i < nth+1; ++i) {
        tri += i;
    }
    return tri;
}

function divisors(n: number): Array<number> {
    let divs: Array<number> = [];
    for (let i=1; i<=Math.sqrt(n); ++i) {
        if (n%i === 0) {
            if (divs.indexOf(i) === -1) {
                divs.push(i);
                if (n/i !== i) {
                    divs.push(n/i);
                }
            }
        }
    }
    return divs;
}

let numDivisors = 0;
let triNum = 0;

for (let j=1; numDivisors <= 500; ++j) {
    triNum = triangleNumber(j);
    numDivisors = divisors(triNum).length;
}

console.log(triNum);