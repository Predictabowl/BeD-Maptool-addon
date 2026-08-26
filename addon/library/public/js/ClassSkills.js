async function apriDescrizioneSkill(event, skillId) {
    event.stopPropagation();
    const bodyStr = JSON.stringify({ token: getTokenId(), libAbilita: skillId });
    fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/dialogDescrizioneAbilita', { method: 'POST', body: bodyStr }).catch(err => console.error('Dialog request failed:', err));
}

function pulsanteAttivaAbilita(event, skillId) {
    if (event.button == 2) {
        const elem = document.getElementById('var-input');
        elem.setAttribute('value', 'Autocast');
        document.getElementById('idAbilitaAttivata').setAttribute('value', skillId);
        document.getElementById('formAttivaAbilita').submit();
    } else {
        toggleAttivaAbilita(event, skillId);
    }
}

async function toggleAttivaAbilita(event, skillId){
    const clickedButton = event.target;
    const bodyStr = JSON.stringify([ getTokenId(), skillId]);
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/gui/toggleAbilitaInUso', { method: 'POST', body: bodyStr });
    const data = await response.json();
    if(data.interrupt == 1) {
        clickedButton.disabled = true;
        setTimeout(() => {
            clickedButton.disabled = false;
        }, 2000);
        // return;
    }
    // setSkillActiveStatus(skillId, data.isActive);
}

function getTokenId(){
    return document.body.dataset.tokenid;
}

function updateHeroicBar(heroicPoints){
    document.getElementById("heroic-points").textContent = heroicPoints + "/1000";
    document.getElementById("heroic-fill").style.width = (heroicPoints/10) + '%';
    const buttons = document.querySelectorAll('[data-button-type="heroic-skill"]');
    const track = document.getElementById("heroic-track");
    if(heroicPoints >= 1000) {
        track.classList.add("heroic-full");
        buttons.forEach(b => {
            b.disabled=false;
        });
    } else {
        track.classList.remove("heroic-full");
        buttons.forEach(b => {
            b.disabled=true;
        });
    }
}

function setSkillActiveStatus(skillId, status){
    const card = document.getElementById(skillId);
    if(status == 1) {
        card.classList.add("abilitaOn");
    } else {
        card.classList.remove("abilitaOn");
    }
}

function refreshAllValues(activeSkillIds, heroicPoints){ 
    const cards = document.querySelectorAll('.spell-card');
    const ids = Array.from(cards).map(el => el.id).filter(id => id !== "");
    const activeIds = new Set(activeSkillIds.split(',').map(item => item.trim()));

    ids.forEach(skillId => {
        const isActive = activeIds.has(skillId);
        const status = isActive ? 1 : 0;
        setSkillActiveStatus(skillId, status);
    });
    updateHeroicBar(heroicPoints);
}

function setResourceValue(skillId, resource, value){
    const parent = document.getElementById(skillId);
    if (!parent) return;

    const targetChildren = parent.querySelectorAll(`[data-resource-type="${resource}"]`);
    targetChildren.forEach(child => child.textContent = value);
}