class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="50" style="fill:${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="100" height="100" style="fill:${this.color}"/>`;
  }
}

module.exports = { Triangle, Circle, Square };
