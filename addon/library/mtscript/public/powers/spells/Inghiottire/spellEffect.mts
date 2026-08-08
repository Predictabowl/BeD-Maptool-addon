[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Inghiottire"]
[h: sElemento = fetchSpellProp(spellName,"elemento")]
[h: sTSType = fetchSpellProp(spellName,"TS")]


[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target)]

[macro("powers/getTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"TSType",sTSType,"element",sElemento)]
[h: bTSRes = macro.return]

[h, if(bTSRes == 0), code:{
	[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"target",target,"spellName",spellName)]
	[iDurata = macro.return]
	[sNome = fetchSpellProp(spellName,"nome_decorativo")]
	[iLiv = getProperty("Livello",source)]
	[iDanno = floor(iLiv/2)+1]

	[h: param = json.set("","target",target,"durata",iDurata,"effetto",sNome,"stato","Sanguinamento","subito",0,"potenza","null","tipo","Nocivo","verbose",0)]

	[h: temp = json.set("","value",iDanno,"tipo","danno","key",source)]
	[h: altro = json.append("",temp)]
	[h: param = json.set(param,"params",altro)]
	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
}]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]


