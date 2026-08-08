[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "RequiescatInPace"]
[h: sRace = trim(lower(getProperty("Cat_Razziale", target)))]
[h, if(sRace != "non morto"), code:{
	[appendMessaggio(source,"strPotere",strformat("%s è immune agli effetti dell'incantesimo",getName(target)))]
	[return(0,"")]
}]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, spellName)]
[iLL = macro.return]
[h: jParams = json.set(macro.args,"spell",spellName,"danno","1d7", "LP", iLL)]
[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]
