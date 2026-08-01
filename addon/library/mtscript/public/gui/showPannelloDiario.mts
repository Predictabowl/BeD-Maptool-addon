[h: oToken = findToken(arg(0))]
[h, if(oToken == ""): oToken = getImpersonated()]

[h: sDialog = "DialogPannelloDiario"]

[h: switchToken(oToken)]

[macro("core/getJournalEntries@this"): 0]
[h: jEntries = macro.return]
[h: iJournalSel = getStrProp(Lista_Dati,"journalSelectedEntry")]
[h, if(!isNumber(iJournalSel)): iJournalSel = 0]
[h: sJournalSel = listGet(jEntries,iJournalSel)]
[h, if(listCount(jEntries) > iJournalSel), code:{
	[macro("core/getJournalEntry@this"): sJournalSel]
	[sSelEntry = macro.return]
};{
	[sSelEntry = ""]
}]

[h: sGruppoPreferenze = "Dialog_Diario_Campagna"]
[h: iLarg = getPreferenza("larghezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iLarg)): iLarg = 700]
[h: iAltezza = getPreferenza("altezza",oToken,sGruppoPreferenze)]
[h, if(!isNumber(iAltezza)): iAltezza = 620]

[dialog5(sDialog, strformat("temporary=1; width=%{iLarg}; height=%{iAltezza}; closebutton=0; noframe=0;")):{
<html>

<head> 
	<link rel="stylesheet" type="text/css" href="lib://Scheda/macro/CharSheet5_css">
	<title>Diario</title> 
	<style>[r:"
		.diario {
			font-family:'EB Garamond';
			font-size: 16px;
			height: 70vh;
		}
		"]
	</style>
</head>
<body align="center">
	<div>
		<h2> Diario di Campagna </h2>
		<div style="display:flex; gap:15px; justify-content: space-evenly; margin-left:5px; margin-right:5px;">
			<div style="height:100%">
				<select class="diario" size="10">
					[h: iI = 0]
					[r, foreach(sEntry,jEntries), code:{
						[h, if(iJournalSel == iI): sSelected = "selected"; sSelected = ""]
						<option value="[r: sEntry]" onclick="clickEntry([r: iI])" [r:sSelected]>[r: sEntry]</option>
						[h: iI = iI + 1]
					}]
				</select>
				<div style="display:flex; gap: 5px; justify-content:center; margin-top:5px;">
					<button onclick="clickActionForm('newEntry')">Nuovo</button>
					<button onclick="clickActionForm('deleteEntry')">Elimina</button>
				</div>
			</div>
			<div  style="flex-grow: 1; height:100%;">
				<textarea class="diario" form="main-form" id="testo-journal" name="testo-journal" style="width:100%;">[r: sSelEntry]</textarea>
				<div style="margin-top: 5px;">
					<button onclick="clickActionForm('saveText')">Salva Testo</button>
				</div>
			</div>
		</div>
		<div style="display:block">
			<button onclick="clickActionForm('chiudiDialog')">Chiudi</button>
		</div>
	</div>

	<form id="main-form" method="json" action="[r:macroLinkText("gui/execFormDiario@this")]">
		<input type="hidden" id="action-performed" name="action-performed" value="">
		<input type="hidden" id="key-value" name="key-value" value="[r: sJournalSel]">
		<input type="hidden" name="token" value="[r: oToken]">
	</form>

	<script>[r:"
		function clickEntry(entryKey){
			document.getElementById('action-performed').setAttribute('value','changeEntry');
			document.getElementById('key-value').setAttribute('value',entryKey);
			document.getElementById('main-form').submit();
		}

		function clickActionForm(actionName){
			document.getElementById('action-performed').setAttribute('value',actionName);
			document.getElementById('main-form').submit();
		}
	"]
	</script>
</body>
</html>
}]
