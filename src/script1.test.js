import { checkVarsType, sumVars, multiplyVars, totalStrLength, sumOfStrChars } from "./script1.js";

describe("check variables type", () => {
  it("is function", () => expect(typeof checkVarsType).toBe("function"));

  [
    ['is number type', 1, 2, 'number', true],
    ['is one of variable number type', 1, '2', 'number', false],
    ['is string type', 'test', 'strings', 'string', true],
    ['is one of variable string type', 'test', undefined, 'string', false],
    ['is nothing expected type', [], undefined, 'string', false],
  ].forEach(([testName, first, second, varType, result]) => 
    it(testName, () => expect(checkVarsType(first, second, varType)).toBe(result))
  );
});

describe("check sum vars", () => {
  it("is function", () => expect(typeof sumVars).toBe("function"));

  [
    ['is valid sum', 1, 2, 3],
    ['is undefined value sumable', 1, undefined, 0],
    ['is both undefined value sumable', undefined, undefined, 0],
    ['is string value sumable', 1, '3', 0],
    ['is negative value sumable', 1, -3, -2],
  ].forEach(([testName, first, second, result]) => 
    it(testName, () => expect(sumVars(first, second)).toBe(result))
  );
});

describe("check multiply vars", () => {
  it("is function", () => expect(typeof multiplyVars).toBe("function"));

  [
    ['is valid multiply', 5, 5, 25],
    ['is undefined value multiply', 1, undefined, 0],
  ].forEach(([testName, first, second, result]) => 
    it(testName, () => expect(multiplyVars(first, second)).toBe(result))
  );
});

describe("check string length", () => {
  it("is function", () => expect(typeof totalStrLength).toBe("function"));

  [
    ['is valid count', '123', '7777', 7],
    ['is undefined value counted', '1', undefined, 0],
  ].forEach(([testName, first, second, result]) => 
    it(testName, () => expect(totalStrLength(first, second)).toBe(result))
  );
});

describe("check sum of string characters", () => {
  it("is function", () => expect(typeof sumOfStrChars).toBe("function"));

  [
    ['is valid sum', '789', 24],
    ['is undefined sums', undefined, 0],
    ['is not valid char missed by sum', '1a3', 4],
  ].forEach(([testName, first, result]) => 
    it(testName, () => expect(sumOfStrChars(first)).toBe(result))
  );
});