[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]
[h: oEffetti = json.get(macro.args,"listaEffetti")]

[macro("powers/getCostoMant@this"): json.append(source,spellName)]
[h, if(macro.return == ""): return(0,0)]

[macro("powers/addMantenimento@this"): json.set("","source",source,"spellName",spellName)]

[h: oParam = macro.args]

[h,foreach(sEffetto,oEffetti), code:{
	[oParam = json.set(oParam,"nomeEffetto",sEffetto)]
	[macro("powers/linkEffectToMant@this"): oParam]
}]

