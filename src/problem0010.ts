// https://projecteuler.net/problem=10
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

function primesBelow(n: number): Array<number> {
    let sieve: boolean[] = Array.from({length: n}, (_, __) => true);
    let primes: Array<number> = [];
    for (let p = 2; p < sieve.length; ++p) {
        if (sieve[p]) {
            primes.push(p);
            for (let i = p+p; i < sieve.length; i+=p) {
                sieve[i] = false;
            }
        }
    }
    return primes;
}

let sum: number = primesBelow(2000000).reduce((acc, cur) => acc + cur);
console.log(sum);