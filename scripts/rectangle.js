function calculateRectangleArea() {
    let widthInput = document.getElementById('rectangle-width').value;
    let lengthInput = document.getElementById('rectangle-length').value;
    let width = parseFloat(widthInput);
    let length = parseFloat(lengthInput);
    let area = width * length;
    let areaOutput = document.getElementById('rectangle-area');
    areaOutput.innerText = area;
}