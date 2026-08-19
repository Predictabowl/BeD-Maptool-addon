<!-- DEPRECATED -->
[h: oToken = json.get(macro.args,"token")]
[h: spellName = json.get(macro.args,"libSpell")]
[h: oOggetto = json.get(macro.args,"consumabile")]
[h, if(!json.isEmpty(oOggetto)), code:{
	[macro("consumables/setForceItemCastOverride@this"): oToken]
	[macro("consumables/haveSogliaPotere@this"): json.append(oToken,spellName)]
	[bSoglia = macro.return]
	[bConsumabile = 1]
	[macro("consumables/getSogliaPotereRate@this"): json.append(oToken,oOggetto)]
	[iSogliaRate = macro.return]
	[iRecupero = 0]
};{
	[h: bConsumabile = 0]
	[h: bSoglia = 0]
	[h: iRecupero = fetchSpellProp(spellName,"recupero")]
}]

[h: sDialog = "DescrizioneIncantesimo"]
[h: sTags = upper(fetchSpellProp(spellName,"tags"))]
[h: sTagText = ""]
[h, if(listContains(sTags, "AGGRESSIONE")): sTagText = listAppend(sTagText, "Aggressione")]
[h, if(listContains(sTags, "ARMATURA")): sTagText = listAppend(sTagText, "Armatura")]
[h, if(listContains(sTags, "CONTROLLATO")): sTagText = listAppend(sTagText, "Controllato")]
[h, if(listContains(sTags, "RISOLUTO")): sTagText = listAppend(sTagText, "Risoluto")]
[h, if(listContains(sTags, "SANGUINAMENTO")): sTagText = listAppend(sTagText, "Sanguinamento")]
[h, if(listContains(sTags, "VELENO")): sTagText = listAppend(sTagText, "Veleno")]

[h, macro("powers/generaOpportunita@this"): json.append(oToken,spellName)]
[h, if(macro.return): sOpp = "Sì"; sOpp = "No"]

[h: aDescrizione = fetchSpellProp(spellName,"descrizione")]
[h: aText = "[]"]
[h, foreach(sDescr, aDescrizione), code:{
	[h, macro("utility/textProcessHTML@this"): sDescr]
	[h: aText = json.append(aText, macro.return)]
}]

[h, if(!isNumber(iRecupero)): iRecupero = 0]
[h: sArea = strformat("%d %s",getSpellAoE(oToken,spellName),getAoEShape(spellName,oToken))]

[dialog5(sDialog,"width=700; height=650; temporary=0;"):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title> Descrizione </title>
	<style>
	[r:"
		.spellData {
			display:grid;
			grid-template-columns: auto auto auto;
			gap: 2px;
			margin: 10px;
		}
		.spellData > div {
			  border: 1px solid;
			  background-color: mintcream;
			  padding: 1px;
			  margin: 0px;
			  border-radius: 5px;
		}
		.spellData > div > span:first-child {
			  font-weight: bold;
		}
	"]
	</style>
</head>
<body  align="center">

[h: imgA = fetchSpellImage(spellName)]
[h: sImage = strformat("<img src='%{imgA}' width='50' length='50'/>")]
[h: sFluffName = fetchSpellProp(spellName,"nome_decorativo")]
[r: sImage]
<div class="spellTitle">[r: sFluffName]</div>
<div class="spellData">
	[h: sPropType = fetchSpellProp(spellName,"property_type")]
	<div>Scuola: <span>[r, if(sPropType == "SPELL"): getScuola(oToken,spellName); "-"]</span></div>
	<div>Tipo: <span>[r: fetchSpellProp(spellName,"tipo")]</span></div>
	<div>Elemento: <span>[r: fetchSpellProp(spellName,"elemento")]</span></div>
	<div>Durata: <span>[r: getSpellDurata(oToken,spellName)]</span></div>
	<div>Raggio d&rsquo;azione: <span>[r: getSpellRange(oToken,spellName)]</span></div>
	<div>Area d&rsquo;effetto: <span>[r: sArea]</span></div>
	<div>Tiro Salvezza: <span>[r: fetchSpellProp(spellName,"TS")]</span></div>
	<div>Componenti: <span>[r: fetchSpellProp(spellName,"componenti")]</span></div>
	<div>Recupero: <span>[r: iRecupero]</span></div>
	<div>Opportunità: <span>[r: sOpp]</span></div>
	<div>Medium: <span>[r: fetchSpellProp(spellName,"proiettile")]</span></div>
	<div>[r: sTagText]</div>
</div>
[h: sTags = fetchSpellProp(spellName,"tags")]
<div class="descrizione" style="max-height: 20rem;">
	[r, if(bSoglia): strformat("<div style='font-style: italic; margin-bottom: 5px;'>Soglia di Potere: %{iSogliaRate}%</div>")]
	[r, foreach(sText, aText, ""), code: {
	<p>
		[r: sText]
	</p>
	}]
</div>

</body>
</html>
}]

[macro("consumables/setForceItemCastOverride@this"): json.append(oToken,0)]
