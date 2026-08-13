async function apri_dialog_descrizione(event, token, spellId) {
    event.stopPropagation();
    const bodyStr = JSON.stringify({ token: token, libSpell: spellId });
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/dialogDescrizioneSpell', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}