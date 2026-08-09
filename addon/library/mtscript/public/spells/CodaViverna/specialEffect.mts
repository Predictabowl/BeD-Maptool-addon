[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: params = json.get(macro.args,"parametri")]
[h: iLP = json.get(params,"iLP")]
[h: stack = json.get(params,"stack")]
[h: nome = fetchSpellProp("CodaViverna","nome_decorativo")]

[h, if(remove ==""): remove = 0]

[r, if(remove == 1), code:{
	[h: effetto = "Paralisi ("+nome+")"]
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,effetto)]
	
};{
	[h: dmg = stack*iLP*2]
	[h: param = json.append(target,dmg)]
	[h, macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

	[r: nome] infligge <span style="color:red;font-weight:bold;"> [r: dmg] </span> danni a [r: getName(target)].<br>
}]
