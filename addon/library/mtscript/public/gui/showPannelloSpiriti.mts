[h: oToken = arg(0)]
[h: sDialog = "DialogPannelloSpiriti"]

[h: switchToken(oToken)]

[h: spiritoAttivo = getSpiritoAttivo(oToken)]
[h: jSpiriti = getArraySpiriti(oToken)]

[h: htmlSpiritList = ""]
[h, macro("powers/getMaxDevozione@this"): oToken]
[h: iMaxDevozione = macro.return]

[dialog5(sDialog, strformat("temporary=0; width=900; height=720; closebutton=0; noframe=0;")):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/SpellsCssLink.html")]
	<title>[r: getName(oToken)] - Spiriti</title> 
</head>
<body>
	<div class="spirits-main-container">
	[r, foreach(sSpirito, jSpiriti, ""), code:{
		[h: iDevozione = getModDevozione(oToken, sSpirito)]
		[h: iBarraFill = floor((iDevozione*100)/iMaxDevozione)]
		[h: iChance = min(round((iDevozione)*100/6 ,1), 100)]
		[h, if(sSpirito == spiritoAttivo): sActive = "is-active"; sActive = ""]
        <div class="spirit-panel [r: sActive]]">
            <div class="spirit-header">
                <div class="spirit-info">
                    <h3 class="spirit-name">[r: sSpirito]</h3>

                    <div class="spirit-stats-row">
                        <span class="prob-badge">Richiamo: <span class="prob-value">[r: iChance]%</span></span>

                        <div class="devotion-wrapper" title="Devozione: 85/100">
                            <span class="devotion-text">Devozione</span>
                            <div class="devotion-track">
                                <div class="devotion-fill" style="width: [r: iBarraFill]%;"></div>
                            </div>
                            <span class="devotion-text">[r: iDevozione]/[r: iMaxDevozione]</span>
                        </div>
                    </div>
                </div>
                <!-- Essendo già attivo, mostriamo un indicatore invece del pulsante -->
				[r, if(sActive != ""): "<button class='btn btn-active-spirit' disabled>Attivo</button>"]
            </div>

            <div class="spirit-body">
                <!-- Riutilizziamo la griglia del grimorio per i poteri -->
                <div class="grimoire-grid-container">
					[r, macro("gui/spiritiPowerCards@this"): json.append(oToken, sSpirito)]
				</div>
            </div>
        </div>
	}]
	</div>
	
	<script src="lib://it.aldinucci.piero.bed.maptool.ruleset/js/spellDescription.js?cachelib=true" defer></script>
</body>
</html>
}]
