[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oOrigine = json.get(macro.args,"origine")]

[h: spellName = "ToccoProsciugante"]



[macro("combat/getUltimaDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: sDifesa = macro.return]

[h, if(sDifesa != "parato"), code:{
	[h: iMolt = 1]
	[h: sEffetto = "Debolezza"]
	[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",iMolt)]
	[h: oEffetto = macro.return]
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
	
	[h: sEffetto = "Annebbiato"]
	[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",iMolt)]
	[h: oEffetto = macro.return]
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
}]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target)]