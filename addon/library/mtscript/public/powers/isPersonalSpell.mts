[h: source = arg(0)]
[h: spellName = arg(1)]
[h, if(argCount() > 2): oParams = arg(2); oParams = "{}"]


[h: iRange = getSpellRange(source, spellName, oParams)]
[h: isAoE = json.get(oParams, "isAoE")]
[h, if(!isNumber(isAoE)): isAoE = getSpellAoE(source, spellName, oParams)]

[h, if(iRange == 0 && isAoE == 0): return(0,1)]

[h: macro.return = 0]