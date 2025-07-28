let display = document.getElementById("display");
let errorBox = document.getElementById("min-display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function clearMinDisplay() {
  errorBox.innerHTML = "";
}

function calculate() {
  if (!display.value == "") {
    try {
      let result = eval(display.value);

      if (result === undefined) {
        display.value = "";
      } else {
        display.value = result;
      }
    } catch (e) {
      errorBox.innerHTML = "<p>Invaild Expression</p>";
      clearDisplay();
      setTimeout(() => {
        clearMinDisplay();
      }, 2000);
    }
  }
}
