[h: oToken = arg(0)]
[h: sCat = arg(1)]

[h: sMacro = macroLinkText("gui/installaEquipToToken@this")]

[h: sHtml = strformat("
	<div>
		%{sCat}
	</div>
	<form method='json' action='%{sMacro}'>
		<div>
			<select name='idDB' size='15'>")]

			
[h, macro("items/getListaOggettiByCat@this"): sCat]
[h: oItems = macro.return]
[h, foreach(oItem,oItems), code:{
	[sNome = json.get(oItem,"nome")]
	[sId = json.get(oItem,"idDB")]
	[sHtml = strformat("%{sHtml}
		<option value='%{sId}'>%{sNome}</option>
	")]
}]

[h: sHtml = strformat("%{sHtml}
			</select>
		</div>
		<div>
			<input type='hidden' name='categoria' value='%{sCat}'>
			<input type='hidden' name='token' value='%{oToken}'>
			<input type='submit' value='installa'>
		</div>
	</form>
")]

[r: sHtml]