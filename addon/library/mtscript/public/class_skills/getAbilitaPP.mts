[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iBase = getLibProperty("PP",sLibAbilita)]

[h, if(iBase == ""): return(0,0)]
[h, if(isNumber(iBase)): return(0, iBase)]

[h, macro("getPPBase@"+ sLibAbilita): json.append(oToken, iBase)]
