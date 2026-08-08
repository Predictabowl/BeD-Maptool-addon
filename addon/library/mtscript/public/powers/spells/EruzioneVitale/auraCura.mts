[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: source = json.get(macro.args,"source")]
[h: iLP = json.get(macro.args,"LP")]
[h: jInfo = json.get(macro.args, "otherInfo")]
[h: sCaster = json.get(jInfo,"auraCaster")]
[h: idAura = json.get(jInfo,"idAura")]
<!-- Manca il critico da considerare -->

[h: spellName = "EruzioneVitale"]

[h, if(remove == 1), code:{
		[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","name",spellName,"event","On_Damaged","token",target)]
		[return(0,"")]
}]
[h, if(target == source): return(0,"")]


[h: msg = ""]
[h: sElemento = fetchSpellProp(spellName,"elemento")]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/isAlreadyHitByAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,idAura)]
[h: bColpito = macro.return]

[h, if(bColpito): return(0,msg)]

[macro("powers/executeSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","LL",iLP,"spellName", spellName, "elemento",sElemento,"healLL",1,"target", target, "source", sCaster)]
[iCura = macro.return]

[h: oMacroParam = json.set("","auraOwner",source,"idAura",idAura)]
[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","name",spellName,"macroName","powers/spells/EruzioneVitale/eventAura@lib:it.aldinucci.piero.bed.maptool.ruleset","macroParam",oMacroParam,"event","On_Damaged","token",target)]

[if(iCura > 0), code:{
	[macro("powers/addBersaglioColpitoAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,idAura)]

	[h: im = fetchSpellImage(spellName)]
	[h: msg = strformat("<br><img src='"+ im+"' width='25' height='25' /> %s",nomeDec)]
	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",sCaster,target)]
	[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",sCaster,"key","strPotere")]
	[msg = strformat("%{msg} %{macro.return}")]
}]


[h: macro.return = msg]