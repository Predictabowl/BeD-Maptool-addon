[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: spellName = "FialaAcquaSanta"]

[h: sCatRaz = upper(trim(getProperty("Cat_Razziale",target)))]
[h, if(sCatRaz != "NON MORTO" && sCatRaz != "DEMONE"), code:{
	[appendMessaggio(source,"strPotere",strformat("%s è immune agli effetti di ",getName(target), fetchConsumableProp(spellName,"nome_decorativo")))]
	[return(0,"")]
}]

[macro("consumables/getItemAuto@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, spellName ,oUseParam)]
[h: jArgs = json.set("","source",source,"target",target,"danno","1d6","useParam",oUseParam)]
[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(jArgs,"spell",spellName,"LP",getLLOggetto(macro.return))]