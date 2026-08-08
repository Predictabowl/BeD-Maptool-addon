[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]]
[h: oParam = json.get(macro.args,"parametri")]

[h: source = json.get(oParam,"source")]
[h: spellName = "CommozioneCelebrale"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: sOrigine = strformat("<br><img src='%s' width='25' height='25' /> &nbsp; %s",getImage(spellName), nomeDec)]
[h: nomeEffetto = strformat("%s %s",nomeDec,getName(source))]

[h: msg = ""]
[h, if(remove != 1), code:{
	[h: iDanno = json.get(oParam,"danno")]
	[h: dannoParam = json.set("","target",target,"source",source,"valore",iDanno,"origine",sOrigine,"verbose",0)]
	[macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): dannoParam]
	[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",target,"key","strDanno")]
	[msg = macro.return]
};{
	[sEffetto = json.get(oParam,"effettoAux")]
	[if(sEffetto != ""): rimuoviEffetto(target,sEffetto)]
}]

[h: macro.return = msg]
