[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sDrawId = json.get(macro.args, "drawId")]
[h: sMacroName = json.get(macro.args, "macroEffectName")]
[h: jMacroParam = json.get(macro.args, "macroEffectParam")]

[h: sMap = getCurrentMapName()]

[h: switchToken(target)]
[h: jPath = getLastPath()]
[h: aPath = movedOverDrawing(sMap, sDrawId, jPath)]
[h, if(json.isEmpty(aPath)): return(0,"")]

[h, macro(sMacroName): json.set(jMacroParam, "target", target)]
[h: sCaster = json.get(jMacroParam, "source")]
[macro("generaSpellMsg@Lib:Poteri"):json.append(sCaster,target)]
[h: macro.return = popMessaggio(sCaster, "strPotere")]