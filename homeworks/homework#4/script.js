//#1

let x;

function dataTypes(input) {
  console.log(typeof input);
}
dataTypes(["Sun", "Sat"]);
dataTypes(false);
dataTypes(2);
dataTypes("Suterday and Sunday");
dataTypes(x);

//#2

let humanAge;
let dogAge;

function calcDogAge(humanAge) {
  let dogAge = humanAge * 7;
  return dogAge;
}
console.log(calcDogAge(8));

function calcHumanAge(dogAge) {
  let humanAge = dogAge / 7;
  return humanAge;
}
console.log(calcHumanAge(56));

//#3

let words = ["are", "Saturday", "and", "weekend", "days", "Sunday", "."];

function tellStory(words) {
  words[0] = "Saturday";
  words[1] = "and";
  words[2] = "Sunday";
  words[3] = "are";
  words[4] = "weekend";
  words[5] = "days";
  words[6] = ".";
  return words;
}

let sentence = tellStory(words);
console.log(sentence);

//#4

let numbs = [5, 3, 2, 1, 6];

function suma(numbs) {
  let result = numbs[0] + numbs[1] + numbs[2] + numbs[3] + numbs[4];
  return result;
}
console.log(suma(numbs));

//#5
// 1.Napisati js funkciju za ATM koja vraca novac ili ispisuje da nemate dovoljno para ako iznos koji trazite bude veci nego sto imate.
// Hardkodujte iznos, funkciju uradite sa prompt().

/*
let inputMoney = prompt("Ubacite tacan iznos:");
let numMoney = parseInt(inputMoney);
let requestedValue = 37;

console.log(numMoney);

function atm(numMoney, requestedValue) {
  let change = numMoney - requestedValue;
  if (change < 0) {
    alert("Nemate potreban iznos.");
  } else if (change > 0) {
    alert(`Vas ostatak iznosa je ${change}`);
  } else {
    alert("Nesto nije u redu. Probajte ponovo.");
  }
}
let result = atm(numMoney, requestedValue);
console.log(result);
*/
// 2.Koristeci switch i prompt, ispisati koliko mesec ima dana kad korisnik unese naziv meseca.

let input = prompt("Write name of the month:");
monthInput = input.toLowerCase();

switch (monthInput) {
  case "january":
    console.log("Month has 31 day");
    break;
  case "february":
    console.log("Month has 28 day");
    break;
  case " march":
    console.log("Month has 31 day");
    break;
  case "april":
    console.log("Month has 30 day");
    break;
  case "may":
    console.log("Month has 31 day");
    break;
  case "june":
    console.log("Month has 30 day");
    break;
  case "july":
    console.log("Month has 31 day");
    break;
  case "august":
    console.log("Month has 31 day");
    break;
  case "september":
    console.log("Month has 30 day");
    break;
  case "october":
    console.log("Month has 31 day");
    break;
  case "november":
    console.log("Month has 30 day");
    break;
  case "december":
    console.log("Month has 31 day");
    break;
  default:
    console.log("Unknown name of the month.");
}
