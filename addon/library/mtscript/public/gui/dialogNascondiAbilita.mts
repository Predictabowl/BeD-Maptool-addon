<!-- TODO check if it's used -->
[h: target = macro.args]

[h: switchToken(target)]
[h: sThis = getMacroLocation()]
[dialog("Nascondi Abilita"):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
[macro("core/getListaAbilitaConosciute@this"): target]
[h: list =  macro.return]
[h: listLen = listCount(list)]
<title> Nascondi Abilit&agrave; di classe</title> 
</head>
<body>
<form action   ="[r: macroLinkText("updateAbilitaNascoste@"+ getMacroLocation())]" method="json">
<h3>Seleziona quali abilità vedere nella scheda</h3>
<table id="generic">
[h: classType="evenRow"]
<tr> <th> Abilità </th> <th> Nascondi?</th><th> Elimina </th></tr>
[for (i,0,listLen,1,""), code:{
	[h: sAbilita = listGet(list,i)]
	[macro("core/getAbilitaConosciutaName@this"): json.append(target,sAbilita)]
	[h: key = macro.return]
	[macro("gui/isAbilitaNascosta@this"): json.append(target,sAbilita)]
	[h: value = macro.return]
	[h: selected1 = ""]
	[h: selected2= ""]
	[h, if(value): selected2 = "selected"; selected1 = "selected"]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	<tr class="[r: classType]">
	<td align="left">[r: key]</td>
	<td> <select name="[r: listGet(list,i)]"> <option value="0" [r:selected1]>No</option> <option value="1" [r:selected2]>Si</option></select></td>
	[h: param = json.append(target,sAbilita)]
	<td> [r: macrolink("Rimuovi","gui/rimuoviAbilita@" + sThis,"none",param)] </td></tr>
}]
</table>

<input type="hidden" name="target" value="[r: target]"/>
<input type="hidden" name="listaAb" value="[r: list]"/>
<input type="submit" value="Salva"/>
</form>
</body>
</html>
}]
