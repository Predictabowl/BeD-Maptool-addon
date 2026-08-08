[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: params = json.get(macro.args,"parametri")]
[h: danno = json.get(params,"danno")]
[h, if(remove ==""): remove = 0]

[r, if(remove == 1), code:{
};{
	[h: dmg = eval(string(danno))]
	[h: param = json.append(target,dmg)]
	[macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
}]
