[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ScudoCristallino"]

<!-- Effetti da applicare -->

[h: oEffetto = json.set("","stato","Protezione","subito",1)]

[h: temp = json.set("","tipo","onceMod","key","Parare","value",9,"moltiplicabile",1)]
[h: altro = json.append("",temp)]
[h: temp = json.set("","tipo","macroCall","macroName",buildSpellMacroName("ScudoCristallino","removeEffect"))]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set(oEffetto,"params",altro,"verbose",0)]


[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: setCoperturaSlot(0.05,target, spellName)]