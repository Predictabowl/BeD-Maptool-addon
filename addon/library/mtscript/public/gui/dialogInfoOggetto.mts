[h: target = json.get(macro.args,0)]
[h: sDialog = "OggettiConsumabili"]
[h: iNumItems = countSlotVeloceItems(target)]


[dialog(sDialog):{
<html>
<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css?cachelib=true">
	<title> Consumabili </title> 
</head>
<body  align="center">

<h3>[r: getName(target)]</h3>
<form name="usaOggetto" method="json" action   ="[r:macroLinkText("gui/usaOggettoServer@this")]">
<input type="hidden" name="target" value="[r: target]"/>
<input type="hidden" name="dialogName" value="[r: sDialog]"/>

<table id="generic">
[h: classType="evenRow"]
<tr> <td><input type="image" name="Aggiorna" value="Aggiorna" src='[r: getImage("Image:refresh-small")]'/> </td>
<th> Nome </th> <th> Usi </th><th> PA </th><th> Te </th></th>Liv</th> </tr>
[r, for(i,0,iNumItems), CODE:{
	[h: oOggetto = getFromSlotVeloce(target,i)]
	[h, macro("getInfoOggetto@Lib:OggettiUsabili"):oOggetto]
	[h: oInfoOggetto = macro.return]
	
	[h: sNome = getStrProp(oInfoOggetto,"nomeOggetto")]
	[h: iPACost =getUseItemPA(oOggetto,target)]
	[h: iTempoCost =getUseItemTime(oOggetto,target)]

	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	<tr class="[r: classType]">
	<td> placeholder </td>
	<td align="left">[r: sNome]</td>
	<td>1</td>
	<td> [r: iPACost] </td>
	<td class='tempoFont'> [r: iTempoCost] </td>
	[h: param = json.set("","target",target,"key",sNome)]
	<td ><span style='color:red'> [r: macrolink("&chi","gui/rimuoviPotere@this","none",param)] </span></td>
	</tr>
}]
</table>
</form>

</body>
</html>
}]
