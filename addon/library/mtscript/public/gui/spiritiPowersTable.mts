[h: oToken = arg(0)]
[h: sSpiritName = arg(1)]

[h: aListaPot = getPoteriSpirito(oToken, sSpiritName)]
[h: sTableBody = "<table><thead/><tbody>"]
[h, foreach(oInc, aListaPot), code:{
	[sJScriptSpell = strformat('apri_dialog_descrizione("%{oInc}")')]
	[sNameInc = fetchSpellProp(oInc,"nome_decorativo")]
	[sSpellType = fetchSpellProp(oInc,"tipo")]
	[sRow = strformat("<tr class='spellFont'>
		<td class = '%{sSpellType}' title='Leggi descrizione' onclick='%{sJScriptSpell}'>%{sNameInc}</td>
		</tr>")]
	[sTableBody = strformat("%{sTableBody}%{sRow}")]
}]

[h: sTableBody = sTableBody + "</tbody></table>"]
[h: macro.return = sTableBody]