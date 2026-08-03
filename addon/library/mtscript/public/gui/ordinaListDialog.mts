[h, if(json.type(macro.args) == "OBJECT"), code:{
	[target = json.get(macro.args,"target")]
	[list = json.get(macro.args,"lista")]
	[sReturnMacro = json.get(macro.args,"returnMacro")]
};{
	[target = json.get(macro.args,0)]
	[list = json.get(macro.args,1)]
	[sReturnMacro = json.get(macro.args,2)]
}]

[dialog("Ordinamento","input=1"):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
<title> Ordina Lista</title> 
</head>
<body  align="center">

<h2>[r: getName(target)]</h2>

<form name="ordinaObjects" method="json" action   ="[r:macroLinkText("gui/posizionaElementoDialog@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
<table id="generic">
[h: classType="evenRow"]
[h: iIndice = 0]

[r, foreach(oEntry, list, "<br>"), CODE:{
	[h: item = getLibProperty("nome_decorativo",oEntry)]
	[h: isOdd = math.mod(iIndice,2)]
	[h: classType = if(isOdd == 0,"evenRow","oddRow")]
	<tr class="[r: classType]">
	<td> <input type="submit" name="vecchiaPos" value= [r: iIndice+1] /></td>
	<td align='left'> [r: item]</td>
	</tr>
	[h: iIndice = iIndice +1]
}]


</table>
<input type="hidden" name="target" value="[r:target]"/>
<input type='hidden' name="lista" value="[r:list]"/>
<input type="hidden" name="returnMacro" value="[r:sReturnMacro]"/>
</form>


<form name="closeOrdina" method="json" action="[r:macroLinkText(sReturnMacro)]">
<input type="hidden" name="target" value="[r:target]"/>
<input type="submit" name="close" value="Ok"/>
<input type='hidden' name="lista" value="[r:list]"/>
</form>

</body>
</html>
}]
