[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sDrawId = json.get(macro.args, "drawId")]
[h: sMacroName = json.get(macro.args, "macroEffectName")]
[h: jMacroParam = json.get(macro.args, "macroEffectParam")]


[macro("utility/isDentroDraw@this"): json.append(target, sDrawId)]
[h, if(!macro.return): return(0, "")]

[h, macro(sMacroName): json.set(jMacroParam, "target", target)]
[h: sCaster = json.get(jMacroParam, "source")]
[macro("powers/generaSpellMsg@this"):json.append(sCaster,target)]
[h: macro.return = popMessaggio(sCaster, "strPotere")]