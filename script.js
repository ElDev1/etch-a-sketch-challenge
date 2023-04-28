// state variables
let selected = 'Color mode';
let range = 1;
let color = '#A52A2A';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// buttons
const buttons = document.querySelectorAll('button');

// add event listener to check which button is selected
buttons.forEach(button => {
    if(button.textContent !== 'Clear') {
        button.addEventListener('click', () => {
            selected = button.textContent;
            if (button.classList === 'selected') return;
            button.classList.add("selected");

            buttons.forEach(elem => {
                if (button.classList !== elem.classList) {
                    elem.classList.remove('selected');
                }
            });
        });
    }
});

// clear button render a new tablet
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    renderDrawTablet();
})

// inputs 
const rangeInput = document.querySelector('.range-input');
const rangeCounter = document.querySelector('.range-selector p');

rangeInput.addEventListener('input', renderDrawTablet)

// handle pixel painting depending of selected button
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (selected === 'Rainbow mode') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (selected === 'Color mode') {
        e.target.style.backgroundColor = color;
    } else if (selected === 'Eraser') {
        e.target.style.backgroundColor = 'white';
    } 
}

// handle color picker
const colorPick = document.querySelector('.color-pick');
const colorInput = document.querySelector('.color-input');

colorInput.addEventListener('input', () => {
    color = colorInput.value;
    colorInput.style.cssText = `background: ${color}`;
})


// render draw-table 
const drawingTablet = document.querySelector('.drawing-tablet')

function renderDrawTablet() {
    range = rangeInput.value;
    rangeCounter.textContent = `${range} x ${range}`;
    while(drawingTablet.hasChildNodes()) {
        drawingTablet.removeChild(drawingTablet.firstChild);
    }

    for(let i = 0; i < range ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.style.flexBasis = `calc(100% / ${range})`;
        pixel.addEventListener('mouseover', changeColor);
        pixel.addEventListener('mousedown', changeColor);
        drawingTablet.appendChild(pixel);
    }
}

//first render
renderDrawTablet();