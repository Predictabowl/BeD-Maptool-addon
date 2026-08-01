[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: bOpp = json.get(macro.args,"isOpport")]
[h, if(!isNumber(bOpp)): bOpp = 0]

[h: Pmana = getSpellMana(json.set("","source",source,"spellName",spellName))]
[h: Pfatica = getSpellPF(json.set("","source",source,"spellName",spellName))]
[h: iMM = getSpellMM(source,spellName,bOpp)]
[h: iPP = getSpellPP(source,spellName,bOpp)]
[h: iPA = getSpellPAzione(source, spellName, bOpp)]

[h: macro.return = json.set("",	"token",source,"PA",iPA,"PF",Pfatica,"mana",Pmana,"MM",iMM,"PP",iPP)]
