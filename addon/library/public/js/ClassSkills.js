async function apriDescrizioneSkill(event, tokenId, skillId) {
    event.stopPropagation();
    const bodyStr = JSON.stringify({ token: tokenId, libAbilita: skillId });
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/dialogDescrizioneAbilita', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}

function pulsanteAttivaAbilita(event, skillId) {
    if (event.button == 2) {
        var elem = document.getElementById('var-input');
        elem.setAttribute('value', 'Autocast');
        document.getElementById('idAbilitaAttivata').setAttribute('value', skillId);
        document.getElementById('formAttivaAbilita').submit();
    } else {
        toggleAttivaAbilita(event, skillId);
    }
}

async function toggleAttivaAbilita(event, skillId){
    const bodyStr = JSON.stringify([ getTokenId(), skillId]);
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/toggleAbilitaInUso', { method: 'POST', body: bodyStr });
    const data = await response.json();
    if(data.interrupt == 1) {
        return;
    }
    const card = event.target.closest(".spell-card");
    if(data.isActive == 1) {
        card.classList.add("abilitaOn");
    } else {
        card.classList.remove("abilitaOn");
    }
}

function getTokenId(){
    return document.body.dataset.tokenid;
}