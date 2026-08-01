[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: spellName = json.get(macro.args,2)]
[h, if(json.length(macro.args)>3): origine = json.get(macro.args,3); origine = source]


[h: sRange = getSpellRange(source,SpellName)]
[h, if(isAzioneInCorso(source)): sRange = sRange + getSpellAoE(source,spellName)]

[macro("powers/getSpellOrigine@this"): json.append(source,spellName)]
[h: origine = macro.return]

[macro("core/isInRange@this"):json.set("","source",origine,"target",target,"portata", sRange)]
