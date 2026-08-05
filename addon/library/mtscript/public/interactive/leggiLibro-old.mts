[h: source = json.get(macro.args,"source")]
[h: oToken = json.get(macro.args,"interattivo")]
[h: iCapitolo = json.get(macro.args,"capitolo")]

[h, if(!isNumber(iCapitolo)): iCapitolo = 1]

[h: switchToken(oToken)]
[h: sText = getSpeech(strformat("Capitolo%{iCapitolo}"))]
[h: sPrevCheck = getSpeech(strformat("Capitolo%d",iCapitolo-1))]
[h: sFrecce = ""]
[h, if(sPrevCheck != ""), code:{
	[param = json.set(macro.args,"capitolo",iCapitolo-1)]
	[sFrecce = strformat("<span style='color:blue'> %s </span>",macrolink("&larr;","interactive/leggiLibro@lib:it.aldinucci.piero.bed.maptool.ruleset","none",param))]
}]

[h: sFrecce = strformat("%s &nbsp; %d &nbsp;",sFrecce,iCapitolo)]

[h: sDopoCheck = getSpeech(strformat("Capitolo%d",iCapitolo+1))]
[h, if(sDopoCheck != ""), code:{
	[param = json.set(macro.args,"capitolo",iCapitolo+1)]
	[sFrecce = strformat("%s <span style='color:blue'> %s </span>",sFrecce,macrolink("&rarr;","interactive/leggiLibro@lib:it.aldinucci.piero.bed.maptool.ruleset","none",param))]
}]

[dialog5("Libro","width=1000; height=700; temporary=1;"):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/ItemCssLink.html")]
	<title> [r:getName(oToken)]</title> 
</head>
<body class="libroBody">
	<div class="pagina-libro">
		<div class="titoloLibro"> [r:getName(oToken)] </div>
		<div>[r: sText]</div>
		<div class="num-pagina"> [r: sFrecce] </div>
	</div>
</body>
</html>
}]
