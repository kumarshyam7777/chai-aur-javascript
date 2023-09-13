function greet(yourGreet) {
  return function (name) {
    console.log(yourGreet + " " + name + " ");
  };
}

const salute = greet("Hello");

salute();

salute("LCO") 
