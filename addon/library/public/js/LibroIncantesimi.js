function toggleCardCheckbox(event) {
    const cardElement = event.target.closest(".spell-card");
    const hiddenInput = cardElement.querySelector('input[type="hidden"]');
    const isOnlyInBook = cardElement.classList.contains('in-book');
    const counterContainer = document.getElementById("mem-num");
    const maxMem = counterContainer.dataset.max;
    let memNum = counterContainer.textContent;
    if (isOnlyInBook) {
        // Aggiunge lo stato memorizzato
        cardElement.classList.remove('in-book');
        hiddenInput.value = "1";
        memNum++;
    } else {
        // Rimuove lo stato memorizzato
        cardElement.classList.add('in-book');
        hiddenInput.value = "0";
        memNum--;
    }

    if (memNum > maxMem) {
        counterContainer.classList.add('over-limit');
    } else {
        counterContainer.classList.remove('over-limit');
    }
    counterContainer.textContent = memNum;
}
