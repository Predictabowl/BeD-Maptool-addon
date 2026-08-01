[h: oToken = json.get(macro.args, "token")]
[h: sOggetto = json.get(macro.args, "itemId")]

[macro("mobs/findOggettoFromEquip@this"): json.append(oToken, sOggetto)]
[h: oOggetto = macro.return]

[h: sLink = macroLinkText("gui/dialogOggettoStats@lib:it.aldinucci.piero.bed.maptool.ruleset", "", oOggetto)]
[h: sNome = json.get(oOggetto, "nome")]
[h: sTokenName = getName(oToken)]
[h: sImg = getImage(json.get(oOggetto, "icona"))]
[h: sMsg = strformat("<table><tr>
		<td>%{sTokenName} &rarr;</td>
		<td><img src='%{sImg}' width='30'/></td>
		<td><a href='%{sLink}' style='padding:12;'>%{sNome}</a></td>
	</tr></table>
")]
[h: broadcast(sMsg)]