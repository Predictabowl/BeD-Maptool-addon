function loadParams(elem) {
    document.getElementById('spell_Macro').setAttribute('value', elem.dataset.macro);
    document.getElementById('spell_SpellName').setAttribute('value', elem.dataset.spellname);
    document.getElementById('spell_Azione').setAttribute('value', 'lancio');
    document.getElementById('form_table_spell').submit();
}

function apri_dialog_descrizione(sLibName) {
    document.getElementById('input_lib_spell').setAttribute('value', sLibName);
    document.getElementById('dialogDescrizioneForm').submit();
}

/* Drag and Drop for ordering spells */

let draggedItem = null;



function handleDragStart(e) {
    draggedItem = e.target.closest('.spell-card');
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', draggedItem.getAttribute('data-id'));
    draggedItem.classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();

    const targetCard = e.target.closest('.spell-card');

    if (targetCard && draggedItem && draggedItem !== targetCard) {
        const container = document.querySelector('.spells-grid-container');
        const allCards = Array.from(container.querySelectorAll('.spell-card'));
        const draggedIdx = allCards.indexOf(draggedItem);
        const targetIdx = allCards.indexOf(targetCard);

        if (draggedIdx < targetIdx) {
            container.insertBefore(draggedItem, targetCard.nextSibling);
        } else {
            container.insertBefore(draggedItem, targetCard);
        }

        const updatedCards = container.querySelectorAll('.spell-card');
        let newOrder = [];
        updatedCards.forEach(card => {
            newOrder.push(card.getAttribute('data-id'));
        });

        document.getElementById('nuovaListaPoteri').value = newOrder.join(",");
        document.getElementById('saveOrderForm').submit();
    }
}

function handleDragEnd(e) {
    if (draggedItem) {
        draggedItem.classList.remove('dragging');
    }
    draggedItem = null;
}

/*
function handleDragStart(e) {
    draggedItem = this;
    e.dataTransfer.effectAllowed = 'move';
    this.classList.add('dragging'); // Classe CSS opzionale per dare un effetto visivo (es. opacità ridotta)
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const container = document.querySelector('.spells-grid-container');
    const afterElement = getDragAfterElement(container, e.clientY);
    const currentCard = draggedItem;

    if (afterElement == null) {
        container.appendChild(currentCard);
    } else {
        container.insertBefore(currentCard, afterElement);
    }
}

function handleDrop(e) {
    e.preventDefault();
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedItem = null;

    // RACCOGLIE IL NUOVO ORDINE DEGLI ID
    const cards = document.querySelectorAll('.spell-card');
    let newOrder = [];
    cards.forEach(card => {
        newOrder.push(card.getAttribute('data-id'));
    });

    // Converte l'array in una stringa delimitata da virgole (o in un JSON) da mandare al backend
    let orderString = newOrder.join(",");

    // Assegna il valore al form nascosto e invia i dati al backend MapTool
    document.getElementById('nuovaListaPoteri').value = orderString;

    // Esegue il submit automatico del form per persistere il cambiamento
    document.getElementById('saveOrderForm').submit();
}

// Funzione d'appoggio per calcolare la posizione corretta nella griglia/lista durante il trascinamento
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.spell-card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: negativeInfinity }).element;
}

// Polyfill rapido per negative infinity nel reduce
const negativeInfinity = Number.NEGATIVE_INFINITY;
*/
