import { getDateFromString, getDayOfWeek, getMinutesFrom, getYounger} from "./script8.js";



describe("check parsing date from string", () => {
  beforeEach(() => {
    global.prompt = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("is function", () => expect(typeof getDateFromString).toBe("function"));

  [
    ['is right date', '15.12.2025', new Date(2025, 12, 15)],
    ['is undefined for wrong format', '15-12.2025', undefined],
    ['is undefined for wrong format', '15-12-2025', undefined],
    ['is undefined for wrong format', 'a.b.c', new Date()],
  ].forEach(
        ([testName, input, result]) => it(testName, expect(getDateFromString(input)).toBe(result))
    );

});