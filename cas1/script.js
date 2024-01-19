//Zadaca

//Izracunati cenu 30 telefona ako je cena jednog telefona 119.95 dolara a taksa je 5%.

// var phonePrice = 119.95;
// var taxRate = 5;

// let taxPercentage = (taxRate * phonePrice) / 100;

// console.log(taxPercentage);

// var newPrice = phonePrice + taxPercentage;

// console.log(newPrice * 30); //3778.425

// //vjezbe
// var a = 5;
// var b = 2;

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(a, b);

// // varijable
// var nameF = "Milica";
// var pi = 3.14;
// var num = null;
// var check = true;
// var one = "A";
// var age = "40";

// console.log(typeof a);
// console.log(typeof num);
// console.log(typeof pi);
// console.log(typeof nameF);
// console.log(typeof check);
// console.log(typeof one);
// console.log(typeof age);

// var firstName = "Milica";
// var lastName = "Dujakovic";
// console.log(firstName, "Milica");
// console.log(lastName);
// console.log(age);
// console.log(typeof lastName);
// console.log(a++); //5-izvrsava dodavanje tek  na sledecoj liniji koda
// console.log(a); //6
// console.log(++a); //7
// console.log(a); //7

// var x = 6;
// var y = 2;

// // 1 feet = 0.3048 m

// var feet = 5;

// var m = feet * 0.3048;

// console.log(m);

// var duzina = 4;
// var sirina = 3;

// var p = duzina * sirina;
// console.log(p);

// //r na kvadrat pi

// var pi = 3.14;
// var r = 3;

// var p = r ** 2 * pi;
// var povrsina = Math.PI * r ** 2;
// console.log(p);
// console.log(povrsina);

// //cas 2

// var ime = "Milica";
// var prezime = "Dujakovic";

// var imeIprezime = ime + " " + prezime;
// console.log(imeIprezime);

// var a = 2 / "Djole";

// console.log(a);

// console.log(typeof a === "number");

// //logical operators

// var statusA = "open";
// var longitudeA = 44.56;
// var latitudeA = -32.45;

// logical AND
// logical OR || iznad entera
// logical NOT

// var input = prompt("Koliko para imate?");
// var numberInput = parseInt(input);
// if (numberInput == 0) {
//   console.log("Nadji posao!");
// } else if (numberInput > 0) {
//   console.log("Nije lose, bice bolje!");
// } else {
//   console.log("Greska!");
// }

//
let wage = 500;
let bonus = 0;

var input = prompt("Unesite rolu!");

if (input === "Senior") {
  wage = wage * 2.2;
} else if (input === "Medior") {
  wage = wage * 1.5;
} else if (input === "Junior") {
  wage = wage * 1.1;
} else {
  console.log("Ne postoji takva rola.");
}

console.log("Nova plata je  " + wage);
