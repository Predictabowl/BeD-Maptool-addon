[h: oToken = json.get(macro.args,"token")]
[h: sLibAbilita = json.get(macro.args,"libAbilita")]

[h: sDialog = "DescrizioneAbilita"]

[h, macro("class-skills/getAbilityDescription@this"): json.append(sLibAbilita, oToken)]
[h, macro("utility/textProcessHTML@this"): macro.return]
[h: sText = macro.return]

[dialog5(sDialog,"width=600; height=450; temporary=0;"):{
<html>
<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css">
<title> Descrizione </title> 
</head>
<body  align="center">

[h: imgA = getImage(sLibAbilita)]
[h: sImage = strformat("<img src='%{imgA}' width='50' length='50'/>")]
[h: sFluffName = getLibProperty("nome_decorativo",sLibAbilita)]
[h, macro("class-skills/getDurataAbilita@this"): json.append(oToken,sLibAbilita)]
[h: sDurata = macro.return]
[h: iLiv = getLivelloAbilita(oToken,sLibAbilita)]
[r: sImage]
<div class="spellTitle">[r: sFluffName]</div>
<div>
	<table class='spellData' border='1'>
	<tr><td><b>Livello:</b> [r: iLiv]</td><td><b>Durata:</b> [r: sDurata]</td></tr>
	</table>
</div>
<div class="descrizione"> 
	[r: sText]
</div>

</body>
</html>
}]

