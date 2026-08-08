[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "Barricata"]
[h: setCoperturaSlot(0.18, source, spellName)]

[h: temp = json.set("","macroName","powers/spells/Barricata/removeEffect@lib:it.aldinucci.piero.bed.maptool.ruleset", "tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","target",source,"tipo","Fisico","params",altro,"verbose",0, "stato", "Copertura")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]