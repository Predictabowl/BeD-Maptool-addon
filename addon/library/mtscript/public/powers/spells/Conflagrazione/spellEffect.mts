[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Conflagrazione"]

[macro("powers/isEnergiaDistruttiva@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return): sDanno = "1d10"; sDanno = "1d7"]
[h, if(getState("Incendio",target)): sDanno = strformat("%{sDanno}+1")]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]

