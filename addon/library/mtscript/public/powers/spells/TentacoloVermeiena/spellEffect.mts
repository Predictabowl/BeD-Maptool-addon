[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "TentacoloVermeiena")]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d3")]
[h: iLL = json.get(macro.return,"LL")]

[macro("combat/getUltimaDifesa@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: difesa = upper(macro.return)]
[h, if(difesa == "PARATO"): return(0,"")]

[h: oParam = json.set("","nomeStatoBase","Stordimento","moltiplicatore",2)]
[h: temp = json.set("","tipo","macroCall","macroName","powers/afflizioneStatoTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",oParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("","params",altro,"verbose",0)]

[macro("powers/velenoSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"LL",iLL)]