[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SacrificioEsplosivo"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h: switchToken(source)]
[h: sDanno = "1d9"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]