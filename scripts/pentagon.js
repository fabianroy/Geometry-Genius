function calculatePentagonArea() {
    let sideInput = document.getElementById('pentagon-side').value;
    let apothemInput = document.getElementById('pentagon-apothem').value;
    let side = parseFloat(sideInput);
    let apothem = parseFloat(apothemInput);
    let area = 0.5 * side * apothem * 5;
    let areaOutput = document.getElementById('pentagon-area');
    areaOutput.innerText = area;
}