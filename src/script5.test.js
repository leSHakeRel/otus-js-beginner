import { getArraySum, doubleArrayElements, getArrayMinMax} from "./script5.js";

describe("check array sum", () => {
  it("is function", () => expect(typeof getArraySum).toBe("function"));
  it("is right sum", () => expect(getArraySum([1, 2, 3])).toBe(6));
  it("is right sum for string", () => expect(getArraySum([1, 2, 'b', 'test'])).toBe(3));
  it("is right sum for undefined", () => expect(getArraySum([1, 2, undefined])).toBe(3));
});

describe("check double array", () => {
  it("is function", () => expect(typeof doubleArrayElements).toBe("function"));

  it("is valid doubled array", () => expect(doubleArrayElements([1, 2, 3])).toStrictEqual([2, 4, 6]));

  it("is valid doubled array for string value", () => expect(doubleArrayElements([1, 2, '3'])).toStrictEqual([2, 4, '33']));
  it("is valid doubled array for undefined value", () => expect(doubleArrayElements([1, 2, undefined])).toStrictEqual([2, 4, undefined]));
});

describe("check multiply vars", () => {
  it("is function", () => expect(typeof getArrayMinMax).toBe("function"));

  it("is valid Min Max result array", () => expect(getArrayMinMax([1, 2, 3])).toStrictEqual([1, 3]));
});