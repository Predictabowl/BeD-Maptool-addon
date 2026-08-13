function loadParams(elem) {
    document.getElementById('spell_Macro').setAttribute('value', elem.dataset.macro);
    document.getElementById('spell_SpellName').setAttribute('value', elem.dataset.spellname);
    document.getElementById('spell_Azione').setAttribute('value', 'lancio');
    document.getElementById('form_table_spell').submit();
}

function apri_dialog_descrizione(event, sLibName) {
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


function refreshSpellList(event) {
    if (event.button === 2) {
        event.preventDefault();
        document.getElementById("refreshListaPoteri").submit();
    }
}


/*
function refreshSpellList(event) {
    if (event.button == 2) {
        document.getElementById("refreshListaPoteri").submit();
    }
}*/

