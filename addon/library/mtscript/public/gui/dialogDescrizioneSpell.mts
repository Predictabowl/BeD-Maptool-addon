[h: oToken = json.get(macro.args,"token")]
[h: spellName = json.get(macro.args,"libSpell")]
[h: oOggetto = json.get(macro.args,"consumabile")]
[h, if(!json.isEmpty(oOggetto)), code:{
	[macro("setForceItemCastOverride@Lib:OggettiUsabili"): oToken]
	[macro("haveSogliaPotere@Lib:OggettiUsabili"): json.append(oToken,spellName)]
	[bSoglia = macro.return]
	[bConsumabile = 1]
	[macro("getSogliaPotereRate@Lib:OggettiUsabili"): json.append(oToken,oOggetto)]
	[iSogliaRate = macro.return]
};{
	[h: bConsumabile = 0]
	[h: bSoglia = 0]	
}]

[h: sDialog = "DescrizioneIncantesimo"]
[h: sTags = upper(getLibProperty("tags", spellName))]
[h: sTagText = ""]
[h, if(listContains(sTags, "AGGRESSIONE")): sTagText = listAppend(sTagText, "Aggressione")]
[h, if(listContains(sTags, "ARMATURA")): sTagText = listAppend(sTagText, "Armatura")]
[h, if(listContains(sTags, "CONTROLLATO")): sTagText = listAppend(sTagText, "Controllato")]
[h, if(listContains(sTags, "RISOLUTO")): sTagText = listAppend(sTagText, "Risoluto")]
[h, if(listContains(sTags, "SANGUINAMENTO")): sTagText = listAppend(sTagText, "Sanguinamento")]
[h, if(listContains(sTags, "VELENO")): sTagText = listAppend(sTagText, "Veleno")]

[h, macro("powers/generaOpportunita@this"): json.append(oToken,spellName)]
[h, if(macro.return): sOpp = "Sì"; sOpp = "No"]

[h, macro("utility/textProcessHTML@this"): getLibProperty("descrizione",spellName)]
[h: sText = macro.return]

[h: iRecupero = getLibProperty("recupero",spellName)]
[h, if(!isNumber(iRecupero)): iRecupero = 0]
[h: sArea = strformat("%d %s",getSpellAoE(oToken,spellName),getAoEShape(spellName,oToken))]

[dialog5(sDialog,"width=700; height=650; temporary=0;"):{
<html>
<head> 
	<link rel="stylesheet" type="text/css" href="lib://Scheda/macro/CharSheet5_css"><!-- ?cachelib=false-->
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

[h: imgA = getImage(spellName)]
[h: sImage = strformat("<img src='%{imgA}' width='50' length='50'/>")]
[h: sFluffName = getLibProperty("nome_decorativo",spellName)]
[r: sImage]
<div class="spellTitle">[r: sFluffName]</div>
<div class="spellData">
	<div>Scuola: <span>[r: getScuola(oToken,spellName)]</span></div>
	<div>Tipo: <span>[r: getLibProperty("tipo",spellName)]</span></div>
	<div>Elemento: <span>[r: getLibProperty("elemento",spellName)]</span></div>
	<div>Durata: <span>[r: getSpellDurata(oToken,spellName)]</span></div>
	<div>Raggio d&rsquo;azione: <span>[r: getSpellRange(oToken,spellName)]</span></div>
	<div>Area d&rsquo;effetto: <span>[r: sArea]</span></div>
	<div>Tiro Salvezza: <span>[r: getLibProperty("TS",spellName)]</span></div>
	<div>Componenti: <span>[r: getLibProperty("componenti",spellName)]</span></div>
	<div>Recupero: <span>[r: iRecupero]</span></div>
	<div>Opportunità: <span>[r: sOpp]</span></div>
	<div>Medium: <span>[r: getLibProperty("proiettile",spellName)]</span></div>
	<div>[r: sTagText]</div>
</div>
[h: sTags = getLibProperty("tags",spellName)]
<div class="descrizione" style="max-height: 20rem;">
	[h, if(bSoglia): sText = strformat("<div style='font-style: italic; margin-bottom: 5px;'>Soglia di Potere: %{iSogliaRate}%</div>%{sText}")]
	[r: sText]
</div>

</body>
</html>
}]

[macro("setForceItemCastOverride@Lib:OggettiUsabili"): json.append(oToken,0)]
