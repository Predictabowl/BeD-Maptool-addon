[h: oToken = arg(0)]
[h: oRuna = arg(1)]

[h: itemId = json.get(oRuna,0)]
[h: iRuna = json.get(oRuna,1)]
[h: oOggetto = getRunaFromArma(oToken,itemId,iRuna)]
[h: spellId = json.get(oOggetto,"libName")]
[h: iCariche = getCaricheRuna(oToken,itemId,iRuna)]
<div class="spell-card" data-type="runa">
    [h, macro("consumables/getUseItemPrice@this"): json.append(oToken, spellId, "RUNA")]
    [h: oRunaPrice = macro.return]
    <input type="image" class="spell-icon-btn" title="Usa"
        src="[r: fetchSpellImage(spellId)]"
        onclick='loadParams(this)' data-macro="gui/iniziaSpellCastWrapper@this"
        data-spellname="[r: spellId]" data-nomeArma="[r: itemId]" data-slotRuna="[r: iRuna]"
        [r, if(iCariche < 1): "disabled"]>
    [h: sJScriptSpell = strformat('apriDialogDescrizioneRuna(event, this)')]
    <button type="button" class='spell-name-badge [r: fetchConsumableProp(spellId, 'tipo')]' onclick='[r: sJScriptSpell]'
        data-item='[r: oOggetto]'>
        [r: fetchConsumableProp(spellId, 'nome_decorativo')]
    </button>
    <div class="spell-stats-grid">
        <div class="stat-box">
            <span class="stat-label">Usi:</span>
            <span class="stat-value toxicFont">
                [h, macro("consumables/getMaxCaricheRuna@this"): json.append(oToken, itemId, iRuna)]
                [h: iMaxCariche = macro.return]
                [r: iCariche]/[r: iMaxCariche]
            </span>
        </div>
        <div class="stat-box"><span class="stat-label">Liv:</span>
            [h, macro("consumables/getLivelloOggetto@this"): json.append(oOggetto, oToken)]
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
            <span class="stat-value azioneFont">[r: json.get(oRunaPrice, "PA")]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">PP:</span>
            <span class="stat-value ppFont">[r: json.get(oRunaPrice, "PP")]</span>
        </div>
        <div class="stat-box">
            <span class="stat-label">MM:</span>
            <span class="stat-value mmFont">[r: json.get(oRunaPrice, "MM")]</span>
        </div>
    </div>
</div>