function berechneEffizienz() {
    const alkoholgehalt = parseFloat(document.getElementById('alkoholgehalt').value);
    const volumen = parseFloat(document.getElementById('volumen').value);
    const preis = parseFloat(document.getElementById('preis').value);

    if (isNaN(alkoholgehalt) || isNaN(volumen) || isNaN(preis) || alkoholgehalt <= 0 || volumen <= 0 || preis <= 0) {
        document.getElementById('ergebnis').innerText = 'Bitte geben Sie gültige Werte ein.';
        return;
    }

    const effizienz = (alkoholgehalt * volumen) / preis;
    document.getElementById('ergebnis').innerText = `Effizienz: ${effizienz.toFixed(2)} PLE (Prozent-Liter pro Euro)`;
}