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
					<button id="btn-secret" onclick="toggleVisibility()">Segreto</button>
					
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
						<a class="roll-btn" title="Tira [r: sCapName]" onclick="rollSkill('[r: capId]')">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
								<!-- top: 2 -->
								<polygon points="50,6 9,29 50,32" class="facet-2" />
								<polygon points="50,6 50,32 91,29" class="facet-1" />

								<!-- middle: 5 -->
								<polygon points="9,29 30,64 50,32" class="facet-1" />
								<polygon points="50,32 30,64 70,64" />
								<polygon points="50,32 70,64 91,29" class="facet-1" />
								<polygon points="9,29 9,71 30,64" class="facet-2" />
								<polygon points="91,29 70,64 91,71" class="facet-3" />

								<!-- bottom: 3 -->
								<polygon points="9,71 30,64 50,94" class="facet-4" />
								<polygon points="30,64 70,64 50,94" class="facet-2" />
								<polygon points="70,64 91,71 50,94" class="facet-3" />
							</svg>
						</a>
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