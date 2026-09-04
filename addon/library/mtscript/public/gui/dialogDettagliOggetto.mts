[h: oOggetto = arg(0)]
<!-- remember that gui/getItemDataFromToken must be used to build oOggetto, but not here, in the link in chat function
otherwise won't be clickable anymore once the item is removed from the token inventory -->

[h: sNome = json.get(oOggetto, "nome")]
[h: sDialog = "DialogInfoOggetto-"+sNome]

[h: sThemePreferenze = "Spell_Dialogs_Theme"]
[h: bLightMode = getPreferenza("light_mode", getImpersonated(),sThemePreferenze)]

[dialog5(sDialog, strformat('temporary=1; width=450; height=500; closebutton=0; noframe=0;')):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/GlobalCssLink.html")]
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/ItemDetails.css?cachelib=false">
	<title>[r: sNome]</title>
</head>
<body class="[r, if(bLightMode == 1): 'light-mode']">
	<meta id="auto-fill-oggetto" data-oggettojson='[r: oOggetto]'>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/ComponentDettagliOggetto.html")]
</body>
</html>
}]