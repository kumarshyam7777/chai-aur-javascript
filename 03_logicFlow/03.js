const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr = 0;
while (arr < myArray.length) {
  if (myArray[arr] % 2 == 0) {
    console.log("Even number: " + myArray[arr]);
  } else {
    console.log("Odd Number:" + myArray[arr]);
  }
  arr++;
}
