const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("render method returns correct SVG string", () => {
    const triangle = new Triangle("red");
    expect(triangle.render()).toBe(
      '<polygon points="150,50 50,150 250,150" style="fill:red"/>'
    );
  });
});

describe("Circle", () => {
  test("render method returns correct SVG string", () => {
    const circle = new Circle("blue");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="50" style="fill:blue"/>'
    );
  });
});

describe("Square", () => {
  test("render method returns correct SVG string", () => {
    const square = new Square("green");
    expect(square.render()).toBe(
      '<rect x="100" y="50" width="100" height="100" style="fill:green"/>'
    );
  });
});
