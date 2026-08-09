[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "DifesaAFortezza"]

[h: temp = json.set("","key","Mod_Danno_In","value",-0.16,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","target",source,"tipo","Fisico","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]