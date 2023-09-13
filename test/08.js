function oddsums(n) {
  let total = 0,
    result = [];
  for (let x = 1; x <= n; x++) {
    let odd = 2 * x - 1;
    total += odd;
    result.push(total);
  }
  return result;
}

console.log(oddsums(5));
