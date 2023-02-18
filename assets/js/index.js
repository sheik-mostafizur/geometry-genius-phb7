function triangle(calBtn, inputBaseId, inputHeightId) {
  const calculateBtn = selectById(calBtn);
  calculateBtn.addEventListener("click", function () {
    const base = getValueByIdInput(inputBaseId);
    const height = getValueByIdInput(inputHeightId);
    const area = (0.5 * base * height).toFixed(2);
    console.log(area);
  });
}
console.log(triangle("triangle_btn", "triangle_base", "triangle_height"));

