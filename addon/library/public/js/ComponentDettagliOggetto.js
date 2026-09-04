const NUM_FORMATTER = new Intl.NumberFormat('it-IT', { signDisplay: 'always' });

function fillDettagliOggetto(jsonId) {
    const item = JSON.parse(document.getElementById(jsonId).dataset.oggettojson);
    document.getElementById("cdo-item-name").textContent = item.nome;
    const iconEl = document.getElementById("cdo-item-icon");
    iconEl.setAttribute("alt", item.nome);
    iconEl.setAttribute("src", item.icona);
    renderItemTags(item);
    renderWeaponBlock(item);
    renderWeaponAttributes(item);
    renderGeneralAttributes(item);
    renderRunes(item);
    // getDmgTypeIcon();
}

function renderItemTags(item) {
    document.getElementById("cdo-item-tags").innerHTML = `<span class="item-tag">
            ${item.categoria}
        </span>${item.tipoArma ? '<span class="item-tag">' + item.tipoArma + '</span>' : ''}
        ${item.carArma ? '<span class="item-tag">' + item.carArma + '</span>' : ''}`;
}

function renderWeaponBlock(item) {
    const weaponBlock = document.getElementById("cdo-item-weapon-block");
    if(['arma', 'armatura', 'scudo'].includes(item.categoria)) {
        weaponBlock.classList.remove("hidden");
        renderWeaponDmg(item);
        renderWeaponSubStats(item);
    } else {
        weaponBlock.classList.add("hidden");
    }
}

function renderWeaponDmg(item) {
    const element1 = document.getElementById("cdo-item-1h-dmg");
    const element2 = document.getElementById("cdo-item-2h-dmg");
    if(item.categoria == 'arma') {
        const dmgTypes = item.tipoDanno.map(d => `<img src="${getDmgTypeIcon(d)}" alt="${d}">`).join('');
        if(item.danno1H != 0) {
            element1.classList.remove("hidden");
            element1.innerHTML = `
                <span class="hand-label">1 Mano</span>
                <span class="dmg-value">${item.danno1H}</span>
                ${dmgTypes}`;
            } else {
            element1.classList.add("hidden");
        }
        if(item.danno2H != 0) {
            element2.classList.remove("hidden");
            element2.innerHTML = `
                <span class="hand-label">2 Mani</span>
                <span class="dmg-value">${item.danno2H}</span>
                ${dmgTypes}`;
            } else {
            element2.classList.add("hidden");
        }
    } else {
        element1.classList.add("hidden");
        element2.classList.add("hidden");
    }
}

function renderWeaponSubStats(item) {
    const element = document.getElementById("cdo-item-w-substats");
    switch(item.categoria) {
        case 'arma':
            // element.classList.add("cols-3");
            // <div class="substat-cell"><span CLASS="k">Car. Arma</span><span class="v" id="cdo-item-car-arma">${item.carArma}</span></div>
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Portata</span><span class="v" id="cdo-item-portata">${item.portata}</span></div>
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${item.ingombro}</span></div>`;
            break;
        case 'armatura':
            // element.classList.remove("cols-3");
            console.log(item);
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Addestramento</span><span class="v" id="cdo-item-portata">${item.addArmatura}</span></div>
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${item.ingombro}</span></div>`;
            break;
        case 'scudo':
            // element.classList.remove("cols-3");
            element.innerHTML = `
            <div class="substat-cell"><span class="k">Ingombro</span><span class="v" id="cdo-item-ingombro">${item.ingombro}</span></div>`;
    }
}

function renderWeaponAttributes(item) {
    const element = document.getElementById("cdo-item-weapon-attr");
    if(Object.keys(item.attributiArma).length > 0) {
        element.classList.remove("hidden");
        element.children[1].innerHTML = Object.entries(item.attributiArma).map(([key,value]) =>
            `<div class="attr-chip"><span class="attr-k">${key}</span><span class="attr-v">${value}</span></div>`).join('');
        
    } else {
        element.classList.add("hidden");
    }
}

function renderGeneralAttributes(item) {
    const element = document.getElementById("cdo-item-general-attr");
    if(Object.keys(item.attributi).length > 0) {
        element.classList.remove("hidden");
        element.children[1].innerHTML = Object.entries(item.attributi).map(([key,value]) =>
            `<div class="attr-chip passive"><span class="attr-k">${key}</span><span class="attr-v">${value}</span></div>`).join('');
        
    } else {
        element.classList.add("hidden");
    }
}

function renderRunes(item){
    const element = document.getElementById("cdo-item-runes");
    if(item.datiCustom?.RuneInstallate?.length > 0) {
        element.classList.remove("hidden");
        element.innerHTML = item.datiCustom.RuneInstallate.map(r => `
            <div class="rune-row">
                <img class="rune-icon" src="${r.icona}" alt="${r.name}">
                <div class="rune-info">
                    <a href="#" class="rune-spell-link">${r.name}</a>
                    <div class="rune-meta">
                        <span>Livello ${r.livello}</span>
                        <span>Cariche ${r.cariche}${r.maxCariche? '/'+r.maxCariche : ''}</span>
                    </div>
                </div>
            </div>`);
    } else {
        element.classList.add("hidden");
    }
}

async function openDescription() {
    
}
// [h: sNome = json.get(oOggetto, "nome")]
// [h: sDialog = "DialogInfoOggetto-"+sNome]
// [h: jAttributi = json.get(oOggetto, "attributi")]
// [h: jAttributiArma = json.get(oOggetto, "attributiArma")]
// [h: jDatiCustom = json.get(oOggetto, "datiCustom")]
// [h, if(json.contains(jDatiCustom, "RuneInstallate")): aRune = json.get(jDatiCustom, "RuneInstallate"); aRune = "[]"]

function checkAutofillOggetto() {
    if(document.getElementById("auto-fill-oggetto"))
        fillDettagliOggetto("auto-fill-oggetto");
}

checkAutofillOggetto();