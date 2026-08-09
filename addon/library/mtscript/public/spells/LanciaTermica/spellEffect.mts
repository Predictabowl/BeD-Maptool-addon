[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "LanciaTermica"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h, if(getState("Incendio",target)): sDanno = "1d10"; sDanno = "1d8"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]