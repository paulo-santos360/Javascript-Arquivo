let inputField = document.getElementById("input");

function appendToInput(value) {
  inputField.value += value;
}

function clearInput() {
  inputField.value = "";
}

function calculate() {
  try {
    const result = parseInt(inputField.value, 2);
    inputField.value = result.toString(2);
  } catch (error) {
    inputField.value = "Erro";
  }
}

