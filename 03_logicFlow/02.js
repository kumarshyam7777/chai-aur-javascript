for (let i = 0; i <= 10; i++) {
  const elemet = i;
  if (elemet === 5) {
   // console.log("5 is mid number between 1 to 10");
  }
 // console.log(elemet);
}

for (let i = 1; i <= 10; i++) {
  //console.log(`outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`${i} * ${j} = ${i * j} `);
  }
}

const myArray = ["flash", "batman", "spiderman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
 // console.log(element);
}

for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    console.log("5 is pointed .....");
    break;
  }
  console.log(`Value of i is ${index}`);
}
