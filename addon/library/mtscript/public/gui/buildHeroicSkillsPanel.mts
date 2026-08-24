[h: tokenId = arg(0)]

[macro("class_skills/getAbilitaEroiche@this"): tokenId]
[h: aAbilita =  macro.return]

[h, if(json.isEmpty(aAbilita)): return(0,"")]

[h: iEroe = getPuntiEroe(tokenId)]
<div class="spirit-panel">
    <div class="spirit-header">
        <div class="spirit-info">
            <h3 class="spirit-name">Abilità Eroiche</h3>

            <div class="spirit-stats-row">
                <div class="devotion-wrapper" title="Gesta Eroiche">
                    <span class="devotion-text">Gesta</span>
                    <div class="heroic-track[r, if(iEroe >= 1000): ' heroic-full']" id="heroic-track">
                        <div class="heroic-fill" id="heroic-fill" 
                            style="width: [r: iEroe/10]%;"></div>
                    </div>
                    <span class="devotion-text" id="heroic-points">[r: iEroe]/1000</span>
                </div>
            </div>
        </div>
    </div>

    <div class="spirit-body">
        <div class="grimoire-grid-container">
            [r, foreach(skillId, aAbilita, ""), code:{
                [h, macro("class_skills/isAbilitaInUso@this"): json.append(tokenId, skillId)]
                <div class="spell-card [r, if(macro.return): 'abilitaOn']" id="[r: skillId]">
                    <input type="image" class="spell-icon-btn" title="Usa" src="[r: fetchClassSkillImage(skillId)]" 
                        onmouseup="pulsanteAttivaAbilita(event,'[r: skillId]')">
                    <button type="button" class='skill-name-badge AbEroica' onclick="apriDescrizioneSkill(event, '[r: skillId]')">
                        [r: fetchClassSkillProp(skillId,"nome_decorativo")]
                    </button>
                </div>
            }]
        </div>
    </div>
</div>