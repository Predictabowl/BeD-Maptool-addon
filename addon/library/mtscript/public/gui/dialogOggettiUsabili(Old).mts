[h: target = json.get(macro.args,0)]
[h: sDialog = "OggettiConsumabili"]

[dialog(sDialog):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
[h: iNumItems = countSlotVeloceItems(target)]
<title> Consumabili </title> 
</head>
<body  align="center">

<h2>[r: getName(target)]</h2>

<h3> Slot Rapidi </h3>
<table id="generic">
[h: classType="evenRow"]
<tr> <td></td>
<th> Nome </th> <th> PA </th><th> Te </th><th>Liv</th><th>Tox</th><th>LL</th></tr>
[r, for(i,0,iNumItems,1,""), CODE:{
	[h: oOggetto = getFromSlotVeloce(target,i)]
	[h, macro("getInfoOggetto@Lib:OggettiUsabili"):oOggetto]
	[h: oInfoOggetto = macro.return]
	[h: sNome = json.get(oInfoOggetto,"nomeOggetto")]
	[h: iPACost =getUseItemPA(oOggetto,target)]
	[h: iTempoCost =getUseItemTime(oOggetto,target)]
	[h: oParam = json.set("","indiceOggetto",i)]
	[macro("gui/makeObjectUseLink@this"):json.append(target,oOggetto,oParam)]
	[h: strCast = macro.return]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	<tr class="[r: classType]">
	<td> [r:strCast] </td>
	<td align="left">[r: sNome]</td>
	<td> [r: iPACost] </td>
	<td class='tempoFont'> [r: iTempoCost] </td>
	[h: iLiv = json.get(oOggetto,"Livello")]
	<td>[r: iLiv]</td>
	[h: iTox = json.get(oInfoOggetto,"tossico")]
	<td>[r: iTox]</td>
	<td>[r: getLLOggetto(oOggetto)]</td>
	</tr>
}]
</table>
[h: iTox = getTossicoLiv(target)]
<h4> Tossicità: [r:iTox]</h4>


<h3> Rune </h3>
<table id="generic">
[h: classType="evenRow"]
[h: aRuneAttive = getRuneAttive(target)]
<tr> <td></td>
<th> Nome </th> <th> Usi </th><th> PA </th><th> Te </th><th>Liv</th><th>LL</th></tr>
[r, foreach(aItem,aRuneAttive,""), CODE:{
	[h: iArma = json.get(aItem,0)]
	[h: iRuna = json.get(aItem,1)]
	[h: oOggetto = getRunaFromArma(target,iArma,iRuna)]
	[h: spellName = json.get(oOggetto,"spellName")]

	[h: sNome = getLibProperty("nome_decorativo",spellName)]
	[h: iPACost = getSpellPA(target,spellName)]
	[h: iTempoCost = getSpellTime(target,spellName)]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	<tr class="[r: classType]">
	[h: iCariche = getCaricheRuna(target,iArma,iRuna)]
	[h, macro("mobs/getNomeArmaEquip@this"): json.append(target,iArma)]
	[h: sArma = macro.return]

	[h: extraParam = json.set("","slotRuna",iRuna,"nomeArma",sArma,"usaCariche",1,"tipo","RUNA")]
	[h, macro("gui/makeCastLink@this"):json.append(target,spellName,extraParam,"gui/useRuneAndCloseDialog@lib:it.aldinucci.piero.bed.maptool.ruleset")]
	[h: strCast = macro.return]
	<td> [r: strCast] </td>
	[h: param = json.append("",target,spellName)]
	<td align="left"><span style='color:black'> [r: macrolink(sNome,"gui/dialogDescrizioneSpell@this","none",param)]</span></td>
	<td>[r: iCariche]</td>
	<td> [r: iPACost] </td>
	<td class='tempoFont'> [r: iTempoCost] </td>
	[h: iLiv = json.get(oOggetto,"Livello")]
	<td>[r: iLiv]</td>
	<td>[r: getLLOggetto(oOggetto)]</td>
	</tr>
}]
</table>

</body>
</html>
}]

