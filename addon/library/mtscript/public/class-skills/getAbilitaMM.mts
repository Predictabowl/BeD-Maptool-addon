[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iBase = getLibProperty("MM",sLibAbilita)]

[h, if(iBase == ""): return(0,0)]
[h, if(isNumber(iBase)): return(0, iBase)]

[h, macro("getMMBase@"+ sLibAbilita): json.append(oToken, iBase)]
