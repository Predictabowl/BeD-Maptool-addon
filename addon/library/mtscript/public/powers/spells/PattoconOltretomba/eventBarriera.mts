[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iLL = json.get(macro.args,"LL")]
[h: bCritRes = json.get(macro.args,"critRes")]
[h: oOrigine = json.get(macro.args,"origine")]
[h: sEffect = json.get(macro.args,"effectName")]

[h: sEventType = "On_Before_Damaged"]
[h: spellName = "PattoconOltretomba"]

[h: iCariche = getSpellData(source, sEffect)]
[h, if(iCariche < 1): return(0,"")]

[h: oRisorse = json.set("", "token", source, "PF", 1)]
[h: bFlag = json.get(canPayAction(oRisorse), 0)]
[h, if(!bFlag): return(0,"")]

[h: sBarriera = strformat("Effetto-%s",sEffect)]
[h: msgOut = ""]

[h: oEffetto = json.set("","target",source,"effetto",sBarriera,"durata",1,"subito",1,"tipo","Nascosto")]

[h: temp = json.set("","tipo","macroCall","macroName","powers/spells/PattoconOltretomba/effettoBarriera@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0,"messaggi",0)]

[h, macro("core/ApplyEffectIfNotPresent@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffetto]
[h, if(macro.return), code:{

	[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","LL",iLL,"target",source,"source",oOrigine,"healLL",2, "critRes", bCritRes)]
	[h: iBarriera = macro.return]

	[macro("core/modPVT@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,iBarriera,spellName)]
	[macro("core/payAction@lib:it.aldinucci.piero.bed.maptool.ruleset"):oRisorse]
	[iCariche = iCariche -1]
	[setSpellData(source, sEffect, iCariche)]

	[h: sImg = getImage(spellName)]
	[nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	[h: msgOut = strformat("<br><img src='%{sImg}' width='25' height='25' /> %s genera una barriera (+%{iBarriera} PVT <span style='color:orange;font-weight:bold;'>-1 </span>PF) ",nomeDec)]
}]

[h: macro.return = msgOut]