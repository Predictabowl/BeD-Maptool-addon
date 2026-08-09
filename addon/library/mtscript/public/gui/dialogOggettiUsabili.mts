[h: target = arg(0)]

[h: sDialog = "OggettiConsumabili"]
[h: sGruppoPreferenze = "Dialog_Oggetti_Consumabili"]

[h, if(isDialogVisible(sDialog)), code:{
	[oProperties = getDialogProperties(sDialog)]
	[setPreferenza("larghezza",json.get(oProperties,"width"),target,sGruppoPreferenze)]
	[setPreferenza("altezza",json.get(oProperties,"height"),target,sGruppoPreferenze)]
	[closeDialog(sDialog)]
	[return(0,0)]
}]


[h, if(getOverride(target,"InventarioBloccato")), code:{
	[broadcast("Non è possibile accedere all'inventario in questo momento",getPlayerName())]
	[return(0,0)]
}]



[h: iLarg = getPreferenza("larghezza",target,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 650]
[h: iAltezza = getPreferenza("altezza",target,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 700]


[h: iNumItems = countSlotVeloceItems(target)]
[h: classType="evenRow"]
[h: classTypeP="evenRow"]
[h: iTox = getTossicoLiv(target)]
[macro("mechanics/getResistenzaTox@this"): target]
[h: iResTox = macro.return]
[h: fToxPerc = (iTox/iResTox)]
[h: iBarraResTox = 250]
[h: iBarraTox = floor(fToxPerc*iBarraResTox)]
[h, if(iBarraTox > iBarraResTox): iBarraTox = iBarraResTox]

[h: sTabellaSlot = ""]
[h: sTabellaPozioni = ""]
[h, for(i,0,iNumItems,1), CODE:{
	[h: oOggetto = getFromSlotVeloce(target,i)]
	[h: spellName = json.get(oOggetto,"libName")]
	[macro("consumables/getTipoConsumabile@this"): json.append(spellName, 1)]
	[h: sTipoOggetto = macro.return]
	[h: sNome = fetchConsumableProp(spellName,"nome_decorativo")]
	[macro("consumables/getItemTime@this"): json.append(target,spellName)]
	[h: iTempoCost = macro.return]

	[h: imgA = fetchSpellImage(spellName)]
	[h: strCast = strformat("<input type='image' class='spellCastButton' src='%{imgA}' onclick='loadParams(this)'")]
	[h: strCast = strformat("%{strCast} data-spellName='%{spellName}' title='Usa Oggetto' data-slotVeloce='%{i}'/>")]

	[h, macro("consumables/getLivelloOggetto@this"): json.append(oOggetto, target)]
	[h: iLiv = macro.return]
	[h: param = json.set("","token",target,"libSpell",spellName,"consumabile",oOggetto)]
	[h: iTossico = getTossicoOggetto(oOggetto, target)]
	[h: iLL = getLLOggetto(iLiv)]
	[macro("consumables/getCDOggetto@this"): iLiv]
	[h: iCD = macro.return]

	[if (sTipoOggetto=="POZIONE"), code: {
		[macro("consumables/getMMOggetto@this"): json.append(target, spellName, sTipoOggetto)]
		[iPACost = macro.return]
		[classType = if(classType=="oddRow","evenRow","oddRow")]
		[sSpellLink = macrolink(sNome,"gui/dialogDescrizioneSpell@this","none",param)]
		[sTabellaPozioni = strformat("%{sTabellaPozioni}<tr class='%{classType}'><td>%{strCast}</td>
			<td align='left'><span style='color:black'>%{sSpellLink}</span></td>
			<td class='toxicFont'>%{iTossico}</td>
			<td class='azioneFont'>%{iPACost}</td>
			<td class='tempoFont'>%{iTempoCost}</td>
			<td>%{iLL}</td>
			<td>%{iCD}</td>
			<td>%{iLiv}</td>
			</tr>")]
	};{
		[macro("consumables/getPPOggetto@this"): json.append(target, spellName, sTipoOggetto)]
		[iPACost = macro.return]
		[classTypeP = if(classTypeP=="oddRow","evenRow","oddRow")]
		[sSpellLink = macrolinkText("gui/dialogDescrizioneSpell@this","",param)]	
		[sSpellType = fetchConsumableProp(spellName,"tipo")]
		[sTabellaSlot = strformat("%{sTabellaSlot}<tr class='%{classTypeP}'>
			<td>%{strCast}</td>
			<td align='left' class='%{sSpellType} spellFont'><a style='color:inherit; display:block' href='%{sSpellLink}'>%{sNome}</a></td>
			<td class='azioneFont'>%{iPACost}</td>
			<td class='tempoFont'>%{iTempoCost}</td>
			<td>%{iLL}</td>
			<td>%{iCD}</td>
			<td>%{iLiv}</td>
			</tr>")]
		}]
	}]
}]

[h: classType="evenRow"]
[h: aRuneAttive = getRuneAttive(target)]
[h: sTabellaRune = ""]
[h, foreach(aItem,aRuneAttive), CODE:{
	[h: sArma = json.get(aItem,0)]
	[h: iRuna = json.get(aItem,1)]
	[h: oOggetto = getRunaFromArma(target,sArma,iRuna)]
	[h: spellName = json.get(oOggetto,"libName")]

	[h: sNome = fetchConsumableProp(spellName,"nome_decorativo")]
	[macro("consumables/getTipoConsumabile@this"): spellName]
	[macro("consumables/getPPOggetto@this"): json.append(target, spellName, macro.return)]
	[h: iPACost = macro.return]
	[macro("consumables/getItemTime@this"): json.append(target,spellName)]
	[h: iTempoCost = macro.return]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	[h: iCariche = getCaricheRuna(target,sArma,iRuna)]
	[macro("consumables/getMaxCaricheRuna@this"): json.append(target, sArma, iRuna)]
	[if(macro.return>0): iCariche = strformat("%{iCariche}/%{macro.return}")]

	[h: imgA = fetchSpellImage(spellName)]
	[h: strCast = strformat("<input type='image' class='spellCastButton' src='%{imgA}' onclick='loadParams(this)'")]
	[h: strCast = strformat("%{strCast} data-spellName='%{spellName}' title='Usa Oggetto' data-nomeArma='%{sArma}' data-slotRuna='%{iRuna}'/>")]

	[h, macro("consumables/getLivelloOggetto@this"): json.append(oOggetto, target)]
	[h: iLiv = macro.return]
	[h: param = json.set("","token",target,"libSpell",spellName,"consumabile",oOggetto)]
	[h: sSpellLink = macrolinkText("gui/dialogDescrizioneSpell@this","",param)]	
	[h: iLL = getLLOggetto(iLiv)]
	[macro("consumables/getCDOggetto@this"): iLiv]
	[h: iCD = macro.return]

	[h: sSpellType = fetchConsumableProp(spellName,"tipo")]
	[sTabellaRune = strformat("%{sTabellaRune}<tr class='%{classType}'><td>%{strCast}</td><td align='left' class='%{sSpellType}'><a style='color:inherit; display:block;' class='spellFont' href='%{sSpellLink}'>%{sNome}</a></td>")]
	[sTabellaRune = strformat("%{sTabellaRune}<td>%{iCariche}</td><td class='azioneFont'>%{iPACost}</td><td class='tempoFont'>%{iTempoCost}</td><td>%{iLL}</td><td>%{iCD}</td><td>%{iLiv}</td></tr>")]
}]

[macro("mobs/getNumSlotVeloci@this"): target]
[h: iSlotMax = macro.return]
[h: iSlotUsati = countSlotVeloceItems(target)]
[h, if(iSlotUsati > iSlotMax): sSlotClass = "class='warning'"; sSlotClass = ""]

[h: sSlotRapidiHeadLink = strformat("<a href='%s' title='Gestisci Slot Veloci'>Slot Rapidi</a>",macrolinkText("gui/transitionDialogSlotVeloci@this","none",json.set("","source",target)))]

[h: pSize = strformat("width=%{iLarg}; height=%{iAltezza}")]
[dialog5(sDialog,strformat("temporary=0; size=%{pSize}; closebutton=0")):{
	<html>
	<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title> Consumabili </title> 
	</head>
	<body  align="center">
	
	<div class="relevantTitle">[r: getName(target)]</div>
	<div class="midPageTitle"> [r: sSlotRapidiHeadLink] <span [r: sSlotClass]>[r:iSlotUsati]</span>/[r: iSlotMax]</div>
	<div style="display:flex; flex-direction:column; gap:5px; align-items:center">
		[if(sTabellaPozioni != ""), code: {
			<div>
				<div class="midPageTitle"> Pozioni </div>
				<table class="scrollBarSpace">
					<tr class="genericTable"> <td/>
					<th> Nome </th><th>Tox</th><th> MM </th><th> Te </th><th>LL</th><th>CD</th><th>Liv</th></tr>
					[r: sTabellaPozioni]
				</table>
			</div>
		}]
		<div style="display: grid; grid-template-columns: auto auto; justify-content: center; margin-top: 0px; gap: 5px;">
			<div>Tossicità:</div>
			<div>
				<div class="toxicBarBG" style="width:{iBarraResTox}px;">
					<div class="toxicBar" style="width:{iBarraTox}px;">[r:iTox]/[r:iResTox]</div>
				</div>
			</div>
		</div>
		[if(sTabellaSlot != ""), code: {
			<div>
				<div class="midPageTitle"> Pergamene </div>
				<table class="scrollBarSpace">
					<tr class="genericTable"> <td/>
					<th> Nome </th><th>PP</th><th>Te</th><th>LL</th><th>CD</th><th>Liv</th></tr>
					[r: sTabellaSlot]
				</table>
			</div>
		}]
		<div>
			<div class="midPageTitle"> Rune </div>
			<table class="scrollBarSpace">
				<tr class="genericTable"> <td/>
					<th> Nome </th> <th> Usi </th><th> PP </th><th> Te </th><th>LL</th><th>CD</th><th>Liv</th>
				</tr>
				[r: sTabellaRune]
			</table>
		</div>
	</div>

	<form id="form_use_item" method="json" action="[r:macroLinkText("gui/useItemHandler@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	<input type='hidden' name='source' value='[r:target]'/>
	<input id='spell_SpellName' type='hidden' name='spellName' value=''/>
	<input id='item_nomeArma' type='hidden' name='nomeArma' value=''/>
	<input id='item_slotRuna' type='hidden' name='slotRuna' value=''/>
	<input id='item_slotVeloce' type='hidden' name='slotVeloce' value=''/>
	</form>

	<script>
	[r:"
		function loadParams(elem){
			document.getElementById('spell_SpellName').setAttribute('value',elem.getAttribute('data-spellName'));
			document.getElementById('item_nomeArma').setAttribute('value',elem.getAttribute('data-nomeArma'));
			document.getElementById('item_slotVeloce').setAttribute('value',elem.getAttribute('data-slotVeloce'));
			document.getElementById('item_slotRuna').setAttribute('value',elem.getAttribute('data-slotRuna'));
			document.getElementById('form_use_item').submit();
		}
	"]
	</script>
	</body>
	</html>
}]



