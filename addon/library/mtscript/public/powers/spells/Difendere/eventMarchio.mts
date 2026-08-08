[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sAttaccante = json.get(macro.args,"attaccante")]

[macro("mechanics/getMarchioProp@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"PROTEZIONE")]
[h: origine = macro.return]

[h: spellName = "Difendere"]
[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]
[h: effectName = strformat("Attivazione Marchio %{fluffName}")]
[h: iBonus = -0.45]

[h: iRange = getSpellRange(origine,spellName)]
[h: iDistance = getDistance(origine,0,source)]


[h,if(iDistance > iRange): return(0,"")]
[h, if(target == sAttaccante), code:{
	
	[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"Mod_Danno_In",iBonus)]
	[h: iImage = fetchSpellImage("Difendere")]
	[h: msgOut = "<br><img src='"+ iImage+"' width='25' height='25' /> "]
	[h: msgOut= strformat("%s &nbsp;%s offre un bonus di %+d MDR %s",msgOut,fluffName,floor(iBonus*100),getName(source))]
	[return(0, msgOut)]
}]


[h: macro.return = ""]