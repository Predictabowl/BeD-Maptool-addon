<!-- TODO if it's useful references must be updated -->
[h: target = macro.args]
[h: switchToken(target)]
[h: list =  LMM]
[macro("powers/getScuolaUniversale@this"):target]
[h, if(macro.return != ""), code:{
	[h: scuolaUn = strformat("<h4> Scuola Universale corrente: %{macro.return} </h4>")]
};{
	[h: scuolaUn  = ""]
}]
[frame("Lista Scuole"):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
[h: listLen = countStrProp(list)]
<title> Livelli di Lancio e Maestria</title> 
</head>
<body class="dataCentered">
<h2> [r:getName(target)] </h2>
<table id="generic">
[h: classType="evenRow"]
<tr> <th> Scuola </th> <th> LMM </th><th> LL </th><th> CD </th><th> LL 2 </th><th> CD 2 </th></tr>
[for (i,0,listLen,1,""), code:{
	[h: key = indexKeyStrProp(list,i)]
	[h: valueLMM = getLMM(json.set("","source",target,"scuola",key))]
	[h: valueLL1 = getLL(json.set("","source",target,"scuola",key,"arma",1))]
	[h: valueLL2 = getLL(json.set("","source",target,"scuola",key,"arma",2))]
	[macro("powers/getCD@this"):json.set("","source",target,"LM",valueLMM,"arma",1)]
	[h: valueCD1 = macro.return]
	[macro("powers/getCD@this"):json.set("","source",target,"LM",valueLMM,"arma",2)]
	[h: valueCD2 = macro.return]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	<tr class="[r: classType]">
	<td align="left">[r: key]</td>
	<td> [r: valueLMM] </td>
	<td> [r: valueLL1] </td>
	<td> [r: valueCD1] </td>
	<td> [r: valueLL2] </td>
	<td> [r: valueCD2] </td></tr>
}]
</table>
<br>
<form action   ="[r: macroLinkText("gui/updateFrame@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
<input type="hidden" name="target" value ="[r:target]" />
<input type="hidden" name="frame" value ="[r:getMacroName()]" />
<input type="image" name="Aggiorna" value="Aggiorna" src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/refresh.png' />
</form>
[r: scuolaUn]
</body>
</html>
}]
