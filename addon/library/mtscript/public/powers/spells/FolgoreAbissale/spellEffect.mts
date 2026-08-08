[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]



[h: spellName = "FolgoreAbissale"]

[macro("powers/isEnergiaDistruttiva@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: bEnergia = macro.return]
[h: bMaledetto = isMaledetto(target)]

[h: sDanno = "1d9-1"]
[h, if(!bEnergia && bMaledetto): sDanno = "1d11-1"]
[h, if(bEnergia && !bMaledetto): sDanno = "1d12-1"]
[h, if(bEnergia && bMaledetto): sDanno = "1d14-1"]


[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]


