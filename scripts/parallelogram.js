// function calculateParallelogramArea() {
//     let getArea = getParallelogramBase();
//     console.log(getArea);
// }

// function getParallelogramBase() {
//     let baseInput = document.getElementById('parallelogram-base').value;
//     let heightInput = document.getElementById('parallelogram-height').value;
//     let base = parseFloat(baseInput);
//     let height = parseFloat(heightInput);
//     let area = base * height;
//     return area;
// }

function calculateParallelogramArea() {
    let base = getInputValue('parallelogram-base');
    let height = getInputValue('parallelogram-height');
    let area = base * height;
    setInnerTextById('parallelogram-area', area);
}

function getInputValue(inputFieldId){
    let inputField = document.getElementById(inputFieldId);
    let inputValueText = inputField.value;
    let inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    let element = document.getElementById(elementId);
    element.innerText = area;
}