[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "TentacoliParalizzanti"]

[h: sName = fetchSpellProp(spellName,"nome_decorativo")]

[macro("combat/getUltimaDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: difesa = upper(macro.return)]
[h, if(difesa != "PARATO"), code:{
	[h: param = json.set("","target",target,"effetto","Paralisi","moltiplicatore",1)]
	[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	[h: oEffetto = macro.return]
	[h: iEffectDur = json.get(oEffetto,"durata")]

	[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"CD",-2)]

	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"durata",iEffectDur)]
}]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]


