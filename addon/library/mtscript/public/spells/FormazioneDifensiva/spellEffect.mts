[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FormazioneDifensiva"]

[h: oEffectParam  = json.set("","origine",source)]
[h: temp = json.set("","macroName",buildSpellMacroName("FormazioneDifensiva","auraEffect"),"tipo","macroCall","parametri",oEffectParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","stato","Copertura","subito",1,"params",altro,"verbose",0)]

[h: jParams = json.set("","origine",target,"caster",source,"spellName",spellName,"effetto",oEffetto)]
[h, macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]