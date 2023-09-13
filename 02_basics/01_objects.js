let mySymbol = Symbol("key1");

let obj = {
  name: "Shyam",
  10: "Fisrt Division",
  "full Name": "Shyam Das",
  email: "kumar.shyam@gmail.com",
  [mySymbol]: "MySymbolkey1",
  codingLanguage: ["JavaScript", "Python"],
};

console.log(obj["full Name"]); // Bracket Notation
console.log(obj[10]); // Bracket Notation, but the key is in numeric value so inside bracket it is not a string
console.log(obj.email);

// const symbolKeys = Object.getOwnPropertySymbols(obj);

// // Iterate through the symbol keys and log the key and its value
// symbolKeys.forEach((symbolKey) => {
//   console.log(`Symbol Key: ${symbolKey.toString()}`);
//   console.log(`Value: ${obj[symbolKey]}`);
// });

// seal() - method prevents the modifictaion attributes of existing properties and prevents the addition of new properties.
// Object.seal(obj);

// obj.email = "shyam_das123@outlook.com"; // It is possible, we modify the existing properties, wehen Object.seal() method is used.

// console.log(obj.email);

// obj.address = "Dhanbad"; // It is not possible, we can't add any new properties.

obj.getFullName = function () {
  console.log(
    `Hello ${this["full Name"]} is learning JavaScript for the first time.`
  );
};


console.log(obj.getFullName())


