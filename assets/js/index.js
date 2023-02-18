function triangle(calBtn, inputBaseId, inputHeightId) {
  const calculateBtn = selectById(calBtn);
  calculateBtn.addEventListener("click", function () {
    const base = getValueByIdInput(inputBaseId);
    const height = getValueByIdInput(inputHeightId);
    const area = (0.5 * base * height).toFixed(2);
    if (!isNaN(area)) {
      setAreaCalculationList("Triangle", area);
    }
  });
}
triangle("triangle_btn", "triangle_base", "triangle_height");

function ellipse(calBtn, inputBaseId, inputHeightId) {
  const calculateBtn = selectById(calBtn);
  calculateBtn.addEventListener("click", function () {
    const base = getValueByIdInput(inputBaseId);
    const height = getValueByIdInput(inputHeightId);
    const area = (3.14 * base * height).toFixed(2);
    if (!isNaN(area)) {
      setAreaCalculationList("Ellipse", area);
    }
  });
}

ellipse("ellipse_btn", "ellipse_a", "ellipse_b");

pentagon();
function pentagon() {
  calculation("pentagon_btn", "pentagon_p", "pentagon_b", "title", 0.5);
}

cardRandomColor();

