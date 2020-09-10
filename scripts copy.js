//page was returning errors because window hadn't finished loading
window.onload = function () {
  //output the number of the selected key to the display
  const input = document.querySelector(".calculator");
  const output = document.querySelector(".display");
  let last_number;
  //let display_number = output.innerText;
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
          display_number = output.innerText;
        } else {
          output.innerText = "0";
        }
      } else {
        output.innerText = event.target.innerText;
        display_number = output.innerText;
      }
      go_on = true;
    } else if (event.target.innerText === "C") {
      display_number = 0;
      output.innerText = display_number;
      last_number = 0;
      go_on = false;
    } else if (event.target.innerText === "←") {
      if (display_number !== "0") {
        if (display_number.length > 1) {
          display_number = display_number.substring(
            0,
            display_number.length - 1
          );
          output.innerText = display_number;
        } else {
          display_number = 0;
          output.innerText = display_number;
          go_on = false;
        }
      } else {
        display_number = 0;
        go_on = false;
      }
    } else if (event.target.innerText === "÷") {
      operator = "divide";
      last_number = display_number;
      go_on = false;
    } else if (event.target.innerText === "x") {
      operator = "multiply";
      last_number = display_number;
      go_on = false;
    } else if (event.target.innerText === "-") {
      operator = "subtract";
      last_number = display_number;
      go_on = false;
    } else if (event.target.innerText === "+") {
      operator = "add";
      last_number = display_number;
      go_on = false;
    } else if (event.target.innerText === "=") {
      if (operator === "divide") {
        display_number = parseInt(last_number) / parseInt(display_number);
        output.innerText = display_number;
      } else if (operator === "multiply") {
        display_number = last_number * display_number;
        output.innerText = display_number;
      } else if (operator === "subtract") {
        display_number = last_number - display_number;
        output.innerText = display_number;
      } else if (operator === "add") {
        display_number = last_number + display_number;
        output.innerText = display_number;
      } else {
        output.innerText = "Error!";
        display_number = "0";
        last_number = "0";
      }
    } else {
      output.innerText = "Error!";
      display_number = "0";
      last_number = "0";
    }

    // output.innerText = event.target.innerText;
    //display_number = output.innerText;
    //console.log(display_number);
  });

  /*document.querySelector('.key').addEventListener('click', function(event){
    const output = event.target.InnerText;
      (event.target.innerText === "1"),
      (event.target.innerText === "2"),
      (event.target.innerText ==== "3"),
      (event.target.innerText = "4"),
      (event.target.innerText = "5"),
      (event.target.innerText = "6"),
      (event.target.innerText = "7"),
      (event.target.innerText = "8"),
      (event.target.innerText = "9"))

      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
}
)*/
};
