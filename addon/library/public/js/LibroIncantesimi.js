function toggleCardCheckbox(event) {
    const cardElement = event.target.closest(".grimoire-card");
    const hiddenInput = cardElement.querySelector('input[type="hidden"]');
    const isCurrentlyMemorized = cardElement.classList.contains('memorized');
    const counterContainer = document.getElementById("mem-num");
    const maxMem = counterContainer.dataset.max;
    let memNum = counterContainer.textContent;
    if (isCurrentlyMemorized) {
        // Rimuove lo stato memorizzato
        cardElement.classList.remove('memorized');
        hiddenInput.value = "0";
        memNum--;
    } else {
        // Aggiunge lo stato memorizzato
        cardElement.classList.add('memorized');
        hiddenInput.value = "1";
        memNum++;
    }

    if (memNum > maxMem) {
        counterContainer.classList.add('over-limit');
    } else {
        counterContainer.classList.remove('over-limit');
    }
    counterContainer.textContent = memNum;
}

function apri_dialog_descrizione(event, sLibName) {
    event.stopPropagation();
    document.getElementById('input_lib_spell').setAttribute('value', sLibName);
    document.getElementById('dialogDescrizioneForm').submit();
}