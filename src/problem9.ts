// https://en.wikipedia.org/wiki/Pairing_function#Cantor_pairing_function
function cantor(x: number, y: number): number {
    return 0.5*(x+y)*(x+y+1)+y;
}

function cantorInv(z: number): [number, number] {
    const w: number = Math.floor((Math.sqrt(8*z+1)-1)/2);
    const t: number = (Math.pow(w,2)+w)/2;
    const y: number = z - t;
    const x: number = w - y;
    return [x, y];
}

// https://stackoverflow.com/a/17445322
function gcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function isOdd(n: number): boolean {
    return n % 2 !== 0;
}

function inInterval(n: number, l: number, u: number): boolean {
    // Returns true if n is in (l,u), false otherwise
    return (n > l) && (n < u);
}

const M: number = 1000;

for (let i: number = 0; i < 100000; ++i) {
    let [x, y] = cantorInv(i);
    if ((y > x) && (gcd(x,y) === 1) && isOdd(x+y) && inInterval(x/y,0,1)) {

        let a: number = Math.pow(y,2) - Math.pow(x,2);
        let b: number = 2*x*y;
        let c: number = Math.pow(x,2) + Math.pow(y,2);

        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        }

        let sum: number = a + b + c;
        let k: number = M / sum;

        if (k % 1 === 0) {
            a *= k;
            b *= k;
            c *= k;
            sum = a + b + c;
        }

        if (sum === M) {
            console.log(`${a} + ${b} + ${c} = ${M}`);
            console.log(`a*b*c = ${a*b*c}`);
            break;
        }
    }
}

