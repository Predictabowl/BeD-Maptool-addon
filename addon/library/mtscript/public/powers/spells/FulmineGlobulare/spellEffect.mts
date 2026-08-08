[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]


[h: spellName = "FulmineGlobulare"]

[h: bEnergia = isEnergiaDistruttiva(source)]
[h: bSpalle = isAlleSpalle(source,target,bOpp)]]

[h: sDanno = "1d6-1"]
[h, if(bEnergia || bSpalle): sDanno = "1d8-1"]
[h, if(bEnergia && bSpalle): sDanno = "1d10-1"]


[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]


