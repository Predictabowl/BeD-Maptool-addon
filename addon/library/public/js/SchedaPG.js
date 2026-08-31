const ICONS = {
    T: { src: 'lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png', alt: 'Taglio' },
    B: { src: 'lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png', alt: 'Botta' },
    P: { src: 'lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png', alt: 'Punta' }
};

let weapons = [];
let powers = [];
const NUM_FORMATTER = new Intl.NumberFormat('it-IT', { signDisplay: 'always' });
const TOKEN_ID = document.body.dataset.tokenid;

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
            `<button class="${w.id === state.activeWeapon ? 'active' : ''}" onclick="setActiveWeapon(${w.id})">${w.name}${w.id === state.nextAttackWeapon ? '<span class="next-badge" title="Prossimo attacco">&#9654;</span>' : ''}</button>`
        ).join('');
    } else {
        toggleEl.style.display = 'none';
        toggleEl.innerHTML = '';
        state.activeWeapon = 1;
    }
    const active = weapons[state.activeWeapon -1];
    panelEl.innerHTML = weaponPanelHTML(active);
}

function renderPoteri() {
    const trueWeapons = weapons.filter(w => w.kind === 'weapon');

    const headerRow1 = `<tr>
        <th rowspan="2">Scuola</th>
        <th rowspan="2">LMM</th>
        ${trueWeapons.map(w => `<th colspan="2">${w.name}</th>`).join('')}
        </tr>`;
    const headerRow2 = `<tr>${trueWeapons.map(() => '<th>LL</th><th>CD</th>').join('')}</tr>`;
    
    const isWeap2 = trueWeapons.length > 1;
    const bodyRows = powers.map(s => {
        return `<tr><td class="school-name">${s.name}</td><td>${s.LMM}</td>
            <td>${s.LL1}</td><td>${s.CD1}</td>
            ${isWeap2 ? `<td>${s.LL2}</td><td>${s.CD2}</td>` : ""}
            </tr>`;
    }).join('');

    document.getElementById('poteriTable').innerHTML = `<thead>${headerRow1}${headerRow2}</thead><tbody>${bodyRows}</tbody>`;
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
    setNextAttackWeapon(Number.parseInt(weaponId));
    buildPoteri();
}

async function buildPoteri(){
    const bodyStr = JSON.stringify([document.body.dataset.tokenid]);
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/SchedaPersPowers', { method: 'POST', body: bodyStr });
    powers = await response.json();
    renderPoteri();
}

function setActiveWeapon(id) { state.activeWeapon = id; renderArmi(); }

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

function setStyle(styleKey) {
    state.style = styleKey;
    state.activeWeapon = STYLES[styleKey].weapons[0].id;
    renderArmi();
    renderPoteri();
}

function showTab(name) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + name));
}

async function updateDannoArmi(){
    const updatePromises = weapons.map(async (weapon, index) => {
        const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/crud/getDannoArma', { method: 'POST', body: JSON.stringify([TOKEN_ID, index+1]) });
        weapon.dmg = await response.text();
    });
    await Promise.all(updatePromises);
    renderArmi();
}


function buildSheet() {
    buildArmi();
}

buildSheet();
