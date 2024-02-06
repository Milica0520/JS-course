//Zadatak 1:WEIGHT CALCULATOR IN CHICKENS(1 chicken = 0.5kg)

// var input = prompt("Write kilos: ");
// var kg = parseInt(input);

// function weightInChickens() {
//   var weight = kg / 0.5;
//   return (document.getElementById("result").textContent = weight);
// }
// weightInChickens();

//ZAdatak 2:Change the page with JavaScript, Change the text of all paragraphs and headers with javascript
/*
let paragraphs = document.getElementsByClassName("paragraph");
let firstPara = paragraphs[0];
firstPara.innerHTML = "I have changed first paragraph!";
let secondPara = paragraphs[1];
secondPara.innerHTML = "I have changed second paragraph,too!";
console.log(secondPara);

let header1 = document.getElementById("myTitle");
header1.innerHTML = "First Header changed.";

let divs = document.getElementsByTagName("div");
let lastDiv = divs[divs.length - 1];

let header2 = lastDiv.querySelector("h1");
console.log(header2);
header2.textContent = "Header h1 in last div changed!";
let header3 = lastDiv.querySelector("h3");
header3.innerHTML = "H3 in last div changed!";
*/
//zadatak 3

let el = document.getElementsByClassName("container")[0];

let myArr = [5, 8, 96, 3, 44, 8];

function printArr(array, el) {
  el.innerHTML = "";
  el.innerHTML += "<ol>";
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    el.innerHTML += `<li>${array[i]}</li>`;
    sum += array[i];
  }
  el.innerHTML += "</ol>";
  el.innerHTML += `<p>Suma je : ${sum}.</p>`;
}

printArr(myArr, el);

//Zadatak 4.BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let recipe = document.getElementsByClassName("recipe-container")[0];
console.log(recipe);

let recipeName = prompt("Write name of your recipe: "); //name of recipe
let headingRecipe = document.createElement("h3");
headingRecipe.textContent = recipeName;
recipe.appendChild(headingRecipe);

let input = prompt("How much ingrediens has your recipe?");
let ingrediensNum = parseInt(input);

let ingArr = new Array(ingrediensNum); //numer of rows

function printRecipe(array, element) {
  //
  element.innerHTML = "";
  element.innerHTML += "<ol>";
  for (let i = 0; i < array.length; i++) {
    element.innerHTML += `<li>${prompt(
      "Name of ingridiant and quantity:"
    )}</li>`;
  }
  element.innerHTML += "</ol>";
}

printRecipe(ingArr, recipe);
