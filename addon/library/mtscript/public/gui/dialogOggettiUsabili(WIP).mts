[h: target = json.get(macro.args,0)]
[h: sDialog = "OggettiConsumabili"]

[h: iNumItems = countSlotVeloceItems(target)]
[h: classType="evenRow"]
[h: iTox = getTossicoLiv(target)]

[h: sTabellaSlot = ""]
[h, for(i,0,iNumItems,1), CODE:{
	[h: oOggetto = getFromSlotVeloce(target,i)]
	[h: spellName = json.get(oOggetto,"spellName")]
	[h: sNome = getLibProperty("nome_decorativo",spellName)]
	[h: iPACost = getSpellPA(target,spellName)]
	[h: iTempoCost = getSpellTime(target,spellName,1)]

	[h: extraParam = json.set("","slotVeloce",i,"usaCariche",1,"tipo","POZIONE")]
	[h, macro("gui/makeObjectUseLink@this"):json.append(target,spellName,extraParam,"gui/useRuneAndCloseDialog@lib:it.aldinucci.piero.bed.maptool.ruleset")]
	[h: strCast = macro.return]
	
	[h: iLiv = json.get(oOggetto,"Livello")]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	[h: param = json.set("","token",target,"libSpell",spellName)]
	[h: sSpellLink = macrolink(sNome,"gui/dialogDescrizioneSpell@this","none",param)]
	[h: iTossico = getTossicoOggetto(oOggetto)]
	[h: iLL = getLLOggetto(oOggetto)]
	
	[sTabellaSlot = strformat("%{sTabellaSlot}<tr class='%{classType}'><td>%{strCast}</td>
	<td align='left'><span style='color:black'>%{sSpellLink}</span></td>
	<td>%{iTossico}</td>
	<td class='azioneFont'>%{iPACost}</td>
	<td class='tempoFont'>%{iTempoCost}</td>
	<td>%{iLiv}</td>
	<td>%{iLL}</td>
	</tr>")]
}]

[h: classType="evenRow"]
[h: aRuneAttive = getRuneAttive(target)]
[h: sTabellaRune = ""]
[h, foreach(aItem,aRuneAttive), CODE:{
	[h: sArma = json.get(aItem,0)]
	[h: iRuna = json.get(aItem,1)]
	[h: oOggetto = getRunaFromArma(target,sArma,iRuna)]
	[h: spellName = json.get(oOggetto,"libName")]

	[h: sNome = getLibProperty("nome_decorativo",spellName)]
	[h: iPACost = getLibProperty("PA",spellName)]
	[h: iTempoCost = calcActionTime(getLibProperty("tempo",spellName),target)]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	[h: iCariche = getCaricheRuna(target,sArma,iRuna)]

	[h: imgA = getImage(spellName)]
	[h: strCast = strformat("<input type='image' class='spellCastButton' src='%{imgA}' onclick='loadParams(this)'")]
	[h: strCast = strformat("%{strCast} data-spellName='%{spellName}' data-itemType = 'RUNA' title='Usa Oggetto'
		data-nomeArma='%{sArma}' data-slotRuna='%{iRuna}'/>")]

	[h: iLiv = json.get(oOggetto,"livello")]
	[h: param = json.set("","token",target,"libSpell",spellName)]
	[h: sSpellLink = macrolink(sNome,"gui/dialogDescrizioneSpell@this","none",param)]
	[h: iLL = getLLOggetto(oOggetto)]
	
	[sTabellaRune = strformat("%{sTabellaRune}<tr class='%{classType}'><td>%{strCast}</td><td align='left'><span style='color:black'>%{sSpellLink}</span></td>")]
	[sTabellaRune = strformat("%{sTabellaRune}<td>%{iCariche}</td><td class='azioneFont'>%{iPACost}</td><td class='tempoFont'>%{iTempoCost}</td><td>%{iLiv}</td><td>%{iLL}</td></tr>")]
}]



[dialog5(sDialog,"temporary=0; width=500; height=600; closebutton=0"):{
	<html>
	<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title> Consumabili </title> 
	<script>[r:"
		function loadParams(elem){
			document.getElementById('spell_SpellName').setAttribute('value',elem.getAttribute('data-spellName'));
			document.getElementById('itemType').setAttribute('value',elem.getAttribute('data-itemType'));
			document.getElementById('nomeArma').setAttribute('value',elem.getAttribute('data-nomeArma'));
			document.getElementById('slotRuna').setAttribute('value',elem.getAttribute('data-slotRuna'));
			document.getElementById('form_use_item').submit();
		}
	"]
	</script>
	</head>
	<body  align="center">
	
	<h2>[r: getName(target)]</h2>
	
	<h3> Slot Rapidi </h3>
	<table class="center">
	<tr class="genericTable"> <td></td>
	<th> Nome </th><th>Tox</th><th> PA </th><th> Te </th><th>Liv</th><th>LL</th></tr>
	[r: sTabellaSlot]
	</table>
	
	<h4> Tossicità: [r:iTox]</h4>
	
	
	<h3> Rune </h3>
	<table class="center">
	<tr class="genericTable"> <td></td>
	<th> Nome </th> <th> Usi </th><th> PA </th><th> Te </th><th>Liv</th><th>LL</th></tr>
	[r: sTabellaRune]
	</table>

	<!-- Form che gestisce l'azione di attivazione degli oggetti -->
	<form id="form_use_item" method="json" action="[r:macroLinkText("gui/useItemHandler@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type='hidden' name='source' value='[r:oToken]'/>
	<input id='spell_SpellName' type='hidden' name='spellName' value=''/>
	<input id='item_Type' type='hidden' name='itemType' value=''/>
	<input id='item_nomeArma' type='hidden' name='nomeArma' value=''/>
	<input id='item_slotRuna' type='hidden' name='slotRuna' value=''/>
	</form>
	
	</body>
	</html>
}]

