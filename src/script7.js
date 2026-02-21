const maxParagraphCount = 5;

export function runApp(element) {

    element.innerHTML = `<div class="paragraphs">
            <p></p>
            <p></p>
            <p></p>
        </div>
        <input>
        <button style="visibility:hidden">push me</button>`;

  function checkParagraphs() {
    const paragraphContainer = element.querySelector(".paragraphs");
    return paragraphContainer.querySelectorAll("p");
  }

  function clearInput() {
    const tField = element.querySelector("input");
    tField.value = "";
    tField.focus();
  }

  function addParagraph(textValue) {
    if (typeof textValue !== "string") return;
    if (textValue.length > 0) {
      const newParagraph = document.createElement("p");
      newParagraph.innerText = textValue;
      const paragraphContainer = element.querySelector(".paragraphs");
      paragraphContainer.appendChild(newParagraph);
      const paragraps = Array.from(checkParagraphs());
      if (paragraps.length >= maxParagraphCount) {
        const pToRemove = paragraps.slice(
          0,
          paragraps.length - maxParagraphCount,
        );
        pToRemove.forEach((element) => {
          element.remove();
        });
      }
    }
  }

  const input = element.querySelector("input");
  input.addEventListener("input", (event) => {
    let isHidden = true;
    if (
      event !== undefined &&
      event.target !== undefined &&
      typeof event.target.value === "string"
    ) {
      if (event.target.value.length > 0) isHidden = false;
    }
    const button = element.querySelector("button");
    button.style.visibility = isHidden ? "hidden" : "visible";
  });

  const button = element.querySelector("button");
  button.addEventListener("click", () => {
    addParagraph(element.querySelector("input").value);
    clearInput();
  });
}
