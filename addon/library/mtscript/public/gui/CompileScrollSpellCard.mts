[h: oToken = arg(0)]
[h: oPergamena = arg(1)]
[h: bEquipped = arg(2)]

[h: index = json.get(oPergamena, 'index')]

<div class="spell-card" data-type="pergamena" data-index="[r: index]">
    [h: spellId = json.get(oPergamena, "libName")]
    [h, macro("consumables/getUseItemPrice@this"): json.append(oToken, spellId, "PERGAMENA")]
    [h: oPergPrice = macro.return]

    <input type="image" class="spell-icon-btn" title="Usa" src="[r: fetchSpellImage(spellId)]" 
        onclick='loadParams(this)' data-spellname="[r: spellId]" data-slotVeloce="[r: index]">
    [h: sJScriptSpell = strformat('apriDialogDescrizioneConsumable(event, "%{index}")')]
    <button type="button" class='spell-name-badge [r: fetchConsumableProp(spellId, 'tipo')]' onclick='[r: sJScriptSpell]'>
        [r: fetchConsumableProp(spellId, 'nome_decorativo')]
    </button>
    <div class="spell-stats-grid">
        <div class="stat-box">
            <span class="stat-label">Usi:</span>
            <span class="stat-value toxicFont">1</span>
        </div>
        <div class="stat-box"><span class="stat-label">Liv:</span>
            [h, macro("consumables/getLivelloOggetto@this"): json.append(oPergamena, oToken)]
            <spanclass="stat-value genericStatFont">[r: macro.return]
            </span>
        </div>
        <div class="stat-box">
            <span class="stat-label">TE:</span>
            <span class="stat-value tempoFont">
                [h, macro("consumables/getItemTime@this"): json.append(oToken, spellId)]
                [r: macro.return]
            </span>
        </div>
        <div class="stat-box">
            <span class="stat-label">PA:</span>
            <span class="stat-value azioneFont">[r: json.get(oPergPrice, "PA")]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">PP:</span>
            <span class="stat-value ppFont">[r: json.get(oPergPrice, "PP")]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">MM:</span>
            <span class="stat-value mmFont">[r: json.get(oPergPrice, "MM")]</span>
        </div>
    </div>

    [r, if(bEquipped), code:{
        <button class="slot-toggle-btn unequip-btn" title="Rimuovi dalle Quickslot"
            onclick="unequipItem(this)">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                stroke-width="3" stroke-linecap="round">
                <line x1="4" y1="12" x2="20" y2="12" />
            </svg>
        </button>
    };{
        <button class="slot-toggle-btn equip-btn" title="Equipaggia in Quickslot"
        onclick="equipItem(this)">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
            stroke-width="3" stroke-linecap="round">
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
        </button>
    }]
</div>