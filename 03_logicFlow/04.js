const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(`Number is  ${num}`);
// }

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(`${index}: ${element} `);
// }

// Map
const map = new Map();
map.set("name", "Jhon"); // set key value pair in the map object
map.set("name1", "Jane");
map.set("name2", "Jammy");
map.set("name3", "Jainy");
// console.log(map.get("name"));
// console.log(map.get("name1"));
// console.log(map.get("name2"));
// console.log(map.get("name3"));

const stateMap = new Map();
stateMap.set("J&K", "Jammu and Kashmir");
stateMap.set("HP", "Himachal Pradesh");
stateMap.set("DEL", "New Delhi");
stateMap.set("NDLS", "New Delhi");

// console.log(stateMap);

// for...of loop of Map
for (const [key, value] of stateMap) {
  // console.log(key + ":-" + value);
}

const languages = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
};

// for...in loop for iterating the javascript objects ..
for (let key in languages) {
  // console.log(`${key} is shortcut of ${languages[key]}`);
}

const programming = ["js", "ruby", "golang", "python", "java", "cpp"];

for (const key in programming) {
  // console.log(programming[key]);
}

// foreach Method in a new a way passing as a function reference as a Higher Order Function....

const codingFramework = [
  "Ruby on Rails",
  "Django",
  "Spring Boot",
  "React",
  "Angular",
];

function printMe(item) {
  //console.log(item);
}

codingFramework.forEach(printMe);

// forEach() method what value index and array takes inside the callBack functions as arguments ..

codingFramework.forEach((value, index, array) => {
  //console.log(`Value at Index:${index}:- ${value}`);
  // console.log("Array is:- ", array);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "ruby",
    languageFileName: "rb",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFileName + " :- " + item.languageName);
});
