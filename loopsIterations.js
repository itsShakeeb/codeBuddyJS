// level {2}

function fib(n) {
  let n1 = 0;
  let n2 = 1;
  let newNumber = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    n1 = n2;
    n2 = newNumber;
    newNumber = n1 + n2;
    sum += newNumber;
  }
  return sum;
}
let result = fib(6);
console.log(result);
