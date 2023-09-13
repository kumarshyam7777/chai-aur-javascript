# Projects related to DOM

## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-upf6ju?file=index.html)

# Solution Code

## project 1

```javascript
console.log("Hello Project 1")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2 Solution code

```javascript
const form = document.querySelector('form');
// this will give you empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```






