[h: iLL = json.get(macro.args,"LL")] <!-- opzionale -->
[h: elemento = json.get(macro.args,"elemento")]
[h: healLL = json.get(macro.args,"healLL")]
[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: healBase = json.get(macro.args,"baseHeal")] <!-- opzionale -->
[h: spellName = json.get(macro.args,"spellName")] <!-- opzionale -->
[h: bCritRes = json.get(macro.args,"critRes")] <!-- opzionale -->
[h: iPCrit = json.get(macro.args,"potenzaCritico")] <!-- opzionale -->

[macro("powers/getSpellHeal@this"): macro.args]
[iCura = macro.return]
[h: param = json.set("","target",target,"source",source,"valore",iCura,"verbose",0)]
[macro("core/CuraTarget@this"): param]