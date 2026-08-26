[h: oToken = json.get(macro.args,"token")]
[h: skillId = json.get(macro.args,"libAbilita")]

[h: sDialog = "DescrizioneAbilita"]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode",oToken,sThemePreferenze)]


[h: sTipo = upper(fetchClassSkillProp(skillId,"tipo"))]
[h, macro("gui/getSkillTypeClass@this"): sTipo]
[h: skillTypeClass = macro.return]
[h, macro("class_skills/getAbilityDescription@this"): json.append(skillId, oToken)]
[h: aText = macro.return]
[h: imgA = fetchClassSkillImage(skillId)]
[h: sFluffName = fetchClassSkillProp(skillId,"nome_decorativo")]
[h, macro("class_skills/getDurataAbilita@this"): json.append(oToken,skillId)]
[h: sDurata = macro.return]
[h: iLiv = getLivelloAbilita(oToken,skillId)]
[h: aTratti = fetchClassSkillProp(skillId,"tags")]

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

[dialog5(sDialog,"width= 650; height=700; temporary=0; closebutton=0"):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellDetailsCssLink.html")]
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/ClassSkills.css?cachelib=false">
	<title> [r: getName(oToken)] - Descrizione Potere</title>
</head>
<body class="[r, if(bLightMode == 1): 'light-mode']">

   <dialog id="spell-detail-dialog" class="spell-dialog" open>

        <button class="theme-switch-btn" type="button" onclick="toggleTheme('[r: oToken]', '[r: sThemePreferenze]')"
            aria-label="Cambia tema" title="Cambia tema">&#9789;</button>

        <!-- Intestazione: sigillo (colorato in base al Tipo), titolo, chip Tipo + Tratti -->
        <div class="dialog-header">
            <div class="seal-ring">
                <img src="[r: imgA]" alt="Icona Abilità">
            </div>
            <div class="header-text">
                <h2 class="spell-title">[r: sFluffName]</h2>
                <div class="chip-row">
					<span class="chip type-chip [r: skillTypeClass]">
						[r: sTipo]
					</span>
					[r, foreach(sTratto, aTratti, ""), code:{
						[h, macro("utility/textProcessHTML2@this"): sTratto]
                    	<span class="chip trait-chip">[r: macro.return]</span>
					} ]
                </div>
            </div>
        </div>

        <!-- Fascia risorse -->
        <div class="resource-ribbon-5">
            <div class="resource-item">
                <span class="stat-label">Mana</span>
                <span class="stat-value manaFont">[r: iMana]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">PF</span>
                <span class="stat-value faticaFont">[r: iPF]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">PA</span>
                <span class="stat-value azioneFont">[r: iPA]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">PP</span>
                <span class="stat-value ppFont">[r: iPP]</span>
            </div>
            <div class="resource-item">
                <span class="stat-label">MM</span>
                <span class="stat-value mmFont">[r: iMM]</span>
            </div>
        </div>

        <div class="spell-body">

            <p class="section-eyebrow">Dettagli</p>
            <div class="ornate-divider"></div>

            <!-- Dettagli in stile indice/compendio -->
            <div class="compendium-list">
                <div class="compendium-row">
                    <span class="label">Livello</span><span class="leader"></span>
                    <span class="value">[r: iLiv]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Durata</span><span class="leader"></span>
                    <span class="value">[r: sDurata]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Estenuante</span><span class="leader"></span>
                    <span class="value">[r: fetchClassSkillProp(skillId,"estenuante")]</span>
                </div>
                <div class="compendium-row">
                    <span class="label">Tratti</span><span class="leader"></span>
                    <span class="value">[r: json.toList(aTratti)]</span>
                </div>
            </div>

            <!-- Descrizione -->
			[h: aFlavour = fetchClassSkillProp(skillId,"flavour")]
            [h, if(aFlavour == "null"): aFlavour = ""]
			<div class='[r, if(json.isEmpty(aFlavour)): "flavor-empty"; "flavor"]'>
			[r, foreach(sDescr, aFlavour, ""), code:{
				<p>[r: sDescr]</p>
			}]
			</div>
            <div class="mechanical">
			[r, foreach(sDescr, aText, ""), code:{
				[h, macro("utility/textProcessHTML2@this"): sDescr]
                <p>[r: macro.return]</p>
			}]
            </div>

        </div>

    </dialog>

    [r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/InfoBox.html")]

	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellCommonScripts.js?cachelib=true" defer></script>
</body>
</html>
}]

