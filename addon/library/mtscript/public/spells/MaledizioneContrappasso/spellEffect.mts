[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaledizioneContrappasso"]

[h: temp = json.set("","tipo","macroCall","macroName","spells/MaledizioneContrappasso/removeEvents@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: bTSResult = json.get(macro.return,"TSResult")]
[h: iMolt = json.get(macro.return, "moltiplicatore")]


[h, if(!bTSResult), code:{
	[jParam = json.set("","moltiplicatore", iMolt)]
	[eventInstaller(target,"on_Attack",spellName,"spells/MaledizioneContrappasso/onAttackCheck@lib:it.aldinucci.piero.bed.maptool.ruleset", jParam)]
	[eventInstaller(target,"on_Spellcast_at",spellName,"spells/MaledizioneContrappasso/onSpellcastCheck@lib:it.aldinucci.piero.bed.maptool.ruleset", jParam)]
}]


















