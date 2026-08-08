[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ColpiPesanti"]
[h: sMsg = ""]

<!-- CheckspellCast viene usato solo per vedere se il potere è lanciabile, per controllare che si stia usando l'arma giusta -->

[bAtterrato = getState("Atterrato",target)]
[h, if(bAtterrato), code:{
	[macro("powers/checkSpellCast@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,spellName)]
	[h, if(macro.return != 0), code:{
		[iBonus = 3]
		[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"LA",iBonus)]
		[h: sNomeFluff = fetchSpellProp(spellName,"nome_decorativo")]
		[h: oIm = fetchSpellImage(spellName)]
		[h: sMsg = "<br><img src='"+ oIm+"' width='25' height='25' /> "]
		[h: sMsg = strformat("%{sMsg}&nbsp;%{sNomeFluff} (%+d LA contro i nemici Atterrati)",iBonus)]
	}]
}]

[h: macro.return = sMsg]