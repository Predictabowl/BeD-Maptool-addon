[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParams = json.get(macro.args,"parametri")]

[h, if(bRemove == 1): return(0,"")]

[h: iRoll = roll(1,100)]
[h, if(iRoll < 51): return(0,"")]

[h: spellName = "MalattiaLabirintite"]
[h: param = json.set("","target",target,"effetto","Atterrato")]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[macro("core/ApplyEffectIfNotPresent@lib:it.aldinucci.piero.bed.maptool.ruleset"):macro.return]
[h: sMsg = strformat("<img src='%s' width='25' height='25'/>&nbsp;%s - %s",fetchSpellProp(spellName,"nome_decorativo"),getImage(spellName),popMessaggio(target,"msgEffetto"))]