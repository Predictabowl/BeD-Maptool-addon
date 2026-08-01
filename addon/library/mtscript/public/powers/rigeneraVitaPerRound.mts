[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParams = json.get(macro.args,"parametri")]

[h: broadcast(strformat("DEPRECATED: %s@%s"),getMacroName(),getMacroLocation())]

[h: sMsg = ""]

[h, if(bRemove != 1), code:{
	[h: sCuraLL = string(json.get(oParams,"curaLL"))]
	[h: iLL = json.get(oParams,"LL")]
	[h: sElemento = json.get(oParams,"elemento")]
	[h: oOrigine = json.get(oParams,"lanciatore")]

	[h: param = json.set("","LL",iLL,"healLL",sCuraLL,"target",target,"source",oOrigine,"elemento",sElemento)]
	[macro("powers/executeSpellHeal@this"): param]
	[macro("utility/popMessaggio@this"): json.set("","token",target,"key","strCura")]
	[sMsg = macro.return]
}]

[h: macro.return = sMsg]