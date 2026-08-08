[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[h: iRange = fetchSpellProp(spellName,"raggio")]

[h: iReturn = 0]

[h, if(!isNumber(iRange)): return (0,0)]

[h, if(iRange > 0 && iRange < 6): iReturn = 1]

[h: macro.return = iReturn]