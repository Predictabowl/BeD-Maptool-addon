[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "DistruggereIlMale"]
[h: sRace = trim(lower(getProperty("Cat_Razziale", target)))]
[h, if(sRace == "non morto" || sRace == "demone" || sRace == "aberrazione"): sDanno = "1d6+3"; sDanno = "1d6"]

[h: jParams = json.set(macro.args,"spell",spellName,"danno",sDanno)]
[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]
