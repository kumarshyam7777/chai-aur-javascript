const instaUsers = {
  username: "shyam_das123",
  password: "9713533647Babudas@",
  numberOfReelsPost: 200,
  numberOfPhotosPost: 114,
};

const fbUsers = {
  email_Id: "kumar.shyam7777@gmail.com",
  password: "Babu123@",
  profilePics: 26,
  fbPosts: 150,
  friends: {
    mutualFriends: 45,
    allFriends: 700,
  },
};

// First Method JSON.parse(JSON.stringify()) when object don't have function that time it will work only
let facebookUsers = JSON.parse(JSON.stringify(fbUsers));
console.log(facebookUsers);

facebookUsers.friends.mutualFriends = 60;
facebookUsers.password = "Shyam123@";
console.log(" Facebook Users ", facebookUsers);
console.log(" FB Users ", fbUsers);
console.log(facebookUsers.friends.mutualFriends);

console.log(fbUsers.friends.mutualFriends);

const metaUsers = Object.assign({}, instaUsers, fbUsers);
//console.log(metaUsers);

let person = {
  firstName: "John",
  lastName: "Doe",
};

// Using spread operator ..
let person_2 = { ...person };

person_2.designation = "Testing Engineer";

console.log(person_2);
console.log(person);

const username = {
  firstName: "Babu",
  price: 799,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.firstName} and price is ${anyObject.price}`
  );
}

handleObject({ ...username }); // Spread Operator

const arr = [200, 400, 600, 800];

function handleArray(anyArray) {
  let sum = 0;
  for (let i = 0; i < anyArray.length; i++) {
    sum += parseInt(anyArray[i]);
  }
  return sum;
}

const arrayFunctionResult = handleArray(arr);
console.log(arrayFunctionResult);
