let slotMax;
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
    slotMax = document.getElementById('slotsMax').textContent;
    document.getElementById('slotsUsed').textContent = used;
    document.getElementById('slotsCounter').classList.toggle('over-limit', used > slotMax);
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

async function equipItem(button) {
    const card = button.closest('.spell-card');
    const type = card.dataset.type;
    const index = card.dataset.index;
    const usesSlot = type !== 'runa';
    
    if (usesSlot) {
        const used = document.querySelectorAll('#pozioniGrid .spell-card, #pergameneGrid .spell-card').length;
        if (used >= slotMax) {
            alert("Slot consumabili pieni! Attenzione alle penalità di ingombro.");
        }
    }
    
    const bodyStr = JSON.stringify([getTokenId(), index]);
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/consumables/moveToSlotVeloce', { method: 'POST', body: bodyStr })
        .catch(err => console.error('Dialog request failed:', err));
    document.getElementById(gridIdForType(type)).appendChild(card);
    button.innerHTML = ICON_MINUS;
    button.title = 'Rimuovi dalle Quickslot';
    button.classList.remove('equip-btn');
    button.classList.add('unequip-btn');
    button.setAttribute('onclick', 'unequipItem(this)');
    recalcSlots();
}

async function unequipItem(button) {
    const card = button.closest('.spell-card');
    const index = card.dataset.index;
    const bodyStr = JSON.stringify([getTokenId(), index]);
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/consumables/moveFromSlotVeloce', { method: 'POST', body: bodyStr })
        .catch(err => console.error('Dialog request failed:', err));;
    document.getElementById('inventoryGrid').appendChild(card);
    button.innerHTML = ICON_PLUS;
    button.title = 'Equipaggia in Quickslot';
    button.classList.remove('unequip-btn');
    button.classList.add('equip-btn');
    button.setAttribute('onclick', 'equipItem(this)');
    recalcSlots();
}

function getTokenId(){
    return document.body.dataset.tokenid;
}

async function apriDialogDescrizioneConsumable(event, slotId) {
    event.stopPropagation();
    const bodyStr = JSON.stringify({ token: getTokenId(), slotId: slotId});
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/dialogConsumableDetails', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}

recalcSlots();