[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[h: compList = fetchSpellProp(spellName,"componenti")]
[h: iAnimeCost = listContains(compList,"A")]

[h: macro.return = iAnimeCost]