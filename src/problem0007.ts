// https://projecteuler.net/problem=7
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// https://www.wolframalpha.com/input/?i=10001th+prime+number

const MAX_SIZE = 1000005;

function findPrime(nth: number): number {
  let sieve: boolean[] = Array.from({length: MAX_SIZE}, (_, __) => true);
  let count = 0;
  for (let p = 2; p < sieve.length; ++p) {
    if (sieve[p]) {
      count++;
      if (count === nth) {
        return p;
      }
      for (let i = p+p; i < sieve.length; i+=p) {
        sieve[i] = false;
      }
    }
  }
  return -1;
}

console.log(findPrime(10001)); // 104743