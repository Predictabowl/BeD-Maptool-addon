[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: spellName = "LanciaDemoniaca")]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: nomeEffetto = strformat("%s (%s)",nomeDec,getName(source))]

[macro("core/popStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"EnergiaDistruttiva")]
[h, if(macro.return > 0): sDanno="1d6+1"; sDanno="1d5"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]
[h: iDanno = json.get(macro.return,"danno")]
[h: iLL = json.get(macro.return,"LL")]


[h: bFlag = 0]
[macro("core/retrieveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"stato","Debolezza")]
[h , if(!json.isEmpty(macro.return)):bFlag = 1]

[h, if(!bFlag), code:{
	[macro("core/retrieveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"stato","Annebbiato")]
	[h , if(!json.isEmpty(macro.return)):bFlag = 1]
}]

[h, if(!bFlag), code:{
	[macro("core/retrieveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"stato","Debilitato")]
	[h , if(!json.isEmpty(macro.return)):bFlag = 1]
}]

[h, if(bFlag), code:{
	[h: param = json.set("","target",target,"effetto","Atterrato")]
	[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	[h: oEffetto = macro.return]
	[h: effectDur = json.get(oEffetto,"durata")]

	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"durata",effectDur)]
}]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]