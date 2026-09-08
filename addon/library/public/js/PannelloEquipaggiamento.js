/* All of this is demo-only wiring to show the visual states the design
           doc calls for. Real drag&drop, macro calls and fetches are out of
           scope for this example. */

function toggleCombat() {
    document.getElementById('inventoryZone').classList.toggle('combat-locked');
}

let twoHanded = true; // starts locked, matching the equipped 2-handed weapon below
function toggleWeaponHands() {
    twoHanded = !twoHanded;
    const secondary = document.getElementById('slot-secondary');
    const primaryIcon = document.getElementById('primary-weapon-icon');
    const styleValue = document.getElementById('styleValue');

    if (twoHanded) {
        secondary.classList.add('locked');
        primaryIcon.src = 'https://placehold.co/64x64/2a241f/d49a40?text=2M';
        styleValue.textContent = 'Arma a 2 Mani';
    } else {
        secondary.classList.remove('locked');
        primaryIcon.src = 'https://placehold.co/64x64/2a241f/d49a40?text=1M';
        styleValue.textContent = 'Arma e Scudo';
    }
}

function simulateInvalidDrop() {
    const slot = document.getElementById('slot-elmo');
    slot.classList.add('invalid');
    setTimeout(() => slot.classList.remove('invalid'), 450);
}

function openItemDock(element) {
    setAndRenderDisplayItem(JSON.parse(element.dataset.jsonoggetto));
    const dock = document.getElementById('descrizione-dock');
    dock.classList.remove("description-closed");
    document.getElementById('dockToolbar').classList.add('active');
    dock.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'width') {
            dock.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
            dock.removeEventListener('transitionend', handler);
        }
    });
}

function closeItemDock() {
    //document.getElementById('itemDock').innerHTML = '<div class="dock-empty">Seleziona un oggetto per vederne i dettagli</div>';
    document.getElementById('descrizione-dock').classList.add("description-closed");
    document.getElementById('dockToolbar').classList.remove('active');
}

/* Demo of the real item-name tooltip that will appear when hovering
   an equipped item (separate concern from .slot-label, which is the
   always-visible "Elmo"/"Armatura"/... slot caption). Only one
   tooltip element exists; it's moved to whichever slot is hovered
   and flipped to sit below the slot instead of above when there
   isn't enough room above it (e.g. the top row). */
function showSlotTooltip(slotEl) {
    const oItem = JSON.parse(slotEl.dataset.jsonoggetto);
    const name = oItem.nome;
    if (!name) return;

    const tooltip = document.getElementById('slotTooltip');
    const panel = document.querySelector('.equip-panel');
    tooltip.textContent = name;
    tooltip.classList.add('visible');

    const panelRect = panel.getBoundingClientRect();
    const slotRect = slotEl.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();

    let top = slotRect.top - panelRect.top - tipRect.height - 10;
    let placedBelow = false;
    if (top < 0) {
        top = slotRect.bottom - panelRect.top + 10;
        placedBelow = true;
    }

    let left = slotRect.left - panelRect.left + (slotRect.width / 2) - (tipRect.width / 2);
    left = Math.max(4, Math.min(left, panelRect.width - tipRect.width - 4));

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
    tooltip.classList.toggle('tooltip-bottom', placedBelow);
}

function hideSlotTooltip() {
    document.getElementById('slotTooltip').classList.remove('visible');
}