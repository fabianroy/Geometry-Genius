function calculateEllipseArea(){
    let majorRadius = getInputById('ellipse-major-radius');
    let minorRadius = getInputById('ellipse-minor-radius');
    let area  = Math.PI * majorRadius * minorRadius;
    setEllipseArea('ellipse-area', area);
}

function getInputById(inputFieldId){
    let inputField = document.getElementById(inputFieldId);
    let inputValueText = inputField.value;
    let inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setEllipseArea(elementId, area){
    let element = document.getElementById(elementId);
    element.innerText = area;
}