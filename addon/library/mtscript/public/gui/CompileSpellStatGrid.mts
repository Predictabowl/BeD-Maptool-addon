[h: oToken = arg(0)]
[h: spellId = arg(1)]

[h, macro("gui/CompileSpellCardValues@this"):json.append(oToken,spellId)]
[h: oSpellData = macro.return]

[h: sJScriptSpell = strformat('apri_dialog_descrizione(event, "%{oToken}", "%{spellId}")')]
[h: sNameInc = fetchSpellProp( spellId,"nome_decorativo")]
[h: sSpellType = fetchSpellProp( spellId,"tipo")]
<div class='spell-name-badge [r: sSpellType]' onclick='[r: sJScriptSpell]'>
    [r: sNameInc]
</div>
<div class="spell-stats-grid">
    <div class="stat-box">
        <span class="stat-label">M:</span>
        [h: manaMant = json.get(oSpellData,"ManaMant")]
        [h, if(manaMant>0): manaMant="†"+manaMant; manaMant=""]
        [r: strformat("<span class='stat-value manaFont'>%s%{manaMant}</span>", json.get(oSpellData, "mana"))]
    </div>
    <div class="stat-box">
        [h: pfMant = json.get(oSpellData,"PFMant")]
        [h, if(pfMant>0): pfMant="†"+pfMant; pfMant=""]
        <span class="stat-label">PF:</span>
        <span class="stat-value faticaFont">[r: json.get(oSpellData, "PF")][r: pfMant]</span>
    </div>
    <div class="stat-box">
        <span class="stat-label">TE:</span>
        <span class="stat-value tempoFont">[r: json.get(oSpellData, "tempo")]</span>
    </div>
    <div class="stat-box">
        <span class="stat-label">PA:</span>
        <span class="stat-value azioneFont">[r: json.get(oSpellData, "PA")]</span>
    </div>
    <div class="stat-box">
        <span class="stat-label">PP:</span>
        [h: ppMant = json.get(oSpellData,"PPMant")]
        [h, if(ppMant>0): ppMant="†"+ppMant; ppMant=""]
        <span class="stat-value ppFont">[r: json.get(oSpellData, "PP")][r: ppMant]</span>
    </div>
    <div class="stat-box">
        <span class="stat-label">MM:</span>
        <span class="stat-value mmFont">[r: json.get(oSpellData, "MM")]</span>
    </div>
</div>