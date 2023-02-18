// get value form input and converted floating number with validation
function getValueByIdInput(elementId) {
  // select input element
  const element = document.getElementById(elementId);
  const elementValue = element.value;
  // convert input value to float
  const floatValue = parseFloat(elementValue);

  // input validation
  if (elementValue === "") {
    element.style.border = "1px solid red";
    return alert("Please provide a value");
  } else if (isNaN(floatValue) || floatValue <= 0) {
    element.style.border = "1px solid red";
    return alert("Please provide a positive number");
  }
  // return input value
  element.style.border = "1px solid transparent";
  return elementValue;
}

// select an element by id then return it
function selectById(elementId) {
  return document.getElementById(elementId);
}
