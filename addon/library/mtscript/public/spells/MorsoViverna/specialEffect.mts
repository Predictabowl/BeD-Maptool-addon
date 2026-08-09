[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: params = json.get(macro.args,"parametri")]
[h: iLP = json.get(params,"iLP")]
[h: stack = json.get(params,"stack")]

[h, if(remove ==""): remove = 0]

[r, if(remove == 1), code:{
};{
	[h: dmg = stack*iLP]
	[h: param = json.append(target,dmg)]
	[h, macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[h: nome = fetchSpellProp("MorsoViverna","nome_decorativo")]
	[r: nome] infligge <span style="color:red;font-weight:bold;"> [r: dmg] </span> danni a [r: getName(target)].<br>
}]
