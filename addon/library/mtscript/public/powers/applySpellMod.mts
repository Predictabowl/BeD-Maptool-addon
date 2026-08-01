[h: source = json.get(macro.args,0)]
[h: spellName= json.get(macro.args,1)]
[h: sStat = json.get(macro.args,2)]
[h: iStat = json.get(macro.args,3)]

[macro("powers/getSpellMod@this"): json.append(source,spellName,sStat)]
[h: iMod = json.get(macro.return,"mod")]
[h: dPerc = 1+json.get(macro.return,"perc")]
[h: return =floor((iStat+iMod)*dPerc)]

[h:macro.return=return]