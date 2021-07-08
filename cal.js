let numberonscreen = document.getElementById("NumberOnScreen");
let firstnum;
let secondnum;
let result;
let afterresult;
let opteration;
let firstnumEntered = false;
let secondnumEntered = false;

function getnumber(num) {
  if (firstnumEntered === false) {
    if (firstnum === undefined) {
      firstnum = num;
    } else {
      firstnum = firstnum + num;
    }

    numberonscreen.innerText = firstnum;
  } else if (secondnumEntered === false) {
    if (secondnum === undefined) {
      secondnum = num;
    } else {
      secondnum = secondnum + num;
    }
    numberonscreen.innerText = secondnum;
  } else {
    if (afterresult === undefined) {
      afterresult = num;
    } else {
      afterresult = afterresult + num;
    }

    numberonscreen.innerText = afterresult;
  }
}

function getoper(operator) {
  if (firstnumEntered === false && firstnum !== undefined) {
    firstnumEntered = true;
  }

  opteration = operator;
}

function equal() {
  if (secondnumEntered === false && secondnum !== undefined) {
    secondnumEntered = true;
  }
  if (
    firstnum !== undefined &&
    secondnum !== undefined &&
    result === undefined
  ) {
    if (opteration === "+") {
      result = parseInt(firstnum) + parseInt(secondnum);
      numberonscreen.innerText = result;
    } else if (opteration === "-") {
      result = parseInt(firstnum) - parseInt(secondnum);
      numberonscreen.innerText = result;
    } else if (opteration === "*") {
      result = parseInt(firstnum) * parseInt(secondnum);
      numberonscreen.innerText = result;
    } else if (opteration === "/") {
      result = parseInt(firstnum) / parseInt(secondnum);
      numberonscreen.innerText = result;
    }
  } else if (result !== undefined) {
    if (opteration === "+") {
      result = parseInt(result) + parseInt(afterresult);
      numberonscreen.innerText = result;
    } else if (opteration === "-") {
      result = parseInt(result) - parseInt(afterresult);
      numberonscreen.innerText = result;
    } else if (opteration === "*") {
      result = parseInt(result) * parseInt(afterresult);
      numberonscreen.innerText = result;
    } else if (opteration === "/") {
      result = parseInt(result) / parseInt(afterresult);
      numberonscreen.innerText = result;
    }

    afterresult = undefined;
  }
}

function clearall() {
  firstnum = undefined;
  secondnum = undefined;
  result = undefined;
  afterresult = undefined;
  operator = "";
  numberonscreen.innerText = 0;
  firstnumEntered = false;
  secondnumEntered = false;
}
