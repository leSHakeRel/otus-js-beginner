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
    ['is right date', '15.12.2025', new Date(Date.parse('2025-12-15'))],
    ['is undefined for wrong format', '15-12.2025', undefined],
    ['is undefined for wrong format', '15-12-2025', undefined],
  ].forEach(
        ([testName, input, result]) => {
          if(result === undefined){
            it(testName, () => expect(getDateFromString(input)).toBeUndefined());
          } else {
            it(testName, () => expect(getDateFromString(input)).toEqual(result));
          }
        }
    );
});

describe("check parsing date from string", () => {
  beforeEach(() => {
    global.prompt = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("is function", () => expect(typeof getDayOfWeek).toBe("function"));
  
  [
    ['is right day of week', getDateFromString('15.12.2025'), new Date(Date.parse('2025-12-15')).toLocaleString('ru-ru', {weekday:'long'})],
    ['is undefined for wrong format', getDateFromString('15-12.2025'), undefined],
    ['is undefined for wrong format', getDateFromString('15-12-2025'), undefined],
  ].forEach(
        ([testName, input, result]) => {
          if(result === undefined){
            it(testName, () => expect(getDayOfWeek(input)).toBeUndefined());
          } else {
            it(testName, () => expect(getDayOfWeek(input)).toEqual(result));
          }
        }
    );
});

describe("check minutes from start of day", () => {
  beforeEach(() => {
    global.prompt = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("is function", () => expect(typeof getMinutesFrom).toBe("function"));
  
  [
    ['is 0 minutes', new Date('2026-01-01T00:00:00'), 0],
    ['is 60 minutes', new Date('2026-01-01T01:00:00'), 60],
    ['is 99 minutes', new Date('2026-01-01T01:39:00'), 99],
  ].forEach(
        ([testName, input, result]) => {
            it(testName, () => expect(getMinutesFrom(input)).toBe(result))
        }
    );
});

describe("check minutes from start of day", () => {
  beforeEach(() => {
    global.prompt = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("is function", () => expect(typeof getYounger).toBe("function"));
  
  const date1 = new Date('1985-11-19');
  const date2 = new Date('2000-01-01');

  [
    ['is first younger', date2, date1, date2],
    ['is second younger', date1, date2, date2],
    ['is equal', date2, date1, date2],
  ].forEach(
        ([testName, first, second, result]) => {
            it(testName, () => expect(getYounger(first, second)).toBe(result))
        }
    );
});