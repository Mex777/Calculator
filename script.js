const calculator = document.getElementById('calculator');
const input = document.getElementById('input');
let prevInput = 0;
let lastOperation = '+';

for (let i = 0; i < 3; ++i) {
  const row = document.createElement('div');
  row.className = 'row';
  for (let j = 0; j < 3; ++j) {
    const button = document.createElement('button');
    button.id = i * 3 + j + 1;
    button.textContent = i * 3 + j + 1;
    button.addEventListener('click', () => {
      input.textContent = Number(input.textContent) * 10 + Number(button.id);
    });
    row.appendChild(button);
  }

  calculator.appendChild(row);
}

const plus = document.createElement('button');
plus.textContent = '+';
plus.addEventListener('click', () => {
  prevInput = Number(input.textContent);
  input.textContent = 0;
  lastOperation = '+';
});

const difference = document.createElement('button');
difference.textContent = '-';
difference.addEventListener('click', () => {
  prevInput = Number(input.textContent);
  input.textContent = 0;
  lastOperation = '-';
});

const product = document.createElement('button');
product.textContent = '*';
product.addEventListener('click', () => {
  prevInput = Number(input.textContent);
  input.textContent = 0;
  lastOperation = '*';
});

const equal = document.createElement('button');
equal.textContent = '=';
equal.addEventListener('click', () => {
  if (lastOperation === '+') {
    prevInput += Number(input.textContent);
  } else if (lastOperation === '-') {
    prevInput -= Number(input.textContent);
  } else if (lastOperation === '*') {
    prevInput *= Number(input.textContent);
  }
  input.textContent = prevInput;
  lastOperation = '+';
  prevInput = 0;
});

const row = document.createElement('div');
row.appendChild(plus);
row.appendChild(difference);
row.appendChild(product);
row.appendChild(equal);
calculator.appendChild(row);
