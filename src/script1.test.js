import { checkVarsType, sumVars, multiplyVars, totalStrLength, sumOfStrChars } from "./script1.js";

describe("check variables type", () => {
  it("is function", () => expect(typeof checkVarsType).toBe("function"));
  it("is number type", () => expect(checkVarsType(1, 2, 'number')).toBe(true));
  it("is one of variable number type", () => expect(checkVarsType(1, '2', 'number')).toBe(false));

  it("is string type", () => expect(checkVarsType('test', 'strings', 'string')).toBe(true));
  it("is one of variable string type", () => expect(checkVarsType('test', undefined, 'string')).toBe(false));

  it("is nothing expected type", () => expect(checkVarsType([], undefined, 'string')).toBe(false));
});

describe("check sum vars", () => {
  it("is function", () => expect(typeof sumVars).toBe("function"));

  it("is valid sum", () => expect(sumVars(1, 2)).toBe(3));

  it("is undefined value sumable", () => expect(sumVars(1, undefined)).toBe(0));
  it("is both undefined value sumable", () => expect(sumVars(undefined, undefined)).toBe(0));

  it("is string value sumable", () => expect(sumVars(1, '3')).toBe(0));
  it("is negative value sumable", () => expect(sumVars(1, -3)).toBe(-2));
});

describe("check multiply vars", () => {
  it("is function", () => expect(typeof multiplyVars).toBe("function"));

  it("is valid multiply", () => expect(multiplyVars(5, 5)).toBe(25));

  it("is undefined value multiply", () => expect(multiplyVars(1, undefined)).toBe(0));
});

describe("check string length", () => {
  it("is function", () => expect(typeof totalStrLength).toBe("function"));

  it("is valid count", () => expect(totalStrLength('123', '7777')).toBe(7));

  it("is undefined value counted", () => expect(totalStrLength('1', undefined)).toBe(0));
});

describe("check sum of string characters", () => {
  it("is function", () => expect(typeof sumOfStrChars).toBe("function"));

  it("is valid sum", () => expect(sumOfStrChars('789')).toBe(24));

  it("is undefined sums", () => expect(sumOfStrChars(undefined)).toBe(0));

  it("is not valid char missed by sum", () => expect(sumOfStrChars('1a3')).toBe(4));
});