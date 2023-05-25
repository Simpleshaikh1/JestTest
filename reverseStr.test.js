const reverseStr = require("./reverseStr");

describe("reverseString", () => {
  test("Should return the reverse of a string", () => {
    expect(reverseStr("correct!")).toBe("!tcerroc");
  });
});