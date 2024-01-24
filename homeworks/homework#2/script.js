//  :(year - 4)%12. Posible values : 0- rat; 1 - ox; 2 -tiger; 3 - rabbit; 4-
// dragon; 5- snake;6-horse;7-goat;8-monkey; 9-rooster;10- dog; 11-pig;

var input = prompt("Upisi godinu rodjenja u formatu od 4 cifre(1986)");
var year = parseInt(input);
// console.log(year);
var chineseZodiak = (year - 4) % 12;

var signs = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

function calcSign() {
  for (let i = 0; i <= signs.length; i++) {
    if (i === chineseZodiak) {
      console.log(signs[i]);
    }
  }
}
calcSign();

// switch (chineseZodiak) {
//   case 0:
//     yourSign = "Rat";
//     break;
//   case 1:
//     yourSign = "Ox";
//     break;
//   case 2:
//     yourSign = "Tiger";
//     break;
//   case 3:
//     yourSign = "Rabbit";
//     break;
//   case 4:
//     yourSign = "Dragon";
//     break;
//   case 4:
//     yourSign = "Snake";
//     break;
//   case 6:
//     yourSign = "Horse";
//     break;
//   case 7:
//     yourSign = "Goat";
//     break;
//   case 8:
//     yourSign = "Monkey";
//     break;
//   case 9:
//     yourSign = "Roster";
//     break;
//   case 10:
//     yourSign = "Dog";
//     break;
//   case 11:
//     yourSign = "Pig";
//     break;
//   default:
//     yourSign = "Unknown year. Write valid year of your birth!";
// }

// console.log(`Your Chinese Zodiak sign is ${yourSign}.`);
