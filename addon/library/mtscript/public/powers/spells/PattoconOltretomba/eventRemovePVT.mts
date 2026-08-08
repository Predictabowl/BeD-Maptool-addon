[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]
[h: sEffect = json.get(macro.args,"effectName")]

[h: spellName = "PattoconOltretomba"]
[h: iDanno = json.get(eventParam,"danno")]

[h, if(iDanno >0), code:{
	<!-- Se ho subito danno rimuovo l'effetto Barriera -->
	[h: sBarriera = strformat("Effetto-%s",sEffect)]
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sBarriera)]
	
	<!-- Se sono terminate le cariche l'incantesimo termina -->
	[iCariche = getSpellData(source, sEffect)]
	[if(iCariche < 1), code:{
		[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,sEffect)]
	}]

}]
[h: macro.return = ""]

