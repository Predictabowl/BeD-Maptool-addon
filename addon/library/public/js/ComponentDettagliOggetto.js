const NUM_FORMATTER = new Intl.NumberFormat('it-IT', { signDisplay: 'always' });
let displayItem = {};


function fillDettagliOggetto() {
    document.getElementById("cdo-item-name").textContent = displayItem.nome;
    const iconEl = document.getElementById("cdo-item-icon");
    iconEl.setAttribute("alt", displayItem.nome);
    iconEl.setAttribute("src", displayItem.displayData.iconAsset);
    renderItemTags();
    renderWeaponBlock();
    renderWeaponAttributes();
    renderGeneralAttributes();
    renderRunes();
    renderDescription();
    updateSectionBorders();
}

function renderItemTags() {
    const weaponTypeTag = displayItem.tipoArma ? `<span class="item-tag">${displayItem.tipoArma}</span>` : '';
    const weaponCharacteristic = displayItem.carArma?.toUpperCase() === 'CAP' ? 'mana' : displayItem.carArma;
    const weaponCharacteristicTag = displayItem.carArma ? `<span class="item-tag">${weaponCharacteristic}</span>` : '';
    document.getElementById("cdo-item-tags").innerHTML = `<span class="item-tag">${displayItem.categoria}</span>${weaponTypeTag}${weaponCharacteristicTag}`;
}

function renderWeaponBlock() {
    const weaponBlock = document.getElementById("cdo-item-weapon-block");
    if (['arma', 'armatura', 'scudo'].includes(displayItem.categoria)) {
        weaponBlock.classList.remove("hidden");
        renderWeaponDmg();
        renderWeaponSubStats();
    } else {
        weaponBlock.classList.add("hidden");
    }
}

function renderWeaponDmg() {
    const element1 = document.getElementById("cdo-item-1h-dmg");
    const element2 = document.getElementById("cdo-item-2h-dmg");
    if (displayItem.categoria == 'arma') {
        const dmgTypes = displayItem.displayData.tipoDanno.map(d => `<img src="${getDmgTypeIcon(d)}" alt="${d}">`).join('');
        if (displayItem.danno1H != 0) {
            element1.classList.remove("hidden");
            element1.innerHTML = `
                <span class="hand-label">1 Mano</span>
                <span class="dmg-value">${displayItem.danno1H}</span>
                ${dmgTypes}`;
        } else {
            element1.classList.add("hidden");
        }
        if (displayItem.danno2H != 0) {
            element2.classList.remove("hidden");
            element2.innerHTML = `
                <span class="hand-label">2 Mani</span>
                <span class="dmg-value">${displayItem.danno2H}</span>
                ${dmgTypes}`;
        } else {
            element2.classList.add("hidden");
        }
    } else {
        element1.classList.add("hidden");
        element2.classList.add("hidden");
    }
}

function renderWeaponSubStats() {
    const element = document.getElementById("cdo-item-w-substats");
    switch (displayItem.categoria) {
        case 'arma':
            // element.classList.add("cols-3");
            // <div class="substat-cell"><span CLASS="k">Car. Arma</span><span class="v" id="cdo-item-car-arma">${displayItem.carArma}</span></div>
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Portata</span><span class="v" id="cdo-item-portata">${displayItem.portata}</span></div>
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${displayItem.ingombro}</span></div>`;
            break;
        case 'armatura':
            // element.classList.remove("cols-3");
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Addestramento</span><span class="v" id="cdo-item-portata">${displayItem.addArmatura}</span></div>
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${displayItem.ingombro}</span></div>`;
            break;
        case 'scudo':
            // element.classList.remove("cols-3");
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${displayItem.ingombro}</span></div>`;
    }
}

function renderWeaponAttributes() {
    const element = document.getElementById("cdo-item-weapon-attr");
    if (Object.keys(displayItem.displayData.attributiArma).length > 0) {
        element.classList.remove("hidden");
        element.children[1].innerHTML = Object.entries(displayItem.displayData.attributiArma).map(([key, value]) =>
            `<div class="attr-chip"><span class="attr-k">${key}</span><span class="attr-v">${NUM_FORMATTER.format(value)}</span></div>`).join('');

    } else {
        element.classList.add("hidden");
    }
}

function renderGeneralAttributes() {
    const element = document.getElementById("cdo-item-general-attr");
    if (Object.keys(displayItem.displayData.attributi).length > 0) {
        element.classList.remove("hidden");
        element.children[1].innerHTML = Object.entries(displayItem.displayData.attributi).map(([key, value]) =>
            `<div class="attr-chip passive"><span class="attr-k">${key}</span><span class="attr-v">${NUM_FORMATTER.format(value)}</span></div>`).join('');

    } else {
        element.classList.add("hidden");
    }
}

function renderRunes() {
    const element = document.getElementById("cdo-item-runes");
    if (displayItem.displayData?.RuneInstallate?.length > 0) {
        element.classList.remove("hidden");
        element.innerHTML = displayItem.displayData.RuneInstallate.map((r, index) => `
            <div class="rune-row">
                <img class="rune-icon" src="${r.iconAsset}" alt="${r.nomeDecorativo}">
                <div class="rune-info">
                    <a href="#" class="rune-spell-link" onclick="apriDialogDescrizioneRuna(event, ${index})">${r.nomeDecorativo}</a>
                    <div class="rune-meta">
                        <span>Livello ${r.livello}</span>
                        <span>Cariche ${r.cariche}${r.maxCariche ? '/' + r.maxCariche : ''}</span>
                    </div>
                </div>
            </div>`).join('');
    } else {
        element.classList.add("hidden");
    }
}

function renderDescription() {
    const descriptionEl = document.getElementById("cdo-item-description");
    const flavourEl = document.getElementById("cdo-item-flavour-text");
    if ((displayItem.descrizione?.length <= 0) && (displayItem.flavour?.length <= 0)) {
        descriptionEl.parentElement.classList.add("hidden");
        return;
    } else {
        descriptionEl.parentElement.classList.remove("hidden");
    }
    if (displayItem.descrizione?.length > 0) {
        descriptionEl.classList.remove("hidden");
        descriptionEl.innerHTML = displayItem.descrizione.map(d => `<p>${d}</p>`).join('');
    } else {
        descriptionEl.classList.add("hidden");
    }
    if (displayItem.flavour?.length > 0) {
        flavourEl.classList.remove("hidden");
        flavourEl.innerHTML = displayItem.flavour.map(f => `<p>${f}</p>`).join('');
    } else {
        flavourEl.classList.add("hidden");
    }
}

async function buildDisplayItem(originalItem) {
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/buildDisplayDataFromItem', { method: 'POST', body: originalItem })
    displayItem = await response.json();
}


function updateSectionBorders() {
    const sections = document.querySelectorAll('.item-section');
    const visibleSections = Array.from(sections).filter(s => !s.classList.contains('hidden'));
    sections.forEach(s => s.classList.remove('last-visible'));
    if (visibleSections.length > 0) {
        visibleSections.at(-1).classList.add('last-visible');
    }
}

function setAndRenderDisplayItem(item){
    displayItem = item;
    fillDettagliOggetto();
}

async function checkAutofillOggetto() {
    const originalEl = document.getElementById("auto-fill-oggetto");
    if (!originalEl?.dataset.oggettojson)
        return;
    const itemJson = originalEl.dataset.oggettojson;
    const itemObj = JSON.parse(itemJson);
    if (itemJson.displayData) {
        displayItem = itemObj;
    } else {
        await buildDisplayItem(itemJson);
    }
    fillDettagliOggetto();
}

checkAutofillOggetto();


async function apriDialogDescrizioneRuna(event, runaIndex) {
    event.stopPropagation();
    const runa = displayItem.displayData.RuneInstallate[runaIndex];
    const bodyStr = JSON.stringify({ item: runa });
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/dialogConsumableDetails', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}

async function linkItemToChat() {
    const bodyStr = JSON.stringify({ jsonItem: displayItem });
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/linkOggettoInChat', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}