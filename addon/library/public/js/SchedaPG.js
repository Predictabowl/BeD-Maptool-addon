/* =========================================================
   DATA
   Weapon-dependent stats live here so the Stile switch can
   demonstrate how the number of weapon slots (and what goes
   in them) changes with the equip style. LL/CD numbers are
   illustrative only, not computed from a real formula.
   ========================================================= */
const SCHOOLS = [
    { name: 'Elementale', lmm: 7 },
    { name: 'Arcano', lmm: 3 }
];

const ICONS = {
    T: { src: '../../addon/library/public/icons/gui/slash_icon.png', alt: 'Taglio' },
    B: { src: '../../addon/library/public/icons/gui/crush_icon.png', alt: 'Botta' },
    P: { src: '../../addon/library/public/icons/gui/pierce_icon.png', alt: 'Punta' }
};

const STYLES = {
    scudo: {
        label: 'Arma e Scudo',
        weapons: [
            {
                id: 1, kind: 'weapon', name: 'Spada Lunga', dmg: '4d6+1', types: ['T', 'P'],
                LA: 14, pen: 3, crit: 18, pcrit: 150, laSpalle: 10, tempoAtt: 4, portata: 1, paAtt: 2, carA: 'Bilanciata',
                powers: { Elementale: { ll: 15, cd: 22 }, Arcano: { ll: 9, cd: 14 } }
            },
            { id: 2, kind: 'shield', name: 'Scudo Borchiato', ldBonus: 8, parareBonus: 12 }
        ]
    },
    duemani: {
        label: 'Arma a 2 Mani',
        weapons: [
            {
                id: 1, kind: 'weapon', name: 'Alabarda', dmg: '2d10+4', types: ['T', 'B'],
                LA: 16, pen: 5, crit: 12, pcrit: 140, laSpalle: 8, tempoAtt: 6, portata: 2, paAtt: 3, carA: 'Massiccia',
                powers: { Elementale: { ll: 13, cd: 19 }, Arcano: { ll: 7, cd: 11 } }
            }
        ]
    },
    distanza: {
        label: 'Arma a Distanza',
        weapons: [
            {
                id: 1, kind: 'weapon', name: 'Arco Lungo', dmg: '2d8', types: ['P'],
                LA: 11, pen: 2, crit: 15, pcrit: 130, laSpalle: 6, tempoAtt: 3, portata: 18, paAtt: 2, carA: 'Agile',
                powers: { Elementale: { ll: 10, cd: 16 }, Arcano: { ll: 5, cd: 9 } }
            }
        ]
    },
    dueArmi: {
        label: 'Due Armi',
        weapons: [
            {
                id: 1, kind: 'weapon', name: 'Ascia da Mano', dmg: '1d8+2', types: ['T'],
                LA: 13, pen: 2, crit: 16, pcrit: 140, laSpalle: 9, tempoAtt: 3, portata: 1, paAtt: 2, carA: 'Massiccia',
                powers: { Elementale: { ll: 12, cd: 18 }, Arcano: { ll: 6, cd: 10 } }
            },
            {
                id: 2, kind: 'weapon', name: 'Pugnale', dmg: '1d4+1', types: ['P'],
                LA: 10, pen: 1, crit: 22, pcrit: 160, laSpalle: 7, tempoAtt: 2, portata: 1, paAtt: 1, carA: 'Agile',
                powers: { Elementale: { ll: 11, cd: 17 }, Arcano: { ll: 5, cd: 9 } }
            }
        ]
    },
    manoLibera: {
        label: 'Arma e Mano Libera',
        weapons: [
            {
                id: 1, kind: 'weapon', name: 'Spada Corta', dmg: '1d8+3', types: ['T', 'P'],
                LA: 13, pen: 3, crit: 17, pcrit: 150, laSpalle: 9, tempoAtt: 3, portata: 1, paAtt: 2, carA: 'Bilanciata',
                powers: { Elementale: { ll: 14, cd: 20 }, Arcano: { ll: 8, cd: 13 } }
            },
            {
                id: 2, kind: 'weapon', name: 'Pugnale da Lancio', dmg: '1d4', types: ['P'],
                LA: 9, pen: 1, crit: 20, pcrit: 140, laSpalle: 6, tempoAtt: 2, portata: 6, paAtt: 1, carA: 'Agile',
                powers: { Elementale: { ll: 10, cd: 15 }, Arcano: { ll: 4, cd: 8 } }
            }
        ]
    }
};

const state = { style: 'scudo', activeWeapon: 1, nextAttackWeapon: 1 };

function dmgIcons(types) {
    return types.map(t => `<img src="${ICONS[t].src}" alt="${ICONS[t].alt}">`).join('');
}

function weaponPanelHTML(w) {
    if (w.kind === 'shield') {
        return `
                <div class="weapon-name">${w.name}</div>
                <div class="k" style="font-size:12px; opacity:0.6; margin-bottom:8px;">Nessun bonus offensivo &mdash; solo bonus passivi</div>
                <div class="stat-grid cols-2">
                    <div class="stat-cell"><span class="k">LD Bonus</span><span class="v">+${w.ldBonus}%</span></div>
                    <div class="stat-cell"><span class="k">Parare Bonus</span><span class="v">+${w.parareBonus}%</span></div>
                </div>`;
    }
    return `
            <div class="weapon-name">${w.name}</div>
            <div class="damage-line"><span>${w.dmg}</span>${dmgIcons(w.types)}</div>
            <div class="stat-grid">
                <div class="stat-cell"><span class="k">LA</span><span class="v">${w.LA}</span></div>
                <div class="stat-cell"><span class="k">Penetraz.</span><span class="v">${w.pen}</span></div>
                <div class="stat-cell"><span class="k">Critico</span><span class="v">${w.crit}%</span></div>
                <div class="stat-cell"><span class="k">P.Critico</span><span class="v">${w.pcrit}%</span></div>
                <div class="stat-cell"><span class="k">LA Spalle</span><span class="v">${w.laSpalle}</span></div>
                <div class="stat-cell"><span class="k">Tempo Att.</span><span class="v">${w.tempoAtt}</span></div>
                <div class="stat-cell"><span class="k">Portata</span><span class="v">${w.portata}</span></div>
                <div class="stat-cell"><span class="k">PA Attacco</span><span class="v">${w.paAtt}</span></div>
                <div class="stat-cell"><span class="k">Car. Arma</span><span class="v" style="font-size:13px;">${w.carA}</span></div>
            </div>`;
}

function renderArmi() {
    const weapons = STYLES[state.style].weapons;
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
        state.activeWeapon = weapons[0].id;
    }

    const active = weapons.find(w => w.id === state.activeWeapon) || weapons[0];
    panelEl.innerHTML = weaponPanelHTML(active);
}

function renderPoteri() {
    // Shows every equipped weapon side by side (no toggle) since with two
    // weapons equipped, you need both LL/CD values visible at once.
    const weapons = STYLES[state.style].weapons.filter(w => w.kind === 'weapon');

    const headerRow1 = `<tr>
                <th rowspan="2">Scuola</th>
                <th rowspan="2">LMM</th>
                ${weapons.map(w => `<th colspan="2">${w.name}</th>`).join('')}
            </tr>`;
    const headerRow2 = `<tr>${weapons.map(() => '<th>LL</th><th>CD</th>').join('')}</tr>`;

    const bodyRows = SCHOOLS.map(s => {
        const cells = weapons.map(w => {
            const p = w.powers[s.name];
            return `<td>${p.ll}</td><td>${p.cd}</td>`;
        }).join('');
        return `<tr><td class="school-name">${s.name}</td><td>${s.lmm}</td>${cells}</tr>`;
    }).join('');

    document.getElementById('poteriTable').innerHTML = `<thead>${headerRow1}${headerRow2}</thead><tbody>${bodyRows}</tbody>`;
}

function setActiveWeapon(id) { state.activeWeapon = id; renderArmi(); }

/* Called from the MapTool backend when the alternating-attack queue
   advances. Switches to the Armi tab, focuses that weapon's panel,
   and marks it with the pulsing badge - independent of activeWeapon,
   so a manual peek at the other weapon's stats won't move the marker. */
function setNextAttackWeapon(weaponId) {
    state.nextAttackWeapon = weaponId;
    state.activeWeapon = weaponId;
    showTab('armi');
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

document.getElementById('styleSelect').value = state.style;
// renderArmi();
renderPoteri();