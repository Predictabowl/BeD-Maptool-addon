[h: sKey = arg(0)]

[macro("utility/stampaAcronimo@this"): sKey]
[h: sAcro = json.get(macro.return, "acronimo")]
[h: sDescr = json.get(macro.return, "descrizione")]
[macro("utility/textProcessHTML@this"): sDescr]
[h: sInfo = macro.return]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[macro("gui/getOverlayData@this"): "token"]
[h: tokenId = macro.return]
[h: bLightMode = getPreferenza("light_mode",tokenId,sThemePreferenze)]

[h: sDialog = "infoDialog"]
[h: height = 250]
[dialog5(sDialog,strformat("noframe=1; closeButton=0; temporary=1; width=320; height=%{height};")):{
<html>
<head>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/GlobalCssLink.html")]
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/InfoBox.css?cachelib=true">
	<title>Placeholder</title>
</head>
<body onmouseleave="closeForm()" class="[r, if(bLightMode == 1): 'light-mode']">
	<dialog id="explanationPopup" class="explanation-popup">
		<div class="popup-header">
			<h3 class="popup-title">[r:sKey]</h3>
			[r, if(sAcro != ""), code:{
				<span class="popup-acronym">[r: sAcro]</span>
			}]
		</div>
		<p class="popup-description">
			[r: sInfo]
		</p>
	</dialog>
	<form method="json" id="close-form" action="[r: macroLinkText('gui/closeWindow@this')]">
		<input type="hidden" name="name" value="[r: sDialog]">
	</form>
	<script>
	[r:"
		function closeForm(){
			document.getElementById('close-form').submit();
		}
	"]
	</script>
</body>
</html>
}]