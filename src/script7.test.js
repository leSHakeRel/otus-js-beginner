/**
 * @jest-environment jsdom
 */

import { runApp } from "./script7";

describe("test UI", () => {
  let element;
  beforeEach(() => {
    element = document.createElement('div');
    runApp(element);
  });
  [
    ["is paragraph elements count equal 3", "p", 3],
    ["is input element elements count equal 1", "input", 1],
    ["is button element count equal 1", "button", 1],
  ].forEach(([name, tag, size]) =>
    it(name, () => {
      const elements = element.querySelectorAll(tag);
      expect(elements).toHaveLength(size);
    }),
  );

  it("is input empty", () => {
    const inputElement = element.querySelector("input");

    const inputText = inputElement.value;
    expect(inputText.length === 0).toBe(true);
  });

  it("is button hidden", () => {
    const button = element.querySelector("button");
    const isHidden = button.style.visibility === "hidden";
    expect(isHidden).toBe(true);
  });

  it("is button enabled when text inserted", () => {
    const inputElement = element.querySelector("input");
    inputElement.value = "123";
    inputElement.dispatchEvent(new Event("input"));
    const button = element.querySelector("button");
    expect(button.style.visibility).toBe('visible');
  });

  it("is p count after text inserted and button clicked equal 4", () => {
    const inputElement = element.querySelector("input");
    inputElement.value = "123";
    inputElement.dispatchEvent(new Event("input"));
    const button = element.querySelector("button");
    button.click();
    const elements = element.querySelectorAll("p");
    expect(elements).toHaveLength(4);
  });

  it("is input empty after text inserted and button clicked", () => {
    const event = new Event("DOMContentLoaded");
    document.dispatchEvent(event);
    const inputElement = element.querySelector("input");
    inputElement.value = "123";
    inputElement.dispatchEvent(new Event("input"));
    const button = element.querySelector("button");
    button.click();
    expect(inputElement.value).toBe("");
  });

  it("is button hidden after manualy clear text", () => {
    const inputElement = element.querySelector("input");
    inputElement.value = "123";
    inputElement.dispatchEvent(new Event("input"));
    inputElement.value = "";
    inputElement.dispatchEvent(new Event("input"));

    const button = element.querySelector("button");
    const isHidden = button.style.visibility === "hidden";
    expect(isHidden).toBe(true);
    expect(inputElement.value).toBe("");
  });

  it("is paragraph count equal 4 after text inserted and button clicked", () => {
    ["1", "2", "3", "4", "5"].forEach((text) => {
      const inputElement = element.querySelector("input");
      inputElement.value = text;
      inputElement.dispatchEvent(new Event("input"));
    });
    const button = element.querySelector("button");
    button.click();
    const elements = element.querySelectorAll("p");
    expect(elements).toHaveLength(4);
  });

  it("is paragraph count equal 3 (not changed after launch and button clicked)", () => {
    const button = element.querySelector("button");
    button.click();

    const elements = element.querySelectorAll("p");
    expect(elements).toHaveLength(3);
  });
});
