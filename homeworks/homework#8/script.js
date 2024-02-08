// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

let animal = {
  name: "Cile",
  kind: "Cat",
  speak: function () {
    return `${this.kind} says : meow.`;
  },
};

console.log(animal.speak("Cat"));

// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book.
// The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let book = {
  title: "Jadnici",
  author: "Viktor Igo",
  readingStatus: false,

  readingStatusInfo: function () {
    return this.readingStatus === true
      ? `Already read ${this.title} by ${this.author}.`
      : `You still need to read ${this.title} by ${this.author}.`;
  },
};
let inputBook = prompt((book.title = "Enter book title for reading status!"));
console.log(book.readingStatusInfo(inputBook));
