[h: source= json.get(macro.args,"source")]
[h: iCD = json.get(macro.args,"CD")]
[h: eventParam = json.get(macro.args,"eventParam")]


[h: sSpellCasted = json.get(eventParam,"spellName")]
[h: bAoE = isAoESpell(sSpellCasted, source)]
[h, if(bAoE): bFlag = isAoEHarmfulSpell(sSpellCasted) ;bFlag = isHarmfulSpell(sSpellCasted)]

[h, if(bFlag): pushStatModifier(source,"ModMoltLE",1)]

[h: macro.return = ""]