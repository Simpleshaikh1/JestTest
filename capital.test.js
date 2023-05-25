const capitalize = require("./capital");

describe("Capitalize", () => {
  test("Capitalize the string", () => {
    expect(capitalize("this")).toBe("This");
  });
});