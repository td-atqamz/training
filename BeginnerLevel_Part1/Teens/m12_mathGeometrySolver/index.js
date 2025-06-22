var area;
var circum;

function square(side) {
  area = side * side;
  circum = 4 * side;
  console.log("---Square-----");
  console.log(`Area : ${area} `);
  console.log(`Circumference : ${circum}`);
  alert(`Area : ${area} \nCircumference : ${circum}`);
}

function rect(width, height) {
  area = width * height;
  circum = 2 * (width + height);
  console.log("---Rectangle-----");
  console.log(`Area :  ${area} `);
  console.log(`Circumference : ${circum}`);
  alert(`Area : ${area} \nCircumference : ${circum}`);
}
