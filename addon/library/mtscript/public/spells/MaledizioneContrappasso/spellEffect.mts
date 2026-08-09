[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaledizioneContrappasso"]

[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("MaledizioneContrappasso","removeEvents"))]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: bTSResult = json.get(macro.return,"TSResult")]
[h: iMolt = json.get(macro.return, "moltiplicatore")]


[h, if(!bTSResult), code:{
	[jParam = json.set("","moltiplicatore", iMolt)]
	[eventInstaller(target,"on_Attack",spellName,buildSpellMacroName("MaledizioneContrappasso","onAttackCheck"), jParam)]
	[eventInstaller(target,"on_Spellcast_at",spellName,buildSpellMacroName("MaledizioneContrappasso","onSpellcastCheck"), jParam)]
}]


















