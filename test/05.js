const nums = [0, 10, 20, 30];

nums.forEach((num) => {
  console.log(num);
  if (num > 10) {
    return null;
  }
});
