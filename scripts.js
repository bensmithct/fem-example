//output the number of the selected key to the display
const input = document.querySelector(".calculator");
const output = document.querySelector(".display");
let last_number;
let go_on = false;
let operator = null;

//display the previously selected number
input.addEventListener("click", function (event) {
  if (
    event.target.innerText === "0" ||
    event.target.innerText === "1" ||
    event.target.innerText === "2" ||
    event.target.innerText === "3" ||
    event.target.innerText === "4" ||
    event.target.innerText === "5" ||
    event.target.innerText === "6" ||
    event.target.innerText === "7" ||
    event.target.innerText === "8" ||
    event.target.innerText === "9"
  ) {
    if (go_on === true) {
      if (output.innerText !== "0") {
        output.innerText = output.innerText + event.target.innerText;
      } else {
        output.innerText = "0";
      }
    } else {
      output.innerText = event.target.innerText;
    }
    go_on = true;
  } else if (event.target.innerText === "C") {
    output.innerText = 0;

    last_number = 0;
    go_on = false;
  } else if (event.target.innerText === "←") {
    if (output.innerText !== "0") {
      if (output.innerText.length > 1) {
        output.innerText = output.innerText.substring(
          0,
          output.innerText.length - 1
        );
      } else {
        output.innerText = 0;

        go_on = false;
      }
    } else {
      output.innerText = 0;
      go_on = false;
    }
  } else if (event.target.innerText === "÷") {
    operator = "divide";
    last_number = output.innerText;
    go_on = false;
  } else if (event.target.innerText === "x") {
    operator = "multiply";
    last_number = output.innerText;
    go_on = false;
  } else if (event.target.innerText === "-") {
    operator = "subtract";
    last_number = output.innerText;
    go_on = false;
  } else if (event.target.innerText === "+") {
    operator = "add";
    last_number = output.innerText;
    go_on = false;
  } else if (event.target.innerText === "=") {
    if (operator === "divide") {
      output.innerText = parseInt(last_number) / parseInt(output.innerText);
    } else if (operator === "multiply") {
      output.innerText = parseInt(last_number) * parseInt(output.innerText);
    } else if (operator === "subtract") {
      output.innerText = parseInt(last_number) - parseInt(output.innerText);
    } else if (operator === "add") {
      output.innerText = parseInt(last_number) + parseInt(output.innerText);
    } else {
      output.innerText = "Error!";
      output.innerText = "0";
      last_number = "0";
    }
  } else {
    output.innerText = "Error!";
    output.innerText = "0";
    last_number = "0";
  }
});
