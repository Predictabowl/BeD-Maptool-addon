[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EsplosionediFuoco"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d6")]

[h: sEffetto = "Atterrato"]
[h: iMolt = 1]

[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",iMolt)]
[h: oEffetto = macro.return]

[macro("core/getSizeCategory@lib:it.aldinucci.piero.bed.maptool.ruleset"): target]
[h: iSizeMod = max(macro.return, 0) *3]
[h: pushStatModifier(target, "TS", iSizeMod)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: bTS = json.get(macro.return,"TSResult")]

[h, if(bTS == 0), code:{
	[moveTokenFromSource(source,target,6)]
}]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]