//switch

// let userInput = prompt("Enter day of the week!");

// switch (userInput) {
//   case "Monday":
//     console.log("Srecan pocetak radne sedmice.");
//     break;
//   case "Tuesay":
//     console.log("Srecan pocetak radne sedmice.");
//     break;
//   case "Wednesday":
//     console.log("Srecan pocetak radne sedmice.");
//     break;
//   case "Thurstad":
//     console.log("Srecan pocetak radne sedmice.");
//     break;
//   case "Fredag":
//     console.log("Srecan pocetak radne sedmice.");
//     break;
//   case "Saturday":
//     console.log("Srecan pocetak radne sedmice.");
//     break;
//   case "Sunday":
//     console.log("Srecan pocetak radne sedmice.");
//     break;
//   default:
//     "Ne postoji taj dan u sedmici";
//     break;
// }
// //
// let subject = prompt("Choose a subject (JS, C#, HTML)");
// let subjectToLower = subject.toLowerCase();

// switch (subjectToLower) {
//   case "js":
//     alert("We are going to learn JS");
//     break;
//   case "c#":
//     alert("We are going to learn C#");
//     break;
//   case "html":
//     alert("We are going to learn HTML");
//   case "css":
//     alert("And CSS as well.");
//     break;
//   default:
//     alert("We are not learning anything.");
//     break;
// }
//crvena, plava, zuta, bijela

// let input = prompt("Enter favorite color!");
// switch (input) {
//   case "Red":
//     input = "red";
//     break;
//   case "Yellow":
//     input = "yellow";
//     break;
//   case "Blue":
//     input = "blue";
//     break;
//   case "Black":
//     input = "black";
//     break;
//   default:
//     "That color is not defined.";
// }

// console.log(`Your favorite color is ${input}.`);

//FUNCTIONS

// function greeting() {
//   console.log("Hello from function!");
// }
// greeting();
// greeting();

// var greeting = prompt("Enter you greeating");

// function sayHallo(greeting) {
//   console.log(greeting);
// }
// sayHallo(greeting);

// function myfunction(x, y) {
//   let myVar = x * y;
//   console.log(myVar);
// }

// myfunction(1, 3);
// myfunction(5, 7);

// function myfunction1(x, y, z) {
//   let rezultat1 = x * y;
//   let rezultat2 = x + z;
//   console.log(rezultat1, rezultat2);
// }
// myfunction1(1, 3, 6);

// function myFunction3(p1, p2) {
//   return p1 * p2;
// }
// myFunction3(2, 3);

//povrsina kruga p= r ** 2 * pi
// var pi = 3.14;

// function povrsinaKruga(r, pi) {
//   let p = r ** 2 * pi;
//   return p;
// }

// function povrsinaKruga2(r) {
//   let p = r ** 2 * Math.PI;
//   return p.toFixed(2);
// }
// console.log(povrsinaKruga2(2));

// //primjer #...
// let a = 9;
// let b = 3;

// function sum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// function substact(a, b) {
//   let subtact = a - b;
//   return subtact;
// }

// function multiplie(a, b) {
//   let multiplie = a * b;
//   return multiplie;
// }

// function devide(a, b) {
//   let devide = a / b;
//   return devide;
// }

// let suma = sum(a, b);
// let razlika = substact(a, b);
// console.log(suma, razlika, multiplie(a, b), devide(a, b));

//funk koja ce sa  a i b da izracuna da li je pravugaonik ili kvadrat?

// function x(a, b) {
//   let p;

//   if (a === b) {
//     p = a * b;
//     console.log("Povrsina kvadrata", p);
//   } else if (a != b) {
//     p = a * b;
//     console.log("Povrsina pravogaonika", p);
//   } else {
//     console.log("Nepoznata povrsina");
//   }
//   return p;
// }

// let result = x(2, 3);
// console.log(result);

/*
const x = (a, b) => {
  let p = a * b;

  if (a === b) {
    console.log("Površina kvadrata", p);
  } else if (a !== b) {
    console.log("Površina pravougaonika", p);
  } else {
    console.log("Nepoznata površina");
  }

  return p;
};

let result = x(2, 3);
console.log(result);

// Arrow funkcija
const multiplyArrow = (a, b) => a * b;

var povrsina = (a, b) => (p = a * b);

*/
// napisi ovo u strelica funkciji
// function y(a, b) {
//   let k;
//   let p;
//   if (a === b) {
//     k = a * b;
//   } else if (a > b || b > a) {
//     p = a * b;
//   }
//   return p, k;
// }

// let povrsina = y(2, 3);
// console.log(povrsina);

//scoop
/*
//foo nije dostupna van funkcije
function simpleFun() {
  let foo = 500;
  console.log(foo);
}

simpleFun();

//foo dostupno globalno yato sto smo je izvukli
function simpleFun1() {
  let foo = 600;
  console.log(foo);
  return foo;
}

simpleFun1();

let foo1 = simpleFun1();
console.log(foo1);

function simpleFun3() {
  a = 6; //auto globalna varijabla
}
simpleFun3();
console.log(a); //1
*/
//funkcija C to F

//F=9/5C + 32

let c = 23;

//1
function calcF(c) {
  var f = (9 / 5) * c + 32;
  return Math.round(f);
}

let f = calcF(c);
console.log(`Temperatura je ${f} fahrenheit-a`); //73 F

//2
function calcC(f) {
  var c1 = (5 / 9) * (f - 32);
  return Math.round(c1);
}

let c2 = calcC(f);
console.log(`Temperatura  je ${c2} celsius-a.`); //23

//calc age
let year = 1983;
const curDate = new Date();
let curYear = curDate.getFullYear();

function calcAge(year, curYear) {
  let age = curYear - year;
  return age;
}
let curAge = calcAge(year, curYear);
console.log(`You are ${curAge} years old.`);

//nizovi

const primes = [1, 2, 3, 4, 5];

const emptyArr = [];

let days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

console.log(days.length);

// days.shift brisu prvi element u nizu
console.log(days);
