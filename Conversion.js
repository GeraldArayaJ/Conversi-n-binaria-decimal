document.getElementById('decimalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let binario= document.getElementById('binarioInput').value;
    if (!/^[01]+$/.test(binario)) {
        alert("Por favor, ingrese un número binario válido.");
        return;
    }

    let decimal = parseInt(binario, 2);
    document.getElementById('resultadoB').innerText = `El número decimal es: ${decimal}`;});

    document.getElementById('conversionForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const decimalInput = document.getElementById('decimalInput').value;
            const binaryResult = parseInt(decimalInput, 10).toString(2);
            document.getElementById('result').innerText = `El número binario es: ${binaryResult}`;});