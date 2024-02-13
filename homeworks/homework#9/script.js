//1.CREATE A GREETING APP WITH JQUERY
let input = $(".name");
let button1 = $(".btn1");
let h3 = $("h3");

button1.on("click", function () {
  let h1 = h3.after(`<h1>Hallo there, ${input.val()}</h1>`);
});
//2.Create a header generator

let textHeader = $(".text-input");
let textColor = $(".color-input");
let button2 = $(".btn2");
// button.css("background", " red");

button2.on("click", function () {
  console.log(textHeader.val(), textColor.val());
  button2.after(`<h1>${textHeader.val()}</h1>`);
  $("h1").css("color", textColor.val());
});
