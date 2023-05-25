class Calculator {
  add(a, b) {
    return a + b;
  }
  subract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      throw new Error("undefined");
    }
    return a / b;
  }
}
  
const calculate = new Calculator();
  
module.exports = calculate;