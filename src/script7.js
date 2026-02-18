const maxParagraphCount = 5;

export function checkParagraphs(){
    const mainContainer = document.querySelector('.container');
    const paragraphContainer = mainContainer.querySelector('.paragraphs');
    return paragraphContainer.querySelectorAll('p');
}

export function clearInput(){
    const tField = document.querySelector('input');
    tField.value = '';
    tField.focus();
}

export function addParagraph(textValue) {
    if(typeof textValue !== 'string')
        return;
    if(textValue.length > 0) {
        const newParagraph = document.createElement('p');
        newParagraph.innerText = textValue;
        const mainContainer = document.querySelector('.container');
        const paragraphContainer = mainContainer.querySelector('.paragraphs');
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

document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.querySelector('input');
    input.addEventListener('input', (event)=>{
        let isHidden = true;
        if(event !== undefined &&
            event.target !== undefined &&
            typeof event.target.value === 'string'){
            if(event.target.value.length > 0)
                isHidden = false;
        }
        const button = document.querySelector('button');
        button.style.visibility = isHidden ? "hidden" : "visible";
    });
    
    const button = document.querySelector('button');
    button.addEventListener('click', ()=>{
        addParagraph(document.querySelector('input').value)
        clearInput();
    });
});

