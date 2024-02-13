function calculateTriangleArea() {
    let triangleBaseInput = document.getElementById('triangle-base').value;
    let triangleHeightInput = document.getElementById('triangle-height').value;
    let base = parseFloat(triangleBaseInput);
    let height = parseFloat(triangleHeightInput);
    let area = 0.5 * base * height;
    let areaOutput = document.getElementById('triangle-area');
    areaOutput.innerText = area;
}