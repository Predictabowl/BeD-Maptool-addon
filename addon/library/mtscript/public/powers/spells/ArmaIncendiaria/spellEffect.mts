[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ArmaIncendiaria"]

[h: oEffetto = json.set("","stato","Maestria")]
[h: temp = json.set("","tipo","macroCall","macroName","powers/spells/ArmaIncendiaria/removeEvent@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
[h: jEffectStats = macro.return]

[h: eventInstaller(target,"On_Hit", spellName,"powers/spells/ArmaIncendiaria/armaIncendiaria@lib:it.aldinucci.piero.bed.maptool.ruleset", jEffectStats)]