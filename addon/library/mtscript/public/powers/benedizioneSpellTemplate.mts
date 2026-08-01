[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]
[h: oEffetto = json.get(macro.args,"effetto")]
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale -->
[h: bBloccaTS = json.get(macro.args,"bloccaTS")] <!-- Opzionale -->

[h: sEffetto = getLibProperty("nome_decorativo",spellName)]

[h: oEffetto = json.set(oEffetto,"effetto",sEffetto,"stato","Benedizione","tipo","Benedizione","mutex","")]

[macro("powers/effectSpellTemplate@this"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto,"LL",iLL,"bloccaTS",bBloccaTS)]