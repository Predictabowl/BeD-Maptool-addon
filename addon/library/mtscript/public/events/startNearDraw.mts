[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sDrawId = json.get(macro.args, "drawId")]
[h: iRange =  json.get(macro.args, "triggerRange")]
[h: sMacroName = json.get(macro.args, "macroEffectName")]
[h: jMacroParam = json.get(macro.args, "macroEffectParam")]


[macro("utility/distanzaTokenDraw@this"): json.append(sToken,sDrawId)]
[if(macro.return > iRange): return(0,"")]

[h, macro(sMacroName): json.set(jMacroParam, "target", target)]
[h: sCaster = json.get(jMacroParam, "source")]
[macro("powers/generaSpellMsg@this"):json.append(sCaster,target)]
[h: macro.return = popMessaggio(sCaster, "strPotere")]