[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]

[h: sProiettile = upper(fetchSpellProp(spellName,"proiettile"))]

[macro("core/getOverride@this"): json.append(source,"SpellRangeTouch")]
[if (macro.return > 0): sProiettile = "MATERIALE"]

[h: macro.return = sProiettile]