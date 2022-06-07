// SELECT ALL BUTTONS/KEY
// let allBtn = document.querySelectorAll('.btn');
let numBtn = document.querySelectorAll(".num-key");
let oprBtn = document.querySelectorAll(".op-key");
let backSpaceButton = document.querySelector(".backspace");
let clearBtn = document.querySelector(".clear-btn");
let calcScreen = document.querySelector(".calc-screen");
let displayScreen = document.querySelector(".display-screen");
let resultScreen = document.querySelector(".result-screen");

let num1Array = [];
let num2Array = [];
let num1 = "";
let num2 = "";
let var1 = 0;
let var2 = 0;
let result = "";
let displayArray = [];

displayScreen.onchange = () => {
  let displayScreenChar = displayScreen.textContent;
  let displayScreenCharLength = displayScreenChar.length;
  console.log(displayScreenCharLength);
};

for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].setAttribute("onclick", "NumberClicked(this)");
}

function NumberClicked(num) {
  displayArray.push(num.textContent);
  displayScreen.textContent = displayArray.join("");
  if (num1 == "") {
    num1Array.push(num.textContent);
    console.log(num1Array);
    // console.log(num1);
  } else {
    num2Array.push(num.textContent);
    num2 = num2Array.join("");
    var2 = parseFloat(num2);
    result = Operation(var1, var2, oprSign);
    resultScreen.textContent = result;
    // console.log(var1 + ":" + var2);
  }
}

for (let i = 0; i < oprBtn.length; i++) {
  oprBtn[i].setAttribute("onclick", "OperatorClicked(this)");
}

let oprId = "";
let oprSign = "";
function OperatorClicked(opr) {
  displayScreen.textContent += opr.textContent;
  oprSign = opr.textContent;
  if (displayScreen.textContent != "") {
    displayArray.push(opr.textContent);
    displayScreen.textContent = displayArray.join("");
    if (result == "") {
      num1 = num1Array.join("");
      var1 = parseFloat(num1);
      // console.log(typeof(num1));
    } else {
      var1 = result;
      num2Array = [];
      num2 = "";
      // console.log(var1 + ":" + var2);
      // num2 = num2Array.join('');
    }
  }
  oprId = opr.id;
  console.log(oprId);
}

function Operation(operand1, operand2, operator) {
  let result = 0;
  switch (oprId) {
    case "plusBtn":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "minusBtn":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "timesBtn":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case "divideBtn":
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = "Invalid Operation";
  }
  return result;
}

backSpaceButton.onclick = () => {
  displayArray.pop();
  displayScreen.textContent = displayArray.join("");
  if (num1 == "") {
    num1Array.pop();
  } else {
    num2Array.pop();
    if (num2Array.length == 0) {
      var2 = 0;
    } else {
      num2 = num2Array.join("");
      var2 = parseFloat(num2);
      console.log(num2Array);
      console.log(var1 + " : " + var2);
    }
    result = Operation(var1, var2, oprSign);
    resultScreen.textContent = result;
    // if(num2Array = []) {
    //   var2 = 0;
    //   result = Operation(var1, var2, oprSign);
    //   resultScreen.textContent = result;
    // } else {
    //   console.log(num2Array);
    //   console.log(var1 + " : " + var2);
    //   num2 = num2Array.join('');
    //   var2 = parseFloat(num2);
    //   result = Operation(var1, var2, oprSign);
    //   resultScreen.textContent = result;
    // }
  }
  // console.log(num1Array);
  // console.log(num2Array);
};

clearBtn.onclick = () => {
  displayArray = [];
  displayScreen.textContent = "";
  resultScreen.textContent = "";
  num1Array = [];
  num2Array = [];
  num1 = "";
  num2 = "";
  result = "";
};

// DUMP FOR LATER OR FOREVER
// for(let i = 0; i < numBtn.length; i++) {
//   numBtn[i].addEventListener('click', () => {
//     if(var1 == 0) {
//       // console.log(numBtn[i].textContent);
//       num1 += numBtn[i].textContent;
//       displayScreen.textContent += numBtn[i].textContent;
//       getLastChar()
//     } else {
//       num2 += numBtn[i].textContent;
//       var2 = num2;
//       displayScreen.textContent += numBtn[i].textContent;
//       result = BasicOperate(var1, var2, opr1);
//       // console.log("var1: " + var1 + " " + "var2: " + var2);
//       resultScreen.textContent = result;
//     }
//   })
// }

// let equalBtn = document.querySelector('.equal-key');

// equalBtn.onclick = () => {
//   // let result = BasicOperate(5, 9, "+");
//   // // console.log(typeof(result));
//   // resultScreen.textContent = result;
// }

// let operator = ["+", "-", "&#215", "&#247"];

// function BasicOperate(operand1, operand2, operator) {
//   let result = 0;
//   switch (oprId) {
//     case "plusBtn":
//       result = parseFloat(operand1) + parseFloat(operand2);
//       break;
//     case "minusBtn":
//       result = parseFloat(operand1) - parseFloat(operand2);
//       break;
//     case "timesBtn":
//       result = parseFloat(operand1) * parseFloat(operand2);
//       break;
//     case "divideBtn":
//       result = parseFloat(operand1) / parseFloat(operand2);
//       break;
//     default:
//       result = "Invalid Operation";
//   }
//   return result;
// }

// function getLastChar() {
//   displayScreenText = displayScreen.textContent;
//   lengthOfChar = displayScreenText.length;
//   // let lastTextOnScreen = displayScreenText.charAt(displayScreenText.length - 1);
//   // if(lastTextOnScreen == "+") {
//   //   // displayScreenText.charAt(displayScreenText.length - 1) = oprBtn[i].textContent;
//   // }
//   console.log(lengthOfChar);
// }

// displayScreen.onchange = () => {
//   getLastChar();
// }

// let opr1 = "";
// let oprId = "";
// for(let i = 0; i < oprBtn.length; i++) {
//   oprBtn[i].addEventListener('click', () => {
//     if(displayScreen.textContent != "") {
//         if(result == "") {
//           var1 = num1;
//           // console.log(var1);
//           // console.log(oprId);
//           oprId = oprBtn[i].id;
//           opr1 = oprBtn[i].textContent;
//           displayScreen.textContent += opr1;
//         } else {
//           num2 = "";
//           var1 = result;
//           opr1 = oprBtn[i].textContent;
//           displayScreen.textContent += opr1;
//           oprId = oprBtn[i].id;
//           // console.log(oprId);
//           // console.log("var1: " + var1 + " " + "var2: " + var2);
//         }
//         console.log(displayScreenText.length);
//     }
//   })
// }

// backSpaceButton.onclick = () => {
//   // alert('backed');
// }

// clearBtn.onclick = () => {
//   displayScreen.textContent = "";
//   num1 = "";
//   num2 = "";
//   var1 = "";
//   var2 = "";
//   result = "";
//   resultScreen.textContent = "";
// }

// window.onload = () => {

// }
