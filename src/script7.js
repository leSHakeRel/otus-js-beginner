export function addParagraph(textValue) {
    if(typeof textValue !== 'string')
        return;
    if(textValue.length > 0) {
        const newParagraph = document.createElement('p');
        newParagraph.innerText = textValue;
        paragraphContainer.appendChild(newParagraph);
        const paragraps = Array.from(checkParagraphs());
        if (paragraps.length >= maxParagraphCount){
            const pToRemove = paragraps.slice(0, paragraps.length - maxParagraphCount);
            pToRemove.forEach(element => {
                element.remove();
            });
        }
    }
}

export function checkParagraphs() {
    return paragraphContainer.querySelectorAll('p');
}

export function clearInput() {
    const tField = document.querySelector('input');
    tField.value = '';
    tField.focus();
}

document.addEventListener('DOMContentLoaded', ()=>{
    const maxParagraphCount = 5;
    const mainContainer = document.querySelector('.container');
    const paragraphContainer = mainContainer.querySelector('.paragraphs');

    const input = document.querySelector('input');
    input.addEventListener('input', (event)=>{
        let isDisabled = true;
        if(event !== undefined &&
            event.target !== undefined &&
            typeof event.target.value === 'string'){
            if(event.target.value.length > 0)
                isDisabled = false;
        }
        const button = document.querySelector('button');    
        button.disabled = isDisabled;
    });
    
    const button = document.querySelector('button');
    button.addEventListener('click', ()=>{
        addParagraph(document.querySelector('input').value)
        clearInput();
    });
});

