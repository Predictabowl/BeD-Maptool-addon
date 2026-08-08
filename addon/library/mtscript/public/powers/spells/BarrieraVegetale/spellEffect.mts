[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "BarrieraVegetale"]
[h: sName = fetchSpellProp(spellName,"nome_decorativo")]

[h: oEffetto = json.set("","effetto",sName,"stato","Protezione","subito",1,"tipo","Magia","mutex",spellName)]

[h: temp = json.set("","tipo","macroCall","macroName","powers/spells/BarrieraVegetale/cleanUp@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0)]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

[h: setCoperturaSlot(0.1,target,spellName)]