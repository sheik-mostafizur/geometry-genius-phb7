// redirect index to blog page
selectById("redirect_to_blog").addEventListener("click", function () {
  window.location = "./blog.html";
});

// set cards background color
cardRandomColor();

/*
 arguments have some stapes
1. calculate button
2. first value (base or other)
3. second value (height or other)
4. title (Triangle/Rectangle etc.)
5. formula value. if no a value available set 1
 */

// triangle
calculation(
  "triangle_btn",
  "triangle_base",
  "triangle_height",
  "Triangle",
  0.5
);

// rectangle
calculation(
  "rectangle_btn",
  "rectangle_width",
  "rectangle_length",
  "Rectangle",
  1
);

// parallelogram
calculation(
  "parallelogram_btn",
  "parallelogram_base",
  "parallelogram_height",
  "Parallelogram",
  1
);

// rhombus
calculation(
  "rhombus_btn",
  "rhombus_diagonal_1",
  "rhombus_diagonal_2",
  "Rhombus",
  0.5
);

// pentagon
calculation("pentagon_btn", "pentagon_p", "pentagon_b", "Pentagon", 0.5);

// ellipse
calculation("ellipse_btn", "ellipse_a", "ellipse_b", "Ellipse", 3.14);
