[h: target = json.get(macro.args,"target")]
[h: iVecchiaPos = json.get(macro.args,"vecchiaPos")]
[h: list =  json.get(macro.args,"lista")]
[h: sReturnMacro = json.get(macro.args,"returnMacro")]

[dialog("Ordinamento","input=1"):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
<title> Scegli nuova posizione</title> 
</head>
<body  align="center">

<h2>[r: getName(target)]</h2>

<form name="ordinaObjects" method="json" action   ="[r:macroLinkText("gui/scambiaPosizioneElementi@this")]">
<table id="generic">
[h: classType="evenRow"]
[h: iIndice = 0]

[r, foreach(oEntry, list, "<br>"), CODE:{
	[h: item = getLibProperty("nome_decorativo",oEntry)]
	[h: isOdd = math.mod(iIndice,2)]
	[h: classType = if(isOdd == 0,"evenRow","oddRow")]
	[h: classType = if(iIndice == iVecchiaPos-1, "selectedRow", classType)]
	<tr class="[r: classType]">
	<td> <input type="submit" name="nuovaPos" value=[r: iIndice+1] /></td>
	<td align='left'> [r: item]</td>
	</tr>
	[h: iIndice = iIndice +1]
}]
</table>
<input type='hidden' name="target" value="[r:target]"/>
<input type='hidden' name="vecchiaPos" value=[r: iVecchiaPos] />
<input type='hidden' name="returnMacro" value="[r:sReturnMacro]"/>
<input type='hidden' name="lista" value="[r:list]"/>
</form>

</body>
</html>
}]
