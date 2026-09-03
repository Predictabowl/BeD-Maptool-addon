const ICONS = {
    T: { src: 'lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png', alt: 'Taglio' },
    B: { src: 'lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png', alt: 'Botta' },
    P: { src: 'lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png', alt: 'Punta' }
};

let weapons = [];
let powers = [];
let otherValues;
const NUM_FORMATTER = new Intl.NumberFormat('it-IT', { signDisplay: 'always' });
const TOKEN_ID = document.body.dataset.tokenid;
const TRIANGLE_RIGHT = `
    <svg viewBox="0 0 24 24" width="8" height="8" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
    </svg>`;

const state = { activeWeapon: 1, nextAttackWeapon: 1 };

function dmgIcons(types) {
    return types.map(t => `<img src="${ICONS[t].src}" alt="${ICONS[t].alt}">`).join('');
}

function weaponPanelHTML(w) {
    if (w.kind === 'shield') {
        return `
                <div class="weapon-name">${w.name}</div>
                <div class="k" style="font-size:12px; opacity:0.6; margin-bottom:8px;">Nessun bonus offensivo &mdash; solo bonus passivi</div>
                <div class="stat-grid">
                    <div class="stat-cell"><span class="k">LD</span><span class="v">${NUM_FORMATTER.format(w.ldBonus)}</span></div>
                    <div class="stat-cell"><span class="k">Parare</span><span class="v">${NUM_FORMATTER.format(w.parareBonus)}</span></div>
                    <div class="stat-cell"><span class="k">Schivare</span><span class="v">${NUM_FORMATTER.format(w.schivareBonus)}</span></div>
                </div>`;
    }
    return `
            <div class="weapon-name">${w.name}</div>
            <div class="damage-line"><span>${w.dmg}</span>${dmgIcons(w.dmgTypes)}</div>
            <div class="stat-grid">
                <div class="stat-cell"><span class="k">LA</span><span class="v">${w.LA}</span></div>
                <div class="stat-cell"><span class="k">PA Attacco</span><span class="v">${w.paAtt}</span></div>
                <div class="stat-cell"><span class="k">Tempo Att.</span><span class="v">${w.tempoAtt}</span></div>
                <div class="stat-cell"><span class="k">Critico</span><span class="v">${w.crit} <small>(${w.critProb}%)</small></span></div>
                <div class="stat-cell"><span class="k">P.Critico</span><span class="v">${w.pcrit}%</span></div>
                <div class="stat-cell"><span class="k">Portata</span><span class="v">${w.portata}</span></div>
                <div class="stat-cell"><span class="k">LA Spalle</span><span class="v">${NUM_FORMATTER.format(w.laSpalle)}</span></div>
                <div class="stat-cell"><span class="k">Penetrazione</span><span class="v">${w.pen}</span></div>
                <div class="stat-cell"><span class="k">Car. Arma</span><span class="v" style="font-size:13px;">${w.carA}</span></div>
            </div>`;
}

function renderArmi() {
    // const weapons = STYLES[state.style].weapons;
    const toggleEl = document.getElementById('armiToggle');
    const panelEl = document.getElementById('armiPanel');

    if (weapons.length > 1) {
        toggleEl.style.display = 'flex';
        toggleEl.innerHTML = weapons.map(w =>
            `<button class="${w.id === state.activeWeapon ? 'active' : ''}" onclick="setActiveWeapon(${w.id})">${w.name}${w.id === state.nextAttackWeapon ? '<span class="next-badge" title="Prossimo attacco">'+ TRIANGLE_RIGHT+'</span>' : ''}</button>`
            // &#9654;
        ).join('');
    } else {
        toggleEl.style.display = 'none';
        toggleEl.innerHTML = '';
        state.activeWeapon = 1;
    }
    const active = weapons[state.activeWeapon - 1];
    panelEl.innerHTML = weaponPanelHTML(active);
}

function renderPoteri() {
    const trueWeapons = weapons.filter(w => w.kind === 'weapon');

    const headerRow1 = `<tr>
        <th rowspan="2">Scuola</th>
        <th rowspan="2">LMM</th>
        ${trueWeapons.map(w => `<th colspan="2">${w.name}`).join('')}
        </tr>`;
    const headerRow2 = `<tr>${trueWeapons.map(() => '<th>LL</th><th>CD</th></th>').join('')}</tr>`;

    const isWeap2 = trueWeapons.length > 1;
    const bodyRows = powers.map(s => {
        return `<tr><td class="school-name">${s.name}</td><td>${s.LMM}</td>
            <td>${s.LL1}</td><td>${s.CD1}</td>
            ${isWeap2 ? `<td>${s.LL2}</td><td>${s.CD2}</td>` : ""}
            </tr>`;
    }).join('');

    document.getElementById('poteriTable').innerHTML = `<thead>${headerRow1}${headerRow2}</thead><tbody>${bodyRows}</tbody>`;
}

function renderNonWeaponValues(){
    document.getElementById("VA").innerHTML = `${otherValues.va} <small>(${otherValues.tempoPercent}%)</small>`;
    document.getElementById("mancare").innerHTML = `${otherValues.mancare} <small>(${otherValues.mancarePercent}%)</small>`;
    document.getElementById("LD-T").textContent = otherValues.ld_t;
    document.getElementById("LD-B").textContent = otherValues.ld_b;
    document.getElementById("LD-P").textContent = otherValues.ld_p;
    document.getElementById("schivare").innerHTML =`${otherValues.schivare} <small>(${otherValues.schivarePercent}%)</small>`;
    document.getElementById("parare").innerHTML = `${otherValues.parare} <small>(${otherValues.pararePercent}%)</small>`;
    document.getElementById("elusione").textContent = otherValues.elusione;
    document.getElementById("ts-rif").textContent = otherValues.ts_rif;
    document.getElementById("ts-tem").textContent = otherValues.ts_tem;
    document.getElementById("ts-vol").textContent = otherValues.ts_vol;
    document.getElementById("res-acqua").textContent = otherValues.res_acqua;
    document.getElementById("res-aria").textContent = otherValues.res_aria;
    document.getElementById("res-fuoco").textContent = otherValues.res_fuoco;
    document.getElementById("res-terra").textContent = otherValues.res_terra;
    document.getElementById("res-arcano").textContent = otherValues.res_arcano;
    document.getElementById("res-mentale").textContent = otherValues.res_mentale;
    document.getElementById("res-negativo").textContent = otherValues.res_negativo;
    document.getElementById("res-positivo").textContent = otherValues.res_positivo;
    document.getElementById("res-fisico").textContent = otherValues.res_fisico;
    document.getElementById("iniziativa").textContent = otherValues.iniziativa;
    document.getElementById("tempo-movimento").textContent = otherValues.mov_time;
    document.getElementById("concentrazione").textContent = otherValues.concentrazione;
    document.getElementById("perturbazione").textContent = otherValues.perturbazione;
    document.getElementById("MDI").textContent = `${otherValues.mdi}%`;
    document.getElementById("MDR").textContent = `${otherValues.mdr}%`;
    document.getElementById("MCG").textContent = `${otherValues.mcg}%`;
    document.getElementById("MCR").textContent = `${otherValues.mcr}%`;
    document.getElementById("styleSelect").textContent = otherValues.stile;
}

async function buildArmi() {
    const tokenId = document.body.dataset.tokenid;
    let bodyStr = JSON.stringify([tokenId, 1]);
    let response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/SchedaPersWeapon', { method: 'POST', body: bodyStr });
    weapons[0] = await response.json();

    bodyStr = JSON.stringify([tokenId, 2]);
    response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/SchedaPersWeapon', { method: 'POST', body: bodyStr });
    let weapon2 = await response.json();
    if (Object.keys(weapon2).length < 1) {
        bodyStr = JSON.stringify([tokenId]);
        response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/SchedaPersShield', { method: 'POST', body: bodyStr });
        weapon2 = await response.json();
    }

    if (Object.keys(weapon2).length > 0) {
        weapons[1] = weapon2;
    } else {
        weapons.splice(1, 1);
    }


    bodyStr = JSON.stringify([tokenId]);
    response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/combat/getArmaDaUsare', { method: 'POST', body: bodyStr });
    const weaponId = await response.text();
    state.nextAttackWeapon = Number.parseInt(weaponId);
    renderArmi();
    buildPoteri();
}

async function buildPoteri() {
    const bodyStr = JSON.stringify([document.body.dataset.tokenid]);
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/SchedaPersPowers', { method: 'POST', body: bodyStr });
    powers = await response.json();
    renderPoteri();
}

async function buildNonWeaponValues() {
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/CompileSchedaPersonaggioData', { method: 'POST', body: JSON.stringify([TOKEN_ID]) });
    otherValues = await response.json();
    renderNonWeaponValues();
}

async function setActiveWeapon(id) {
    // this one set the active weapon as the to use when casting powers
    // if (state.stile === "1A") {
    //     setNextAttackWeapon(id);
    //     const bodyStr = JSON.stringify([TOKEN_ID, id-1]);
    //     fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/powers/setPoteriLancioOverride', { method: 'POST', body: bodyStr });
    //     return;
    // }
    state.activeWeapon = id;
    renderArmi();
}

/* Called from the MapTool backend when the alternating-attack queue
   advances. Switches to the Armi tab, focuses that weapon's panel,
   and marks it with the pulsing badge - independent of activeWeapon,
   so a manual peek at the other weapon's stats won't move the marker. */
function setNextAttackWeapon(weaponId) {
    state.nextAttackWeapon = weaponId;
    state.activeWeapon = weaponId;
    // showTab('armi'); //uncomment if you want to focus on the tab
    renderArmi();
}

// Unused right now
function setStyle(styleKey) {
    state.stile = styleKey;
    // here need a call to the backend to change stile
    buildArmi();
}

function showTab(name) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + name));
}

async function updateDannoArmi() {
    const updatePromises = weapons.map(async (weapon, index) => {
        const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/crud/getDannoArma', { method: 'POST', body: JSON.stringify([TOKEN_ID, index + 1]) });
        weapon.dmg = await response.text();
    });
    await Promise.all(updatePromises);
    renderArmi();
}


function buildSheet() {
    buildArmi();
    buildNonWeaponValues();
}

buildSheet();
