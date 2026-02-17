import { getMonthName, checkCircleInSquare } from "./script2.js";

describe("check month name", () => {
  it("is function", () => expect(typeof getMonthName).toBe("function"));
  it("is valid month number", () => expect(getMonthName(12)).toBe('December'));
  it("is default message for invalid parameter type", () => expect(getMonthName('number')).toBe('INVALID MONTH NUMBER'));
});

describe("check Circle In Square", () => {
  it("is function", () => expect(typeof checkCircleInSquare).toBe("function"));

  [
    ['is valid check result', 50, 100, true],
    ['is valid check result', 78, 78, false],
    ['is valid check result for undefined values', undefined, undefined, false],
  ].forEach(([testName, first, second, result]) => {
    it(testName, () => expect(checkCircleInSquare(first, second)).toBe(result))
  })
});
