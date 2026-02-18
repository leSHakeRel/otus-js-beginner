/** 
 * @jest-environment jsdom 
 */
const fs = require('fs');
const path = require('path');

describe('test UI', () => {

    beforeEach(() => {
        const filePath = path.resolve(__dirname, '../index.html');
        const html = fs.readFileSync(filePath, 'utf8');
        document.body.innerHTML = html;
    });
    [
        ['is paragraph elements count equal 3',     'p',        3],
        ['is input element elements count equal 1', 'input',    1],
        ['is button element count equal 1',         'button',   1]
    ].forEach(([name, tag, size]) => it(name, () => {
        const elements = document.querySelectorAll(tag);
        expect(elements).toHaveLength(size);
    }));


    it('is input empty', () => {
        const inputElement = document.querySelector('input');

        const inputText = inputElement.value;
        expect(inputText.length === 0).toBe(true);
    });

    it('is button hidden', () => {
        const button = document.querySelector('button');
        const isHidden = button.style.visibility === 'hidden';
        expect(isHidden).toBe(true);
    });

    it('is button enabled when text inserted', () => {
        const inputElement = document.querySelector('input');
        inputElement.value = '123';
        inputElement.dispatchEvent(new Event('input'));

        const button = document.querySelector('button');
        const style = window.getComputedStyle(button);
        expect(style.display).toBe('inline-block');
    });

    it('is p count after text inserted and button clicked equal 4', () => {
        const inputElement = document.querySelector('input');
        inputElement.value = '123';
        inputElement.dispatchEvent(new Event('input'));
        setTimeout(() => {
            const button = document.querySelector('button');
            button.click();
            const elements = document.querySelectorAll('p');
            expect(elements).toHaveLength(4);
        });
    });

    it('is input empty after text inserted and button clicked', () => {
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
        const inputElement = document.querySelector('input');
        inputElement.value = '123';
        inputElement.dispatchEvent(new Event('input'));
        setTimeout(() => {
            const button = document.querySelector('button');
            button.click();
        expect(inputElement.value).toBe('');
        }, 0);
    });

    it('is button hidden after manualy clear text', () => {
        const inputElement = document.querySelector('input');
        inputElement.value = '123';
        inputElement.dispatchEvent(new Event('input'));
        inputElement.value = '';
        inputElement.dispatchEvent(new Event('input'));
        
        const button = document.querySelector('button');
        const isHidden = button.style.visibility === 'hidden';
        expect(isHidden).toBe(true);
        expect(inputElement.value).toBe('');
    });

    it('is paragraph count equal 4 after text inserted and button clicked', () => {
        const button = document.querySelector('button');
        button.click();
        ['1','2','3','4','5']
            .forEach(
                (text) => {
                    const inputElement = document.querySelector('input');
                    inputElement.value = text;
                    inputElement.dispatchEvent(new Event('input'));
                }
            );
        setTimeout(() => {
            const elements = document.querySelectorAll('p');
            expect(elements).toHaveLength(4);
        }, 0);
    });

    it('is paragraph count equal 3 (not changed after launch and button clicked)', () => {
        const button = document.querySelector('button');
        button.click();

        const elements = document.querySelectorAll('p');
        expect(elements).toHaveLength(3);
    });
    
});