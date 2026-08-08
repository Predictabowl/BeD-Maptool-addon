[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]
[h: oOrigine = json.get(macro.args,"origine")]

[h: iDanno = json.get(eventParam,"danno")]
[h: fPCura = 12]
[h, if(getState("Sanguinamento",target)): fPCura = fPCura + 6]

[h: fCura = iDanno*fPCura/100]

[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","LL",1,"healLL",fCura,"target",source,"source",oOrigine,"critRes",0)]
[h: iCura = macro.return]

[h: msg = ""]
[h, if(iCura >0), code:{
	[spellName = "AuraVampirica"]
	[h: nomeFluff = fetchSpellProp(spellName,"nome_decorativo")]

	[h: aImg = fetchSpellImage("AuraVampirica")]
	[h: msg = strformat("<br><img src='%{aImg}' width='25' height='25' /> ")]
	[h: msg =strformat("%{msg} %{nomeFluff} (%{fPCura}% Cura)")]
	[macro("core/CuraTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","target",source,"valore",iCura,"verbose",1)]
}]
[h: macro.return = msg]