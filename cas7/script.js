// const clickMeBtn = document.getElementById("clickMeBtn");

// const nameBtn = document.querySelector("#nameBtn"); //queruSelector radi sa razlicitim vrstama css selektora

// clickMeBtn.onclick = function () {
//   console.log("I was clicked!");
// };

// function sayHallo() {
//   console.log("Hallo world!");
// }

// function printWin() {
//   console.log("I'am the winner!");
// }

// clickMeBtn.onclick = printWin;

// function printFullname() {
//   console.log("Ispisi puno ime i prezime!");
// }

// nameBtn.addEventListener("click", printFullname);
// nameBtn.addEventListener("mouseover", sayHallo);
// nameBtn.addEventListener("mouseleave", printWin);

//unesi ime u input

const btn = document.getElementById("btn");
btn.addEventListener("click", sayHi);
function sayHi() {
  alert("Hi, Milica!");
}
//moja vjezbica

// function saveForm() {
//   const input = document.getElementById("name");
//   const fName = input.value;

//   const input2 = document.getElementById("lName");
//   const lastName = input2.value;

//   const input3 = document.getElementById("email");
//   const email = input3.value;

//   const input4 = document.getElementById("pass");
//   const pass = input4.value;

//   const savedInputs = document.getElementById("saved");
//   savedInputs.innerHTML = fName + "," + lastName + "," + email + "," + pass;
// }

// let myForm = document.getElementById("myForm");
// console.log(myForm);

// let inputElements = myForm.getElementsByTagName("input");
// console.log(inputElements[0].value);

// function fetchData() {
//   let myForm = document.getElementById("myForm");
//   let inputElements = myForm.getElementsByTagName("input");
//   let writeData = [];
//   for (let i = 0; i < inputElements.length; i++) {
//     let element = inputElements[i].value;
//     writeData.push(element);
//   }
//   let savedInputs = document.getElementById("saved");
//   savedInputs.innerHTML = writeData.join(", ");
// }

function Student(fname, lName, email, pass) {
  (this.fname = fname),
    (this.lName = lName),
    (this.email = email),
    (this.pass = pass);
}

function fetchData() {
  let writeData = new Student(
    fname.value,
    lName.value,
    email.value,
    pass.value
  );
  // console.log(writeData);
  let savedInputs = document.getElementById("saved");
  savedInputs.innerHTML =
    writeData.fname +
    "\n" +
    writeData.lName +
    "\n" +
    writeData.email +
    "\n" +
    writeData.pass;
}
