// Nullish Coolision operator . (??);

let someRandomValue;

someRandomValue = 5 ?? 10;

console.log(someRandomValue);

someRandomValue = null ?? 20;
console.log(someRandomValue);

// Empty object declaration and check the condtion by using Object.keys();

const obj = { one: 1 };

if (Object.keys(obj).length === 0) {
  console.log("The obj has no property value");
} else console.log("The object has some property ....");
