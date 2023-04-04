// Imports
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

// Questions to ask the user
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => input.length <= 3, // Ensures the input has 3 or fewer characters
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color (keyword or hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color (keyword or hexadecimal):",
  },
];

// Prompt the user to answer the questions
inquirer.prompt(questions).then((answers) => {
  // Create a variable to store the chosen shape object
  let shape;

  // Determine which shape the user chose and creates the object accordingly
  switch (answers.shape) {
    case "circle":
      shape = new Circle(answers.shapeColor);
      break;
    case "triangle":
      shape = new Triangle(answers.shapeColor);
      break;
    case "square":
      shape = new Square(answers.shapeColor);
      break;
  }

  // Generate the SVG code
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()} <!-- Add the chosen shape -->
      <text x="130" y="130" font-size="30" fill="${answers.textColor}">${
    answers.text
  }</text> <!-- Add the text -->
    </svg>
  `;

  // Write the SVG code to a logo.svg file
  fs.writeFileSync("logo.svg", svg);
  console.log("Generated logo.svg");
});
