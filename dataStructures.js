// level {2}

//q1
let a = [1, 3, 4, 6, 7, 8];
console.log(a.filter((i) => i % 2 !== 0));

//q2
let string = "Elie";

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let s = string.split("");
let upperCase = [];
let result = s.map((i) => {
  if (vowels.includes(i)) {
    upperCase.push(i.toUpperCase());
  } else {
    upperCase.push(i);
  }
  return upperCase;
});
console.log(result[0].join(""));

//q3
let b = [1, 3, 4, 6, 7, 8, 2, 5];
const sortedB = b.sort((a, b) => a - b);
console.log(sortedB[sortedB.length - 1]);
