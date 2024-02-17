//1.
let name = "Chris";

name = "Chris Perez";

//2.
let a = 5;
let b = 7;

console.log(a == b);

//3.
let age = 22;

if (age > 18) {
  console.log("adult");
} else {
  console.log("minor");
}

//4.
let numbersTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayLength = numbersTen.length; //number of entries in an array

for (let i = 0; i < arrayLength; i++) {
  let currentValue = numbersTen[i];
  let isEven = currentValue % 2 == 0;
  if (isEven) {
    console.log(currentValue);
  }
}
//5.
let arrayNum = [4, 5, 8, 2, 35, 65, 13, 58];

let sum = 0;

let i = 0;

while (sum < 100) {
  let newCurrentValue = arrayNum[i];
  sum = sum + newCurrentValue;

  i++;
}
console.log(sum);

//6.
function calArea(width, height) {
  area = width * height
  return (area)
}
let areaOne = calArea(8,10)
console.log('The calculated area is: ', areaOne)
let areaTwo = calArea(9,1000)
console.log('The calculated area is: ', areaTwo)