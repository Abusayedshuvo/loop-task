let sum = 0;
let num = 81;

while (num < 131) {
  if (num % 2 !== 0) {
    sum = sum + num;
  }
  num++;
}
console.log(sum);

let sum2 = 0;
let num2 = 206;

while (num2 < 311) {
  if (num2 % 2 === 0) {
    sum2 = sum2 + num2;
  }
  num2++;
}

console.log(sum2);

let num3 = 21;

while (num3 > 15) {
  console.log(num3);
  num3--;
}

console.log(num3);

let i = 1;
while (i <= 5) {
  console.log(`5 x ${i} = ${5 * i}`);
  i++;
}
