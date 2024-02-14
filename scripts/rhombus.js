function calculateRhombusArea(){
    let height = getInputValueById('rhombus-height');
    let base = getInputValueById('rhombus-base');
    let area = 0.5 * base * height;
    setRhombusArea('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    let inputField = document.getElementById(inputFieldId);
    let inputValueText = inputField.value;
    let inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setRhombusArea(elementId, area){
    let element = document.getElementById(elementId);
    element.innerText = area;
}