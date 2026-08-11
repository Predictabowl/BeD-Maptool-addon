function toggleCardCheckbox(cardElement) {
    const checkbox = cardElement.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
            cardElement.classList.add('memorized');
        } else {
            cardElement.classList.remove('memorized');
        }
    }
}

function apri_dialog_descrizione(sLibName) {
    document.getElementById('input_lib_spell').setAttribute('value', sLibName);
    document.getElementById('dialogDescrizioneForm').submit();
}