class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
    return this; // Returning this(class) allows method chaining
  }

  subtract(number) {
    this.result -= number;
    return this;
  }

  multiply(number) {
    this.result *= number;
    return this;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= number;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      let sanitizedExpression = "";
      for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== " ") {
          sanitizedExpression += expression[i];
        }
      }

      const validChars = "0123456789+-*/().";
      for (let i = 0; i < sanitizedExpression.length; i++) {
        if (!validChars.includes(sanitizedExpression[i])) {
          throw new Error("Invalid characters in expression");
        }
      }
      this.result = eval(sanitizedExpression);

      if (this.result == "Infinity") {
        throw new Error("Division by zero is not allowed");
      }

      return this.result;
    } catch (error) {
      throw new Error("Invalid expression: " + error.message);
    }
  }
}

module.exports = Calculator;
