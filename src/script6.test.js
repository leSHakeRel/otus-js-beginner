import { diff, isWord, pow } from './script6.js';

describe('Check diff ', () => {
    it("is function", () => expect(typeof diff).toBe("function"));

    [
        ['is right result', 5, 6, 1],
        ['is right result for equal values', 5, 5, 0],
        ['is right result for undefined value', 5, undefined, 0],
        ['is right result for NaN value', 5, NaN, 0]
    ].forEach((([testName, first, second, result]) => {
        it(testName, () => expect(diff(first, second)).toBe(result));
    }));
});

describe('Check isWord ', () => {
    it("is function", () => expect(typeof isWord).toBe("function"));

    [
        ['is right result', 'test word', true],
        ['is right result for single word', 'test', false],
        ['is right result for undefined value', undefined, false],
        ['is right result for NaN value', NaN, false]
    ].forEach((([testName, word, result]) => {
        it(testName, () => expect(isWord(word)).toBe(result));
    }));
});

describe('Check pow ', () => {
    it("is function", () => expect(typeof pow).toBe("function"));

    [
        ['is right result', 2, 4, 16],
        ['is right result for undefined value', 5, undefined, null],
        ['is right result for NaN value', 5, NaN, null]
    ].forEach((([testName, first, second, result]) => {
        it(testName, () => expect(pow(first, second)).toBe(result));
    }));
});