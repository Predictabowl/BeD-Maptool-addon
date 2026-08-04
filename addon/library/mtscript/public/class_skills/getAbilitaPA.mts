[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iPABase = getLibProperty("PA",sLibAbilita)]

[h, if(isNumber(iPABase)): return(0, iPABase)]

[h: sCallback = json.get(iPABase, "callback")]
[h, macro(sCallback + "@Lib:AbilitaClasse"): json.append(oToken, sLibAbilita, "PA")]
