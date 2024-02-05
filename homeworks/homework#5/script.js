//#1

var arrayNums = [1, 2, 3, 8, 9];

var str1 = "even";
var str2 = "odd";

function findNumber(array, type) {
  if (type === "even") {
    return array.filter((number) => number % 2 === 0);
  } else if (type === "odd") {
    return array.filter((number) => number % 2 !== 0);
  } else {
    return "Nepoznat tip. Unesite 'even' ili 'odd'.";
  }
}
var result1 = findNumber(arrayNums, str1);
console.log(result1);

//#2

let array2 = ["Hello", "there", "students", "of", "SEDC", "!"];

function text(array) {
  return array.join(" ");
}

console.log(text(array2));

//#3

let array3 = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 > 0) {
    array3.push(i, " ");
  } else if (i % 2 == 0) {
    array3.push(i, "\n");
  }
}

console.log(array3);

//#4
console.log("zadatak 4");
let arr = [3, 5, 6, 15, 8, 11];

function minAddmax(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  let sum = max + min;
  return sum;
}

console.log(minAddmax(arr));

//5#

let arrFirst = ["Bob", "Jill"];
let arrLast = ["Gregory", "Wurtz"];

let fullNameArr = arrFirst.map(
  (element, index) => index + 1 + "." + element + " " + arrLast[index]
);
console.log(fullNameArr);
