[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "PugnoStritolante"]
[h, if(getState("Atterrato", target)): sDmg = "1d9+1"; sDmg = "1d6"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDmg)]