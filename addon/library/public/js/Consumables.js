const SLOTS_MAX = 6;
const ICON_PLUS = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg>';
const ICON_MINUS = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"/></svg>';

function loadParams(elem) {
    document.getElementById('spell_SpellName').setAttribute('value', elem.getAttribute('data-spellName'));
    document.getElementById('item_nomeArma').setAttribute('value', elem.getAttribute('data-nomeArma'));
    document.getElementById('item_slotVeloce').setAttribute('value', elem.getAttribute('data-slotVeloce'));
    document.getElementById('item_slotRuna').setAttribute('value', elem.getAttribute('data-slotRuna'));
    document.getElementById('form_use_item').submit();
}

function gridIdForType(type) {
    if (type === 'pozione') return 'pozioniGrid';
    if (type === 'pergamena') return 'pergameneGrid';
    if (type === 'runa') return 'runeGrid';
}

function recalcSlots() {
    const usedPozioni = document.querySelectorAll('#pozioniGrid .spell-card').length;
    const usedPergamene = document.querySelectorAll('#pergameneGrid .spell-card').length;
    const used = usedPozioni + usedPergamene; // le rune non contano slot
    document.getElementById('slotsUsed').textContent = used;
    document.getElementById('slotsCounter').classList.toggle('over-limit', used > SLOTS_MAX);
}

function toggleInventory() {
    const drawer = document.getElementById('inventoryDrawer');
    const btn = document.getElementById('toggleInvBtn');
    const frame = document.querySelector('.quickslot-frame');
    const isClosed = getComputedStyle(drawer).display === 'none';
    drawer.style.display = isClosed ? 'flex' : 'none';
    frame.classList.toggle('inventory-open', isClosed);
    btn.textContent = isClosed ? 'Chiudi Inventario ▲' : 'Apri Inventario ▼';
}

function apriInventarioSeparato() {
    // NOTA: qui va collegato il meccanismo di trigger macro già usato altrove nel
    // ruleset (lo stesso che gestisce 'loadParams' / data-macro sulle spell-icon-btn),
    // che non è incluso in questo file di esempio. Esempio indicativo:
    //
    //   MapTool.chatBroadcast("[macro('apriInventarioDialog@Lib:it.aldinucci.piero.bed.maptool.ruleset'): '']");
    //
    // o l'equivalente già in uso per invocare macro da JS in questo progetto.
    console.log('TODO: collegare apertura dialog inventario separato via macro MapTool');
}

function equipItem(button) {
    const card = button.closest('.spell-card');
    const type = card.dataset.type;
    const usesSlot = type !== 'runa';

    if (usesSlot) {
        const used = document.querySelectorAll('#pozioniGrid .spell-card, #pergameneGrid .spell-card').length;
        if (used >= SLOTS_MAX) {
            alert('Slot consumabili pieni! Rimuovi qualcosa dalle quickslot prima di equipaggiare altro.');
            return;
        }
    }

    document.getElementById(gridIdForType(type)).appendChild(card);
    button.innerHTML = ICON_MINUS;
    button.title = 'Rimuovi dalle Quickslot';
    button.classList.remove('equip-btn');
    button.classList.add('unequip-btn');
    button.setAttribute('onclick', 'unequipItem(this)');
    recalcSlots();
}

function unequipItem(button) {
    const card = button.closest('.spell-card');
    document.getElementById('inventoryGrid').appendChild(card);
    button.innerHTML = ICON_PLUS;
    button.title = 'Equipaggia in Quickslot';
    button.classList.remove('unequip-btn');
    button.classList.add('equip-btn');
    button.setAttribute('onclick', 'equipItem(this)');
    recalcSlots();
}

recalcSlots();