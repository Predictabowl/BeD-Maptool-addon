[h: source = json.get(macro.args,"source")]

[h: spellName = "SacrificioEsplosivo"]

[macro("core/getEffettoServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: sEffetto = macro.return]
[macro("core/getEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sEffetto)]
[h: oEffetto = macro.return]
[h: assert(!json.isEmpty(oEffetto),"Servitore Mancante (per determinare AOE)")]
[h: oOtherInfo = json.get(oEffetto,"otherInfo")]
[h: servitoreSpell = json.get(oOtherInfo,"spellName")]
[h: oSpellTags = fetchSpellProp(servitoreSpell,"tags")]

[h: sAOE = fetchSpellProp(spellName,"area")]
[h, if(listContains(oSpellTags,"EVOCAZIONE")): iReturn = listGet(sAOE,1); iReturn = listGet(sAOE,0)]


[h: macro.return = iReturn]