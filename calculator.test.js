const calculator = require("./calculator");

describe("Add method", () => {
  test("adds 5 + 2 to equal 7", () => {
    expect(calculator.add(5, 2)).toBe(7);
  });
  test("adds 20 to 20 equal 40", () => {
    expect(calculator.add(20, 20)).toBe(40);
  });
  test("adds 100 to 1000 equal 1100", () => {
    expect(calculator.add(100, 1000)).toBe(1100);
  });
});

describe("Subract method", () => {
  test("subract 3 from 20 to equal 17", () => {
    expect(calculator.subract(20, 3)).toBe(17);
  });
  test("subract 30 from 3 to equal -27", () => {
    expect(calculator.subract(3, 30)).toBe(-27);
  });
  test("subract 40 from 40 to equal 0", () => {
    expect(calculator.subract(40, 40)).toBe(0);
  });
});

describe("Divide method", () => {
  test("divide 12 by 3 to equal 4", () => {
    expect(calculator.divide(12, 3)).toBe(4);
  });
  test("divide 0 by any number to equal 0", () => {
    expect(calculator.divide(0, 9)).toBe(0);
  });
  test("divide any number by 0 get undefined", () => {
    expect(() => calculator.divide(3, 0)).toThrow("undefined");
  });
});

describe("Multiply method", () => {
  test("multiply 5 with 4 to equal 20", () => {
    expect(calculator.multiply(5, 4)).toBe(20);
  });
  test("multiply 5000 with 0 to equal 0", () => {
    expect(calculator.multiply(5000, 0)).toBe(0);
  });
});