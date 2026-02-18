import { isRightTriangle, getCircumference, getCircleArea } from './script9.js';

describe('check is right triangle', () => {
    it("is function", () => expect(typeof isRightTriangle).toBe("function"));
    [
        ['1. is valid check result', 3, 4, 6, false],
        ['2. is valid check result', 5, 12, 13, true],
        ['3. is valid check result', 2, 3, 4, false],
        ['4. is valid check result', 2, undefined, 4, false],
    ].forEach(([testName, a, b, c, result]) => {
        it(testName, () => expect(isRightTriangle(a, b, c)).toBe(result))
    })
});

describe('check circumference', () => {
    it("is function", () => expect(typeof getCircumference).toBe("function"));
    [
        ['1. is valid check result', 5, 2 * Math.PI * 5],
        ['2. is valid check result', 10, 2 * Math.PI * 10],
        ['3. is valid check result', 0, 0],
    ].forEach(([testName, a, result]) => {
        it(testName, () => expect(getCircumference(a)).toBe(result))
    })
});

describe('check circle area', () => {
    it("is function", () => expect(typeof getCircleArea).toBe("function"));
    [
        ['1. is valid check result', 5, Math.PI * Math.pow(5, 2)],
        ['2. is valid check result', 10, Math.PI * Math.pow(10, 2)],
        ['3. is valid check result', 0, 0],
    ].forEach(([testName, a, result]) => {
        it(testName, () => expect(getCircleArea(a,)).toBe(result))
    })
});