const submitJS = document.getElementById("submit-html");
const resultJS = document.getElementById("result-html");
const input1JS = document.getElementById("input1-html");
const input2JS = document.getElementById("input2-html");
const plusJS = document.getElementById("plus-html");
const minusJS = document.getElementById("minus-html");
const multiplyJS = document.getElementById("multiply-html");
const divideJS = document.getElementById("divide-html");

let actionJS = "+";

//! functions
plusJS.onclick = function () {
  actionJS = "+";
};
minusJS.onclick = function () {
  actionJS = "-";
};
multiplyJS.onclick = function () {
  actionJS = "*";
};
divideJS.onclick = function () {
  actionJS = "/";
};

function resultPrint(_result) {
  if (_result < 0) {
    resultJS.style.color = "red";
  } else {
    resultJS.style.color = "green";
  }
  resultJS.textContent = _result;
}

function compute(_number1, _number2, _symbol) {
  const number1 = Number(_number1.value);
  const number2 = Number(_number2.value);
  return _symbol === "+"
    ? number1 + number2 // true
    : _symbol === "-"
    ? number1 - number2 // true
    : _symbol === "*"
    ? number1 * number2 // true
    : _symbol === "/" && number2 !== 0
    ? number1 / number2 // true
    : null;
}

submitJS.onclick = function () {
  const result = compute(input1JS, input2JS, actionJS);
  resultPrint(result);
};
