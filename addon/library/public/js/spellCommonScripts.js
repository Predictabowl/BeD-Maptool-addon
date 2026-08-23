async function apri_dialog_descrizione(event, token, spellId) {
    event.stopPropagation();
    const bodyStr = JSON.stringify({ token: token, libSpell: spellId });
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/dialogSpellDetails', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}


async function toggleTheme(token, frameName){
    const body = document.body;
    body.classList.toggle('light-mode');
    let lMode = body.classList.contains("light-mode");
    const bodyStr = JSON.stringify({ tokenId: token, isLight: lMode, frame: frameName });
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/saveSpellCardTheme', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}

async function isCombat() {
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/utility/isCombat', { method: 'POST'});
    const bCombat = await response.text();
    return bCombat == 1;
}