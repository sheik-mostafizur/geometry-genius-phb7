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

// create an item detail area calculation
function setAreaCalculationList(title, value) {
  // select parent item where all items appending
  const calculated_items = document.getElementById("calculated_items");

  // crate li item
  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  li.innerHTML = `<div class="ms-2 me-auto">
    <div class="fw-bold">${title}</div>
  </div>
  <div class="ms-2 me-auto">${value}cm<sup>2</sup></div>
  <button class="btn btn-primary btn-sm">Convert to m<sup>2</sup></button>`;

  // append li
  calculated_items.appendChild(li);
}

// calculation function argument requirement: (calBtn, first input value, second input value, title, formula value)

function calculation(calBtn, firstInputId, secondInputId, title, formulaValue) {
  const calculateBtn = selectById(calBtn);
  calculateBtn.addEventListener("click", function () {
    const base = getValueByIdInput(firstInputId);
    const height = getValueByIdInput(secondInputId);
    const area = (formulaValue * base * height).toFixed(2);
    if (!isNaN(area)) {
      setAreaCalculationList(title, area);
    }
  });
}

// select all card classes and set random background color
function cardRandomColor() {
  // selected all card
  const cards = document.querySelectorAll(".card");

  for (let card of cards) {
    card.addEventListener("mouseenter", function () {
      // random color generate
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      // set card backgroundColor
      card.style.backgroundColor = randomColor;
    });

    card.addEventListener("mouseleave", function () {
      // remove card backgroundColor
      card.style.backgroundColor = "";
    });
  }
}
