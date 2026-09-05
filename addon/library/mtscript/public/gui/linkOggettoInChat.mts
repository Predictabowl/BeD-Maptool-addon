[h: oToken = json.get(macro.args, "token")]
[h: sOggetto = json.get(macro.args, "itemId")]

[h, macro("mobs/findOggettoFromEquip@this"): json.append(oToken, sOggetto)]
[h: oOggetto = macro.return]

[h: switchToken(oToken)]
[h: sNome = json.get(oOggetto, "nome")]
[h: sLink = macroLink(sNome, "gui/dialogDettagliOggetto@lib:it.aldinucci.piero.bed.maptool.ruleset", "", oOggetto)]
[h: sTokenName = getName(oToken)]
[h, macro("items/getItemIcon@this"): oOggetto]
[h: sImg = macro.return]
[h: tokenAsset = getTokenHandout()]
[h: sMsg = strformat("<table><tr>
		<td rowspan='2' style='border-right: 3px solid gray;'><img src='%{tokenAsset}' height='50'></td>
		<td colspan='2' style='font-weight:bold;'>%{sTokenName}</td>
		</tr><tr>
		<td><img src='%{sImg}' width='25'></td>
		<td>%{sLink}</td>
	</tr></table>")]
[h: broadcast(sMsg)]