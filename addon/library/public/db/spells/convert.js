
const fs = require('fs');
const path = require('path');

// Nome dei file (modifica 'sortilegi.json' se il tuo ha un nome diverso)
const inputFile = 'sortilegi.json';
const outputFile = 'sortilegi_array.json';

try {
    // Legge il file JSON originale
    const rawData = fs.readFileSync(path.join(__dirname, inputFile), 'utf8');
    const rawJson = JSON.parse(rawData);

    // Converte in array e inietta l'ID
    const array = Object.entries(rawJson).map(([key, val]) => ({
        id: key,
        ...val
    }));

    // Scrive il nuovo file
    fs.writeFileSync(path.join(__dirname, outputFile), JSON.stringify(array, null, 4), 'utf8');
    
    console.log(`Successo! Il file ${outputFile} è stato creato correttamente.`);
} catch (err) {
    console.error("Errore durante la conversione:", err.message);
}