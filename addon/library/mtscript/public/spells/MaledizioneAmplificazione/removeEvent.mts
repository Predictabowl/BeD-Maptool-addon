[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]


[h, if(bRemove == 1), code:{
	[spellName = "MaledizioneAmplificazione"]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"On_Effect_Received",spellName)]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"On_Spellcasted",spellName)]
}]

[h: macro.return = ""]