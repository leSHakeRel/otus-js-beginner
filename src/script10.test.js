import { getStringType } from "./script10.js";

describe("check detection", () => {
  [
    ["is valid check result for 15-03-2023", "15-03-2023", "date"],
    ["is valid check result for 01-12-1999", "01-12-1999", "date"],
    ["is valid check result for 31-01-2000", "31-01-2000", "date"],
    ["is valid check result for 15.03.2023", "15.03.2023", "date"],
    ["is valid check result for 01.12.1999", "01.12.1999", "date"],
    ["is valid check result for test@example.com", "test@example.com", "email"],
    ["is valid check result for user@domain.com", "user@domain.com", "email"],
    ["is valid check result for +7 456 789 10 11", "+7 456 789 10 11", "phone"],
    ["is valid check result for +7 123 456 78 99", "+7 123 456 78 99", "phone"],
    ["is valid check result for +7 (123) 456 7899", "+7 (123) 456 7899", "phone"],
  ].forEach(([testName, value, result]) => {
    it(testName, () => expect(getStringType(value)).toBe(result));
  });
});
