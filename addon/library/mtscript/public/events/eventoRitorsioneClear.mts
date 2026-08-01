[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]
[h: sEffectName = json.get(macro.args,"effectName")]

[h, if(sEffectName == ""): sEffectName = spellName]

[h: jData = getSpellData(source, sEffectName)]
[h, if(json.isEmpty(jData)): return(0,"")]
[h: jData = json.remove(jData, "ritorsione-hitted")]
[h: setSpellData(source, sEffectName, jData)]