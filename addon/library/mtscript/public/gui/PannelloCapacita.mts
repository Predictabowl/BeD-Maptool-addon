[h: tokenId = arg(0)]
[h: sFrame = "Capacita"]

[h: aCapacita = "[]"]
[h, macro("core/getListaCapacita@this"): 0]
[h: lCapacita = macro.return]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode", tokenId,sThemePreferenze)]

[frame5(sFrame, strformat("scrollreset=0; value=%{tokenId};")):{
<html>
	<head> 
			[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/GlobalCssLink.html")]
			<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/GeneralSkills.css?cachelib=false">
			<title>[r: getName(tokenId)] - Capacità Generali</title> 
	</head>
	<body class="[r, if(bLightMode == 1): 'light-mode']" data-tokenid="[r: tokenId]">
		<div class="capacita-frame">

			<div class="capacita-header">
				<h2>Capacità</h2>
				<div class="visibility-toggle">
					<button id="btn-secret" class="active" onclick="toggleVisibility()">Segreto</button>
					
				</div>
			</div>

			<div class="circostanza-bar">
				<label for="circostanza">Mod. Circostanza</label>
				<input type="number" id="circostanza" value="0">
				<span class="hint">sul prossimo tiro</span>
			</div>

			<div class="skill-list" id="skill-list">
				[r, foreach(capId, lCapacita, ""), code:{
					[h: sCapName = getPropertyDisplayName("Basic", capId)]
					[h: iCapValue = getProperty(capId, tokenId)]
					[h, if(iCapValue > 0): sModClass = "positive"; sModClass = "negative"]
					[h, if(iCapValue == 0): sModClass = ""]
					<div class="skill-row" id="[r: capId]">
						<span class="skill-name">[r: sCapName]</span>
						<span class="skill-mod [r: sModClass]">[r: strformat("%+d", iCapValue)]</span>
						<button class="roll-btn" title="Tira [r: sCapName]" onclick="rollSkill('[r: capId]')">🎲</button>
					</div>
				}]
			</div>

			<div class="last-roll">
				<span class="label">Ultimo tiro</span>
				<span class="result empty" id="last-roll-result">—</span>
			</div>

		</div>

		<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/GeneralSkills.js?cachelib=false" defer></script>
	</body>
</html>
}]