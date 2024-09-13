function decodeColorCode() {
    // Define color to value mappings
    const colorValues = {
        black: 0, brown: 1, red: 2, orange: 3, yellow: 4,
        green: 5, blue: 6, violet: 7, gray: 8, white: 9
    };

    // Get values from the color selectors
    const band1 = document.getElementById('band1').value;
    const band2 = document.getElementById('band2').value;
    const band3 = document.getElementById('band3').value;
    const multiplier = parseInt(document.getElementById('multiplier').value);

    // Calculate resistor value
    const value = ((colorValues[band1] * 10 + colorValues[band2]) * Math.pow(10, colorValues[band3])) * multiplier;

    // Display result
    document.getElementById('colorResult').innerText = `Resistor Value: ${value} Ohms`;
}

function encodeResistorValue() {
    // Get resistor value from input
    const resistorValue = parseFloat(document.getElementById('resistorValue').value);

    // Calculate color bands
    let value = resistorValue;
    let band1, band2, band3, multiplier;

    if (value > 0) {
        multiplier = Math.floor(Math.log10(value));
        value /= Math.pow(10, multiplier);

        band1 = Math.floor(value / 10);
        band2 = value % 10;
        band3 = multiplier;

        const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
        document.getElementById('valueResult').innerText = `Color Bands: ${colors[band1]}-${colors[band2]}-${colors[band3]}-${colors[multiplier]}`;
    } else {
        document.getElementById('valueResult').innerText = "Please enter a valid resistor value.";
    }
}
