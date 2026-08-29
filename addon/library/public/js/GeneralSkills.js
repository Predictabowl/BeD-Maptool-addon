let isSecret = 1; // "secret" | "public"

function toggleVisibility() {
    const secretBtn = document.getElementById("btn-secret");
    secretBtn.classList.toggle("active");
    if (secretBtn.classList.contains("active")) {
        isSecret = 1;
    } else {
        isSecret = 0;
    }
}

async function rollSkill(skillId) {
    const circostanza = parseInt(document.getElementById("circostanza").value, 10) || 0;
    const tokenId = document.body.dataset.tokenid;
    const skillRow = document.getElementById(skillId);
    const skillName = skillRow.querySelector('.skill-name').textContent;
    const bodyStr = JSON.stringify({ source: tokenId, capacita: skillId, circostanza: circostanza, segreto: isSecret });
    const response = await fetch('lib://it.aldinucci.piero.bed.maptool.ruleset/mobs/rollCapacita', { method: 'POST', body: bodyStr });
    const responseData = await response.json();
    const otherMods = responseData.mods;
    const skillVal = responseData.skill;
    const formatter = new Intl.NumberFormat('it-IT', {
        signDisplay: 'always'
    });

    const resultEl = document.getElementById("last-roll-result");
    resultEl.classList.remove("empty");
    if(isSecret === 0) {
        resultEl.textContent = `${skillName}: ${responseData.roll}${formatter.format(skillVal)}${otherMods !== 0 ? formatter.format(otherMods) : ""} = ${responseData.total}`;
    } else {
        resultEl.textContent = `${skillName}: 1d20${formatter.format(skillVal)}${otherMods !== 0 ? formatter.format(otherMods) : ""} = Segreto`;
    }

    // Circumstance modifier is consumed after one roll, per spec
    document.getElementById("circostanza").value = 0;
}

