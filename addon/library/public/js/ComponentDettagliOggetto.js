

function fillDettagliOggetto(jOggetto) {
    const item = JSON.parse(jOggetto);
    document.getElementById("cdo-item-name").textContent = item.nome;
    document.getElementById("cdo-item-tags").innerHTML = buildItemTags(item);
    renderWeaponBlock(item);
    // getDmgTypeIcon();
}

function buildItemTags(item) {
    if(item.tipoArma) {
        return `<span class="item-tag">${item.tipoArma}</span>`
    }
    return "";
}

function renderWeaponBlock(item) {
    const weaponBlock = document.getElementById("cdo-item-weapon-block");
    if(item.danno1H) {
        weaponBlock.classList.remove("hidden");
        render1HandedDmg(item);
        render2HandedDmg(item);
        renderWeaponAttributes(item);
    } else {
        weaponBlock.classList.add("hidden");
    }
}

function render1HandedDmg(item) {
    const element = document.getElementById("cdo-item-1h-dmg");
    if(item.danno1H == 0) {
        element.classList.add("hidden");
        element.children[1].textContent = item.danno1H;
    } else {
        element.classList.remove("hidden");
    }
}

function render2HandedDmg(item) {
    const element = document.getElementById("cdo-item-2h-dmg");
    if(item.danno2H == 0) {
        element.classList.add("hidden");
        element.children[1].textContent = item.danno2H;
    } else {
        element.classList.remove("hidden");
    }
}

function renderWeaponStats(item) {
    const element = document.getElementById("cdo-item-weapon-attr");
}

function renderWeaponAttributes(item) {
    const element = document.getElementById("cdo-item-weapon-attr");
    if(item.attributiArma) {
        element.classList.add("hidden");
        element.children[1].innerHTML = item.attributiArma.map(([k,v]) => 
            `<div class="attr-chip"><span class="attr-k">${k}</span><span class="attr-v">${v}</span></div>`
        ).join('');
            
    } else {
        element.classList.remove("hidden");
    }
}

// [h: sNome = json.get(oOggetto, "nome")]
// [h: sDialog = "DialogInfoOggetto-"+sNome]
// [h: jAttributi = json.get(oOggetto, "attributi")]
// [h: jAttributiArma = json.get(oOggetto, "attributiArma")]
// [h: jDatiCustom = json.get(oOggetto, "datiCustom")]
// [h, if(json.contains(jDatiCustom, "RuneInstallate")): aRune = json.get(jDatiCustom, "RuneInstallate"); aRune = "[]"]