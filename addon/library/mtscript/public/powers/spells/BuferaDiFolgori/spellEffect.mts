[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: spellName = "BuferaDiFolgori"]

[h, if(isEnergiaDistruttiva(source)): sDanno = "1d11-1"; sDanno = "1d9-1"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]



