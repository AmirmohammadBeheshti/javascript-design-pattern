interface Color {
    applyColor(): string;
  }
  
  class Red implements Color {
    applyColor(): string {
      return "Red";
    }
  }
  
  class Blue implements Color {
    applyColor(): string {
      return "Blue";
    }
  }
  
  // Abstraction
  abstract class Shape {
    protected color: Color;
  
    constructor(color: Color) {
      this.color = color;
    }
  
    abstract draw(): string;
  }
  
  class Circle extends Shape {
    draw(): string {
      return `Circle drawn in ${this.color.applyColor()}`;
    }
  }
  
  class Square extends Shape {
    draw(): string {
      return `Square drawn in ${this.color.applyColor()}`;
    }
  }
  
  // Client code
  const redCircle: Shape = new Circle(new Red());
  console.log(redCircle.draw()); 
  
  const blueSquare: Shape = new Square(new Blue());
  console.log(blueSquare.draw()); 
  
  class Green implements Color {
    applyColor(): string {
      return "Green";
    }
  }
  
  const greenCircle: Shape = new Circle(new Green());
  console.log(greenCircle.draw()); 
  