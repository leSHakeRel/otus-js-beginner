import { isRightTriangle, getCircumference, getCircleArea } from './script9.js';

describe('check is right triangle', () => {
    it("is function", () => expect(typeof isRightTriangle).toBe("function"));
    test.each([
                  ['is valid check result', 3, 4, 6, false],
                  ['is valid check result', 5, 12, 13, true],
                  ['is valid check result', 2, 3, 4, false],
                  ['is valid check result', 2, undefined, 4, false],
                ])('1. $1: a=%i, b=%i, c=%i, result=%p', (a, b, c, result) => {
                  expect(isRightTriangle(a, b, c)).toBe(result)
                });
});

describe('check circumference', () => {
    it("is function", () => expect(typeof getCircumference).toBe("function"));
    test.each([
                  ['is valid check result', 5, 2 * Math.PI * 5],
                  ['is valid check result', 10, 2 * Math.PI * 10],
                  ['is valid check result', 0, 0],
                ])('1. $1: a=%i, result=%f', (a, result) => {
                  expect(getCircumference(a)).toBe(result)
                });
});

describe('check circle area', () => {
    it("is function", () => expect(typeof getCircleArea).toBe("function"));
    test.each([
                  ['is valid check result', 5, Math.PI * Math.pow(5, 2)],
                  ['is valid check result', 10, Math.PI * Math.pow(10, 2)],
                  ['is valid check result', 0, 0],
                ])('1. $1: a=%i, result=%f', (a, result) => {
                  expect(getCircleArea(a)).toBe(result)
                });
});
