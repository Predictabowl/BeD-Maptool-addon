[h: oToken = arg(0)]
[h: skillId = arg(1)]

[h: oAbParam = macro.args]

[h: sTipo = upper(fetchClassSkillProp(skillId,"tipo"))]
[h, macro("gui/getSkillTypeClass@this"): sTipo]
[h: classType = macro.return]
[h: sNome = fetchClassSkillProp(skillId,"nome_decorativo")]
[h, macro("class_skills/isAbilitaInUso@this"): oAbParam]
[h: bInUso = macro.return]
[h, macro("class_skills/getAutocastAbilita@this"): oAbParam]
[h: bAutocast = macro.return]

[h: sImage = fetchClassSkillImage(skillId)]
[h: sFluff = strformat("<img src='%{sImage}' class='spellCastButton' title='Attiva/Disattiva Abilità'/>")]
[h: jSCall = strformat('pulsanteAttivaAbilita(event,"%s")',skillId)]
[h: sMacroL = strformat("<a href='#' onmouseup='%s' class='spellCast'>%{sFluff}</a>", jScall)]


[h, if(bInUso): sAttiva = "abilitaOn"; sAttiva=""]
[h, if(bAutocast): sAutocast = "abilitaAutocast"; sAutocast = ""]
[h: sActive = strformat("%s %s", sAttiva, sAutocast)]
[h: jParams = json.append(oToken,skillId)]
[h, macro("class_skills/getAbilitaMana@this"): jParams]
[h: iMana = macro.return]
[h, macro("class_skills/getAbilitaPF@this"): jParams]
[h: iPF = macro.return]
[h, macro("class_skills/getAbilitaPA@this"): jParams]
[h: iPA = macro.return]
[h, macro("class_skills/getAbilitaPP@this"): jParams]
[h: iPP = macro.return]
[h, macro("class_skills/getAbilitaMM@this"): jParams]
[h: iMM = macro.return]

[h: sJScriptSpell = strformat('apriDescrizioneSkill(event, "%{skillId}")')]

<div class="spell-card [r: sActive]" id="[r: skillId]">
    [h: jSCall = strformat("pulsanteAttivaAbilita(event,'%{skillId}')")]
    <input type="image" class="spell-icon-btn" title="Usa" src="[r: fetchClassSkillImage(skillId)]" onmouseup="[r: jsCall]">
    <button type="button" class='skill-name-badge [r: classType]' onclick='[r: sJScriptSpell]'>
        [r: sNome]
    </button>
    <div class="spell-stats-grid">
        <div class="stat-box">
            <span class="stat-label">M:</span>
            <span class='stat-value manaFont' data-resource-type="mana">[r: iMana]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">PF:</span>
            <span class="stat-value faticaFont" data-resource-type="PF">[r: iPF]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">Liv:</span>
            <span class="stat-value genericStatFont">[r: getLivelloAbilita(oToken, skillId)]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">PA:</span>
            <span class="stat-value azioneFont" data-resource-type="PA">[r: iPA]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">PP:</span>
            <span class="stat-value ppFont" data-resource-type="PP">[r: iPP]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">MM:</span>
            <span class="stat-value mmFont" data-resource-type="MM">[r: iMM]</span>
        </div>
    </div>
</div>