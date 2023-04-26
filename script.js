//state variables
let selected = 'Color mode';
let range = 1;
let color = '#A52A2A';

//buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        selected = button.textContent;
        if(button.classList === 'selected') return;
        button.classList.add("selected");

        buttons.forEach(elem => {
            if(button.classList !== elem.classList) {
                elem.classList.remove('selected');
            }
        });
    });
});

//inputs 
const rangeInput = document.querySelector('.range-input');
const rangeCounter = document.querySelector('.range-selector p');

rangeInput.addEventListener('input', () => {
    range = rangeInput.value;
    rangeCounter.textContent = `${range} x ${range}`;
})

const colorPick = document.querySelector('.color-pick');
const colorInput = document.querySelector('.color-input');

colorInput.addEventListener('input', () => {
    color = colorInput.value;
    colorInput.style.cssText = `background: ${color}`;
})


